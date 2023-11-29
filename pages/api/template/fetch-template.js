
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */

import {
  MongoClient,
  ObjectId
} from 'mongodb';

import { appEnv } from '@/helpers';

const mongoUri = `${appEnv.MONGO_DB_URI}`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database successfully:Fetch Template API');

      const data = await db.collection('templates').findOne({ _id: new ObjectId(req?.body?.id) });

      client.close();

      res.status(200).json({ data });
    } catch (err) {
      console.error('Failed to find template:', err);
      res.status(500).json({ error: 'Failed to find template' });
    }
  }
}
