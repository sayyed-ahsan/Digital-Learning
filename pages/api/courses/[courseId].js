import { ObjectId } from 'mongodb';
import clientPromise from '../../../middleware/database'




export default async (req, res) => {
    const { courseId } = req.query

    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const query = { _id: ObjectId(courseId) }
        const course = await db.collection("courses").findOne(query);
        res.json(course);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};