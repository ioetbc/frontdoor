import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TCreateRecord {
  @Field()
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
  @Field(() => Date)
  readonly createdAt: Date;
}
