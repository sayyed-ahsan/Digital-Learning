import clientPromise from '../../../middleware/database'
export default async (req, res) => {
    const { blogId } = req.query

    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const query = { role: "Student" }
        const allStudent = await db.collection("users").find(query).toArray();
        res.json(allStudent);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};