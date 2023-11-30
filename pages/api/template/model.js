// TemplateModel.js
import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  template_data: {
    type: String,
    required: true,
  },
  _id: mongoose.Schema.Types.ObjectId,
});

const TemplateModel = mongoose.model('Template', templateSchema);

export default TemplateModel;
