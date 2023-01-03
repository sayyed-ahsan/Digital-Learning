import clientPromise from '../../../middleware/database'

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const users = await db.collection("users").find({}).toArray();
        res.json(users);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};