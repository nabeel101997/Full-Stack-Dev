import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb';

// /api/edit-record
// PUT /api/edit-record

async function handler(req, res) {
  if (req.method === 'PUT') {

    const data = req.body;
    console.log("Data to be edit", data)

    const client = await clientPromise
    const db = client.db('Education');

    const recordsCollections = db.collection('uni-record');

    const result = await recordsCollections.findOneAndUpdate(
      { _id: ObjectId(data.id) },
      { $set: { name: data.name, from: data.from, to: data.to } },
      { returnOriginal: false, upsert: true });

    console.log(result);

    res.status(201).json({ message: 'Record Updated!' });
  }
}

export default handler;