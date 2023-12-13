
// /**
// Author - Babajan patan
// Git - https://github.com/babajanpatan

import {
  MongoClient,
  ObjectId
} from 'mongodb';
import { appEnv } from '@/helpers';


const mongoUri = `${appEnv.COSMO_DB_URI}`
// const mongoUri = `${process.env.COSMO_DB_URI}`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database successfully:Fetch Template');

      const data = await db.collection('templates').findOne({ _id: new ObjectId(req?.body?.id) });

      client.close();

      res.status(200).json({ data });
    } catch (err) {
      console.error('Failed to find template:', err);
      res.status(500).json({ error: 'Failed to find template' });
    }
  }
}


// import { appEnv } from '@/helpers';
// import model from './model';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       console.log('Initiating database connection...');
//       await mongoose.connect(mongoUri);
//       console.log('Database connection established successfully!');

//       console.log('Fetching template with ID:', req?.body?.id);
//       const template = await model.findById(new ObjectId(req?.body?.id));
//       console.log('Successfully retrieved template');

//       if (!template) {
//         res.status(404).json({ error: 'Template not found' });
//         return;
//       }

//       res.status(200).json({ data: template });
//     } catch (error) {
//       console.error('Error fetching template:', error);
//       res.status(500).json({ error: 'Failed to fetch template' });
//     } finally {
//       console.log('Closing database connection...');
//       await mongoose.disconnect();
//       console.log('Database connection closed successfully');
//     }
//   }
// }
