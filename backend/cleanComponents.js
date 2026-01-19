import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Component } from './models/ComponentModel.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ui_componts';

async function cleanComponents() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('✅ Connected to MongoDB');

    // Delete all components
    const result = await Component.deleteMany({});
    console.log(`✅ Deleted ${result.deletedCount} components`);

    // Verify
    const count = await Component.countDocuments();
    console.log(`📊 Remaining components: ${count}`);

    await mongoose.connection.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

cleanComponents();
