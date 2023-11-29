
/**
Author - Babajan patan
Git - https://github.com/babajanpatan
* */


import {
 MongoClient,
 ObjectId
} from 'mongodb';

const MONGODB_URI = 'mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db();

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
