import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const order = body?.data;
    const phone = order?.customer_details?.customer_phone;
    let customerId = order?.link_id;
    customerId = customerId.split('_')[0];
    // console.log(customerId)

    const url = "https://api.manychat.com/fb/subscriber/setCustomField";
    const token = process.env.ManyChatToken; 

    if (!token || !customerId) {
      return NextResponse.json(
        {
          message: "token or customerId is missing",
        },
        { status: 400 }
      );
    }

    const data = {
      subscriber_id: customerId,
      field_id: 12540295,
      field_value: true,
    };

    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, data, { headers });
    //   console.log("Response:", response.data);
    } catch (error) {

      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      return NextResponse.json(
        {
          message: "error in sending message to manychat",
        },
        { status: 500 }
      );
    }

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

