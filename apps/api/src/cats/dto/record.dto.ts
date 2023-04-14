import { ObjectType, Field } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class TRecord {
  @Field(() => String)
  readonly _id: ObjectId;
  @Field()
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
  @Field(() => Date)
  readonly createdAt: Date;
}
