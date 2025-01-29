import { NextResponse } from "next/server";
import admin from "firebase-admin";
// import { sendEmail } from "@/utlis/email";
// import { retryOperation } from "@/utlis/retryHandler";
import { db } from "@/app/firebaseConfig";

// Helper function to determine class based on age
function getClassFromAge(age) {
  age = Number(age);

  if (isNaN(age)) {
    throw new Error(`Invalid age: ${age}. Age must be a valid number.`);
  }
  age = Math.round(age);

  if (age >= 3 && age <= 8) return 3;
  if (age === 9) return 4;
  if (age === 10) return 5;
  if (age === 11) return 6;
  if (age === 12) return 7;
  if (age >= 13) return 8;

  throw new Error(`Invalid age: ${age}`);
}

async function checkPhoneExists(phoneNumber) {
  const querySnapshot = await db
    .collectionGroup("parentContacts")
    .where("parentContact", "==", phoneNumber)
    .get();

  if (querySnapshot.empty) {
    return { exists: false, parentId: null };
  }

  const parentContactDoc = querySnapshot.docs[0];
  const parentId = parentContactDoc.ref.parent.parent.id;
  return { exists: true, parentId };
}

async function createNewParent(phone, studentDetail) {
  const parentId = db.collection("Parents").doc().id;
  const parentRef = db.collection("Parents").doc(parentId);

  await parentRef.set({
    isManualPaidUser: true,
    manualExpirationDate: admin.firestore.Timestamp.fromDate(
      new Date("2025-02-14")
    ),
  });

  const parentContactRef = db
    .collection(`Parents/${parentId}/parentContacts`)
    .doc(phone);
  await parentContactRef.set({
    parentContact: phone,
    parentName: "Default",
    parentRelation: "None",
  });

  const userId = db.collection(`Parents/${parentId}/UserIds`).doc().id;
  const userRef = db.collection(`Parents/${parentId}/UserIds`).doc(userId);
  await userRef.set(studentDetail);

  return { parentId, userId };
}

async function createNewUserForExistingParent(parentId, studentDetail) {
  try {
    const userIdsRef = db.collection(`Parents/${parentId}/UserIds`);
    const existingUsersQuery = userIdsRef
      .where("userName", "==", studentDetail.userName)
      .where("class", "==", studentDetail.class);

    const querySnapshot = await existingUsersQuery.get();

    if (!querySnapshot.empty) {
      console.log(
        "Duplicate payment detected for user:",
        querySnapshot.docs[0].data()
      );

      const data = {
        parentId: parentId,
        UserId: studentDetail.userName,
        message: "A duplicate Entry is done for the above parent Id",
        status: "Already Done",
      };

      // await retryOperation(() => sendEmail(data, "registrationFaliure"));
      return {
        success: false,
        message: "Duplicate payment detected. User already exists.",
        existingUser: querySnapshot.docs[0].data(),
      };
    }

    // If no duplicates are found, create a new user
    const userRef = userIdsRef.doc();
    await userRef.set(studentDetail);

    const data = {
      parentId: parentId,
      userId: userRef.id,
      status: "success",
    };

    // await retryOperation(() => sendEmail(data, "registrationSuccess"));
    return {
      success: true,
      message: "User added successfully.",
      userId: userRef.id,
    };
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const order = body?.data?.order;
    const paymentStatus = order?.order_status;
    const phone = order?.customer_details?.customer_phone;

    const customerField = order?.customer_details?.customer_fields;

    const childName = customerField?.find(
      (field) => field.title === "Name of your child"
    )?.value;
    const age = customerField?.find(
      (field) => field.title === "Age of your child"
    )?.value;

    if (!paymentStatus || !childName || !age || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    // return NextResponse.json(
    //   {
    //     message: "working till here",
    //     phone,
    //     childName,
    //     age,
    //   },
    //   { status: 200 }
    // );

    const studentDetail = {
      userName: childName,
      class: getClassFromAge(age),
      gender: "none",
      schoolId: db.collection("Schools").doc("hc3ED2P35H7SABAonaV7"),
    };

    // return NextResponse.json(
    //   {
    //     message: "working till here",
    //     phone,
    //     childName,
    //     age,
    //   },
    //   { status: 200 }
    // );

    // const { exists, parentId } = await retryOperation(() =>
    //   checkPhoneExists(phone)
    // );
    const { exists, parentId } = await checkPhoneExists(phone);

    return NextResponse.json(
      {
        message: "working till here",
        phone,
        childName,
        age,
        exists,
      },
      { status: 200 }
    );

    if (exists) {
      // const userId = await retryOperation(() =>
      //   createNewUserForExistingParent(parentId, studentDetail)
      // );

      const userId = await createNewUserForExistingParent(
        parentId,
        studentDetail
      );

      return NextResponse.json(
        {
          message: "Phone exists. New user added successfully.",
          userId,
          parentId,
        },
        { status: 200 }
      );
    } else {
      // const { parentId, userId } = await retryOperation(() =>
      //   createNewParent(phone, studentDetail)
      // );
      const { parentId, userId } = await createNewParent(phone, studentDetail);

      const data = {
        parentId: parentId,
        userId: userId,
        status: "success",
      };

      // await retryOperation(() => sendEmail(data, "registrationSuccess"));

      return NextResponse.json(
        {
          message:
            "Phone does not exist. New parent and user created successfully.",
          parentId: parentId,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);

    let data = {
      status: "false",
      message: error,
    };
    // await retryOperation(() => sendEmail(data, "registrationFaliure"));

    return new Response("Internal Server Error", { status: 500 });
  }
}
