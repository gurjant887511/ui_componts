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
  },
  category: {
    type: String,
    enum: ['Cards', 'Buttons', 'Headers'],
    default: 'Cards'
  }
}, {
  timestamps: true
});

export const Component = mongoose.model('Component', componentSchema, 'all_components');
