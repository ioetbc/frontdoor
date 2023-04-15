import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SortInput {
  @Field(() => Boolean, { defaultValue: true })
  asc?: boolean;
}
