
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

// import model from "./model";

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       console.log('Connected to the database successfully!');

//       const id = new ObjectId(req?.body?.id);
//       const update = {
//         name: req?.body?.name,
//         templateData: req?.body?.template_data,
//       };

//       const updatedTemplate = await model.findByIdAndUpdate(id, update, {
//         new: true,
//         upsert: true,
//       });

//       res.status(200).json({ data: updatedTemplate });
//     } catch (err) {
//       console.error('Failed to update template:', err);
//       res.status(500).json({ error: 'Failed to update template' });
//     }
//   }
// }
