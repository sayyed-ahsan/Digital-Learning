import clientPromise from "../../../middleware/database";

const client = await clientPromise;
const enrollmentsCollection = client.db("partsala").collection("enrollments");

export default async (req, res) => {
  if (req.method === "POST") {
    const { transaction_id } = req.query;
    console.log(transaction_id);

    const result = await enrollmentsCollection.updateOne(
      { tran_id: transaction_id },
      { $set: { payment_status: true, payment_At: new Date() } }
    );
    console.log(result);
    if (result.modifiedCount > 0) {
      res.redirect(
        `https://digital-learning-ruddy.vercel.app/payment/success?transaction_id=${transaction_id}`
      );
    }
  } else {
    // Handle any other HTTP method
  }
};
