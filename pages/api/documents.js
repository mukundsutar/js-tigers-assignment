// pages/api/data.js
import clientPromise from "../../lib/mongoConnection";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("shipment_db");
		const collection = db.collection("documents");
		const data = await collection.find({}).toArray();

		res.status(200).json(data);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: "Unable to fetch data" });
	}
}
