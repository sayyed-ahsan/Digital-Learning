import clientPromise from '../../../middleware/database'

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const payments = await db.collection("enrollments").find({}).toArray();
        res.json(payments);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};