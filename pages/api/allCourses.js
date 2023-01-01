import clientPromise from '../../middleware/database';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const posts = await db.collection("allCourse").find({}).toArray();

        res.json(posts);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};
