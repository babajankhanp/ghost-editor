
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */


import {
 MongoClient,
 ObjectId
} from 'mongodb';


const mongoUri = `${process.env.COSMO_DB_URI}`

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const client = await MongoClient.connect(mongoUri);
      const db = client.db();
      console.log('Connected to the database');

      const templateId = req.body.id;
      const template = await db.collection('templates').findOne({ _id: new ObjectId(templateId) });

      if (!template) {
        return res.status(404).json({ success: false, message: 'Template not found' });
      }
      const result = await db.collection('templates').deleteOne({ _id: new ObjectId(templateId) });

      client.close();

      if (result.deletedCount === 1) {
        res.status(200).json({ success: true, message: 'Template deleted successfully' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to delete template' });
      }
    } catch (error) {
      console.error('Error deleting template:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

// import mongoose from 'mongoose';
// import { appEnv } from '@/helpers';
// import model from './model';
// import { ObjectId } from 'mongodb';

// const mongoUri = `${appEnv.MONGO_DB_URI}`;


// export default async function handler(req, res) {
//   if (req.method === 'DELETE') {
//     try {
//       console.log('Initiating database connection...');
//       await mongoose.connect(mongoUri);
//       console.log('Database connection established successfully!');

//       const templateId = req.body.id;
//       console.log('Attempting to delete template with ID:', templateId);

//       const template = await model.findByIdAndDelete(new ObjectId(templateId));

//       if (!template) {
//         console.error('Template with ID', templateId, 'not found');
//         return res.status(404).json({ success: false, message: 'Template not found' });
//       }

//       console.log('Template with ID', templateId, 'deleted successfully');
//       res.status(200).json({ success: true, message: 'Template deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting template:', error);
//       res.status(500).json({ success: false, message: 'Internal server error' });
//     } finally {
//       console.log('Closing database connection...');
//       await mongoose.disconnect();
//       console.log('Database connection closed successfully');
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
// }
