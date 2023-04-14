import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RecordInput {
  @Field(() => String)
  readonly summary: string;
  @Field(() => [String])
  readonly tags: [string];
}
