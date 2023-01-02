import clientPromise from '../../../middleware/database'

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const categories = await db.collection("categories").find({}).toArray();
        res.json(categories);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};