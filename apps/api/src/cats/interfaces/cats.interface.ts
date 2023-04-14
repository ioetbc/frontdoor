import { Document } from 'mongoose';

export interface Library extends Document {
  readonly summary: string;
  readonly tags: [Library];
}
