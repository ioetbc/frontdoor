import { Document, Types } from 'mongoose';

export interface Record extends Document {
  readonly _id: Types.ObjectId;
  readonly summary: string;
  readonly tags: [string];
  readonly createdAt: Date;
}
