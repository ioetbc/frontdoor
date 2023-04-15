import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SummaryType {
  @Field()
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
}
