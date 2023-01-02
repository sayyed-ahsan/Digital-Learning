import { ObjectId } from 'mongodb';
import clientPromise from '../../../middleware/database'




export default async (req, res) => {
    const { paymentId } = req.query

    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const query = { tran_id: paymentId }
        const paidInfo = await db.collection("enrollments").findOne(query);
        res.json(paidInfo);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};