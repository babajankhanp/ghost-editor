
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */

import {
  MongoClient,
  ObjectId
} from 'mongodb';

import { appEnv } from '@/helpers';

const mongoUri = `${appEnv.MONGO_DB_URI}`

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database Successfully: Update API');

      const update = {
        $set: {
          template_data: req?.body?.template_data,
          name: req?.body?.name
        }
      };

      const data = await db.collection('templates').updateOne(
        { _id: new ObjectId(req?.body?.id) },
        update
      );

      client.close();

      res.status(200).json({ data });
    } catch (err) {
      console.error('Failed to update template:', err);
      res.status(500).json({ error: 'Failed to update template' });
    }
  }
}