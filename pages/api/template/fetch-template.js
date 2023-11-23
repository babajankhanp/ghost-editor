/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import {
  MongoClient,
  ObjectId
} from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await MongoClient.connect('mongodb+srv://mytemp12578:9866178972Pb@mymongo.lp6eyqm.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();

    const data = await db.collection('templates').findOne({_id: new ObjectId(req?.body?.id)});

    client.close();

    res.status(200).json({data});
  }
}
