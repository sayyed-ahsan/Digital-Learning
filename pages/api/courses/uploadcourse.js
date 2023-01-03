import clientPromise from '../../../middleware/database'

export default async (req, res) => {
    if(req.method !== 'POST'){
        res.status(405).json({message: 'Method not allowed'});
        return;
    }
    try {
        const newCourse = req.body;
        const client = await clientPromise;
        const db = client.db("partsala");
        const result = await db.collection("courses").insertOne(newCourse);
        res.send(result);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};