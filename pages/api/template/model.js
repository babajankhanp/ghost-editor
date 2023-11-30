import mongoose from 'mongoose';
import { appEnv } from '@/helpers';
import { ObjectId } from 'mongodb';

const mongoUri = `${appEnv.MONGO_DB_URI}`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  authorEmail: { type: String, required: true },
  templateData: { type: Object, required: true },
});

const model = mongoose.model('templates', templateSchema);

export default model
