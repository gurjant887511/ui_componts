import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Component = mongoose.model('Component', componentSchema);
