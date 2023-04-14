import { Document, Types } from 'mongoose';

export interface IRecord extends Document {
  readonly _id: Types.ObjectId;
  readonly summary: string;
  readonly tags: [string];
  readonly createdAt: Date;
}

export interface ITag extends Document {
  readonly tags: [string];
}
