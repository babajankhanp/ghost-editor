/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import {
  MongoClient
} from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect('mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority');
    const db = client.db();

    const resData = await db.collection('templates').find({}).sort({_id: -1}).toArray();

    client.close();

    res.status(200).json({data: resData});
  }
}