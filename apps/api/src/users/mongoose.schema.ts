import * as mongoose from 'mongoose';

export const MongooseSchema = new mongoose.Schema({
  summary: String,
  tags: [String],
  createdAt: Date,
});
