import clientPromise from '../../lib/mongodb'

// /api/new-meetup
// POST /api/new-meetup

async function GetRecordHandler(req, res) {
  if (req.method === 'GET') {
    
    const client = await clientPromise
    const db = client.db('Education');
    const recordsCollections = db.collection('uni-record');

    const records = await recordsCollections.find().toArray();
    console.log('records', records)

    res.status(200).json({ message: 'Records Fetched', records: records });

  }
}

export default GetRecordHandler;