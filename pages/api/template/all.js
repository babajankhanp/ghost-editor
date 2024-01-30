
// /**
// Author - Babajan patan
// Git - https://github.com/babajanpatan

import {
  MongoClient
} from 'mongodb';

import { appEnv } from '@/helpers';


const mongoUri = `${appEnv.MongoDB_URL}`
// const mongoUri = `${process.env.COSMO_DB_URI}`

export default async function handler(req, res) {
  console.log("uri:"+ mongoUri)
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

// import mongoose from 'mongoose';
// import { appEnv } from '@/helpers';
// import model from './model';

// export default async function handler(req, res) {
//   try {
//     console.log('Initiating database connection...');
//     await mongoose.connect(mongoUri);
//     console.log('Database connection established successfully!');

//     if (req.method === 'GET') {
//       console.log('Fetching all templates from the database');
//       const templates = await model.find().sort({ _id: -1 });
//       console.log('Successfully retrieved templates');

//       res.status(200).json({ data: templates });
//     }
//   } catch (error) {
//     console.error('Error fetching templates:', error);
//     res.status(500).json({ error: 'Failed to fetch templates' });
//   } finally {
//     console.log('Closing database connection...');
//     await mongoose.disconnect();
//     console.log('Database connection closed successfully');
//   }
// }
