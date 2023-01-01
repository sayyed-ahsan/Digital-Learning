import clientPromise from '../../../middleware/database'

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const blogs = await db.collection("courses").find({}).toArray();
        res.json(blogs);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};