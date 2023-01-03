import clientPromise from "../../../middleware/database";

const client = await clientPromise;
const enrollmentsCollection = client.db('partsala').collection('enrollments')

export default async (req, res) => {
    if (req.method === 'POST') {
        const { transaction_id } = req.query;
        console.log(transaction_id);

        const result = await enrollmentsCollection.deleteOne(
            { tran_id: transaction_id }
        )
        console.log(result);

        if (result.deletedCount > 0) {
            res.redirect(`http://localhost:3000/payment/failed?transaction_id=${transaction_id}`)
        }

    } else {
        // Handle any other HTTP method
    }
}