import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LibraryType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
}
