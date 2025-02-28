import axios from "axios";
import { NextResponse } from "next/server";

async function createSubscriber(name, phone) {
  const url = "https://api.manychat.com/fb/subscriber/createSubscriber";
  const token = process.env.ManyChatToken;

  const data = {
    first_name: name,
    phone: phone,
    whatsapp_phone: phone,
    has_opt_in_sms: true,
    consent_phrase: "True",
    optin_whatsapp: true,
    optin_phone: true,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    // console.log("Response:", response.data);
    return {
      status: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: false,
    };
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const info = body?.data;
    // console.log(info)
    const phone = info?.customer_details?.customer_phone;
    let customerId = info?.link_notes?.contactId;
    // customerId = customerId.s

    console.log(customerId);

    const url = "https://api.manychat.com/fb/subscriber/setCustomField";
    const token = process.env.ManyChatToken;

    if (!token || !customerId) {
      const name = "Aakash Sharma";

      const { data } = await createSubscriber(name, phone);

      console.log(data.data);

      customerId = data?.data?.id;
      console.log(customerId);

      if (!data.status) {
        return NextResponse.json(
          {
            message: "error in creating contact to manychat",
          },
          { status: 400 }
        );
      }
      // return NextResponse.json(
      //   {
      //     message: "Token or customerId is missing",
      //   },
      //   { status: 400 }
      // );
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
      // console.log("Response:", response);
    } catch (error) {
      console.error(
        "Error in manychats:",
        error.response ? JSON.stringify(error.response.data) : error.message
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
