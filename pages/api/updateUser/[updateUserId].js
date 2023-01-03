import { ObjectId } from "mongodb";
import clientPromise from "../../../middleware/database";

export default async (req, res) => {
    if (req.method != "PUT") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }

    const { updateUserId } = req.query;
    const bio = req.body;
    try {
        const client = await clientPromise;
        const db = client.db("partsala");
        const update = {
            $set: {
                bio: bio,
            }
        };

        const result = await db.collection("users").updateOne({
            _id: ObjectId(updateUserId)
        }, update)
        res.send(result);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};
