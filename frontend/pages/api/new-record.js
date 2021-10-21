import clientPromise from '../../lib/mongodb'

// /api/new-meetup
// POST /api/new-meetup

async function AddNewRecordHandler(req, res) {
  if (req.method === 'POST') {

    const data = req.body;

    console.log("data Reached", data)

    const client = await clientPromise
    const db = client.db('upSpring');

    const recordsCollections = db.collection('users');

    const result = await recordsCollections.insertOne(data);

    console.log('Result', result);

    res.status(201).json({ message: 'Record inserted!' });


  }
}

export default AddNewRecordHandler;