import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TTag {
  @Field(() => String)
  readonly tag: string;
}
