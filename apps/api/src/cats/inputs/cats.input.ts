import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LibraryInput {
  @Field(() => String)
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
}
