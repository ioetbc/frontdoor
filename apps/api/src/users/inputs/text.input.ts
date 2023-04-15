import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TextInput {
  @Field(() => String)
  readonly text: string;
}
