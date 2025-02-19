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

const body = {
  cf_link_id: "6344037",
  customer_details: {
    customer_name: "Testing Contact Test",
    country_code: "+91",
    customer_phone: "7777777777",
    customer_email: "test@gmail.com",
  },
  enable_invoice: false,
  entity: "link",
  link_amount: 5,
  link_amount_paid: 0,
  link_auto_reminders: false,
  link_created_at: "2025-02-18T11:14:48+05:30",
  link_currency: "INR",
  link_expiry_time: "2025-03-20T11:14:48+05:30",
  link_id: "133",
  link_meta: { payment_methods: "", upi_intent: "false" },
  link_minimum_partial_amount: null,
  link_notes: {},
  link_notify: { send_email: false, send_sms: false },
  link_partial_payments: false,
  link_purpose: "Instagram Ad Payment",
  link_qrcode:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFAAQMAAAD3XjfpAAAABlBMVEX///8AAABVwtN+AAAC2UlEQVR4nOyaO5KkMBBEswMDkyNwFG420tyMo3AEmRgKciOz1L3duxNrrSVRFkM/nIqqrN/gtttuu+3/2krZg2XLFcDjXPZEHniQeiBrl2AGsOk1MB+4sOyYyHwB+BIwOkgem/0or11YeE1lzZi5f+mLjsF4nh1JghU9BTf4ApcddT42KoymgqR46hl0zpywpCh5mPW7tOWn5BoNDMWV0E7nul9z2b7rcqQmvX9Jcx9g2NMru5QEz5z5wcYDQ3HlsZm7wsiKK+llxfrmx47AlYCCplVXJdA3eUhSouCMDUZ5cfTw1FfRfDjdFEEJfYI8BZfN0aOHy05TKNXlQB0aXDlR1be0LwBYaJv0MmN08Fx3h1m1EJWmPbPmmYJUewThVJIzKPe4c5/Kqj+kLSQGB2O2xUaodT0dMDHPpM9S3BOYJLTq05MlBdhcfS8VnBoN69AgmtBKW+xQT3GRXG/zTHegg+ZVffnqzbJn/NHBZ8OuIdfu0zwjffmaeKQuwTXXmcQcFWXDc4rTm8d7zgwKcjq9Go2KQq952uYjqXOvPYKQfrq6qrzsAhPLmh+Ono86Myao4S32HCc2OfS7Nh1WlvUK1thyIU1RY3Zn0jXLNW99+JigJWV3nZHiejvcJGXjRxb2BAIvr0TvFfpJtjB6sxHBlbWdjhJjCeiGXaM9o+D0CCpVvOahxxSD0s/Ye30k14hgLEG9+FL0XHOsiBlvPjbsQ4I5GvaY8Xf95JyiO3f+LkidgYIuC21kGb0Z9hDLG8xOLqXS8z4t0H6U5S7BsLbvadcUZdLD02wB6tBgXCD9GF2KxrnFl4Y4S6NL0Nfmttyyn/zvKLEFmj6auDHBllPyI+mrvO+uTq73W1yHoHLGdcab4eVIsfp8vyGNDDJiJbqQujD7UM2yEn2CiOVWpIlvI3EwWyJnBgdDcTXIa5yLlkwNu6/yZf1TmvsAb7vtttv+bb8CAAD///W7NDlNNNX3AAAAAElFTkSuQmCC",
  link_status: "ACTIVE",
  link_url: "https://payments-test.cashfree.com/links/N84g4vlu0q6g",
  order_splits: [],
  terms_and_conditions: "",
  thank_you_msg: "",
};

const respose = {
  data: {
    link_amount: "5.00",
    link_currency: "INR",
    link_minimum_partial_amount: null,
    link_amount_paid: "5.00",
    link_purpose: "Instagram Ad Payment",
    link_notes: {},
    link_created_at: "2025-02-18T21:13:08+05:30",
    customer_details: {
      customer_phone: "918999878325",
      customer_email: "",
      customer_name: "",
    },
    link_meta: {
      notify_url: "https://webhook.site/ed67a245-78ef-4e84-8d4d-2375d311fc85",
      upi_intent: false,
      return_url: null,
      payment_methods: null,
    },
    cf_link_id: 6344755,
    link_id: "739369180",
    link_url: "https://payments-test.cashfree.com/links/L84i9epb8hh0",
    link_expiry_time: "2025-03-20T21:13:07+05:30",
    order: {
      order_id: "CFPay_L84i9epb8hh0_a38h188kr0",
      order_expiry_time: "2025-03-20T21:12:37+05:30",
      order_hash: "djB0JXWaee0rSX91XBsL",
      order_amount: "5.00",
      transaction_id: 5114916233545,
      transaction_status: "SUCCESS",
    },
    link_status: "PAID",
    link_partial_payments: false,
    link_auto_reminders: false,
    link_notify: { send_sms: true, send_email: false },
  },
  type: "PAYMENT_LINK_EVENT",
  version: 1,
  event_time: "2025-02-18T21:14:39+05:30",
};

// curl -X 'POST' \
//   'https://api.manychat.com/fb/subscriber/setCustomField' \
//   -H 'accept: application/json' \
//   -H 'Authorization: Bearer 840512:1737b55fc99997cf8c8f6472ec4ad394' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "subscriber_id": 739369180,
//   "field_id": 12540295,
//   "field_value": true
// }'