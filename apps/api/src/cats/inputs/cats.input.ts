import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LibraryInput {
  @Field(() => String)
  readonly text: string;
}
