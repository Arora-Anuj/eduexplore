import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // console.log(body);

    //   const info = body?.data;
    // console.log(info)
    //   const phone = info?.customer_details?.customer_phone;
    //   let customerId = info?.link_notes?.contactId;
    // customerId = customerId.s

    //   console.log(customerId);

    const url = "https://api.cashfree.com/pg/links";
    //   const token = process.env.ManyChatToken;

    //   if (!token || !customerId) {
    //     const name = "Aakash Sharma";

    //     const { data } = await createSubscriber(name, phone);

    //     console.log(data.data);

    //     customerId = data?.data?.id;
    //     console.log(customerId);

    //     if (!data.status) {
    //       return NextResponse.json(
    //         {
    //           message: "error in creating contact to manychat",
    //         },
    //         { status: 400 }
    //       );
    //     }
    //     // return NextResponse.json(
    //     //   {
    //     //     message: "Token or customerId is missing",
    //     //   },
    //     //   { status: 400 }
    //     // );
    //   }
    //   const data = {
    //     subscriber_id: customerId,
    //     field_id: 12540295,
    //     field_value: true,
    //   };

    const headers = {
      "x-api-version": "2023-08-01",
      "x-client-id": process.env.cashfree_clientId,
      "x-client-secret": process.env.cashfree_clientSecret,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, body, { headers });
      console.log(response.data);
      // console.log("Response:", response);
    } catch (error) {
      console.error(
        "Error in cashfree route:",
        error.response ? JSON.stringify(error.response.data) : error.message
      );
      return NextResponse.json(
        {
          message: "error in generating the link",
        },
        { status: 500 }
      );
    }

    // await retryOperation(() => sendEmail(data, "registrationSuccess"));

    return NextResponse.json(
      {
        message: "Successfull",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing route:", error);

    let data = {
      status: "false",
      message: error,
    };
    //   await retryOperation(() => sendEmail(data, "registrationFaliure"));

    return new Response("Internal Server Error", { status: 500 });
  }
}
