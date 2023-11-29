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
    const client = await MongoClient.connect('mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority');
    const db = client.db();

    const data = await db.collection('templates').findOne({_id: new ObjectId(req?.body?.id)});

    client.close();

    res.status(200).json({data});
  }
}