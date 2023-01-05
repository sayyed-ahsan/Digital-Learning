import { ObjectId } from "mongodb";
import { resolve } from "node:path/win32";
import SslCommerzPayment from "sslcommerz-lts/api/payment-controller";
import clientPromise from "../../../middleware/database";

const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;

console.log(store_id, store_passwd);
const is_live = false; //true for live, false for sandbox

const client = await clientPromise;
const enrollmentsCollection = client.db("partsala").collection("enrollments");

export default async (req, res) => {
  const enroll = JSON.parse(req.body);

  console.log(enroll);
  // console.log(enroll.course_name)

  // {
  //     price: 20,
  //     course_name: 'Web Development',
  //     customer_name: 'Tom',
  //     customer_email: 'tom@gmail.com',
  //     payment_status: false
  // }

  // const client = await clientPromise;
  // const db = client.db("partsala");
  // const enrollCourse = await db.collection("courses").findOne({});

  const tran_id = new ObjectId().toString();
  console.log(tran_id);
  try {
    const data = {
      total_amount: enroll.price,
      currency: "USD",
      tran_id: tran_id, // use unique tran_id for each api call
      success_url: `https://digital-learning-ruddy.vercel.app/api/payment/success?transaction_id=${tran_id}`,
      fail_url: `https://digital-learning-ruddy.vercel.app/api/payment/failed?transaction_id=${tran_id}`,
      cancel_url: "http://localhost:3030/cancel",
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: enroll.course_name,
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: enroll.customer_email,
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };
    // console.log(data)
    // res.send(data)
    const sslcz = new SslCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      // console.log(apiResponse);
      enrollmentsCollection.insertOne({
        ...enroll,
        tran_id,
        payment_status: false,
      });
      res.send({ url: GatewayPageURL });
      // console.log({ url: GatewayPageURL })
    });

    // const enrollCollection = client.db('partsala').collection('enrollments')
    // const client = await clientPromise;
    // const db = client.db("partsala");
    // const result = await db.collection("enrollments").insertOne(enroll);
    // res.json(result);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
    resolve();
  }
};
