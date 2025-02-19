import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // console.log(body.data);

      const order = body?.data;
      const phone = order?.customer_details?.customer_phone;
      const customerId = order?.link_id;
      console.log(phone , customerId)

    // await retryOperation(() => sendEmail(data, "registrationSuccess"));

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);

    let data = {
      status: "false",
      message: error,
    };
    //   await retryOperation(() => sendEmail(data, "registrationFaliure"));

    return new Response("Internal Server Error", { status: 500 });
  }
}

