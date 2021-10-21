import clientPromise from '../../lib/mongodb'

import { ObjectId } from 'mongodb';

// /api/edit-record
// PUT /api/edit-record

async function handler(req, res) {
  if (req.method === 'DELETE') {

    const data = req.body;
    console.log("its data", data);

    const client = await clientPromise
    const db = client.db('Education');

    const recordsCollections = db.collection('uni-record');

    const result = await recordsCollections.deleteOne(
      { _id: ObjectId(data._id) });

    console.log(result);

    res.status(201).json({ message: 'Record Deleted!' });
  }
}

export default handler;