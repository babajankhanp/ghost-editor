
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */

import {
  MongoClient
} from 'mongodb';

import { appEnv } from '@/helpers';

  const mongoUri = `${appEnv.MONGO_DB_URI}`

  const { dbConnect } = require('../db');

export default async function handler(req, res) {
  const cosmo = "mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@ mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/test?ssl=true"
  try {
    if (req.method === 'GET') {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database Sucessfully: All API');
      const resData = await db.collection('templates')
        .find({})
        .sort({ _id: -1 })
        .toArray();

      client.close();

      res.status(200).json({ data: resData });
    }
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    res.status(500).json({ error: 'Database connection error' });
  }
}