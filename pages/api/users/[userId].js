import { ObjectId } from "mongodb";
import clientPromise from "../../../middleware/database";

export default async (req, res) => {
    if (req.method != "DELETE"){
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    const { userId } = req.query;
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const result = await db.collection("users").deleteOne({
            _id: ObjectId(userId)
        });
        res.send(result);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};
