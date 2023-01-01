import { ObjectId } from 'mongodb';
import clientPromise from '../../../middleware/database'




export default async (req, res) => {
    const { blogId } = req.query

    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const query = { _id: ObjectId(blogId) }
        const blogs = await db.collection("blogs").findOne(query);
        res.json(blogs);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};