
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */

import {
  MongoClient
} from 'mongodb';
import { appEnv } from '@/helpers';


const mongoUri = `${appEnv.MongoDB_URL}`
// const mongoUri = `${process.env.COSMO_DB_URI}`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database Sucessfully: Create API');

      const data = await db.collection('templates')
        .insertOne({ name: 'Untitled', author_email: req?.body?.author_email });

      client.close();

      res.status(200).json({ data });
    } catch (err) {
      console.error('Failed to create template:', err);
      res.status(500).json({ error: 'Failed to create template' });
    }
  }
}

// import mongoose from 'mongoose';
// import { appEnv } from '@/helpers';
// import model from './model';



// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       console.log('Connected to the database successfully!');

//       const newTemplate = new model({
//         name: 'Untitled',
//         authorEmail: req?.body?.author_email,
//       });

//       await newTemplate.save();

//       res.status(200).json({ data: newTemplate });
//     } catch (err) {
//       console.error('Failed to create template:', err);
//       res.status(500).json({ error: 'Failed to create template' });
//     }
//   }
// }
