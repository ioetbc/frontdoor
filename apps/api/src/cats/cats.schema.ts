import * as mongoose from 'mongoose';

export const LibrarySchema = new mongoose.Schema({
  summary: String,
  tags: [String],
});
