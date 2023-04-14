import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LibraryType {
  @Field()
  readonly summary: string;
  @Field(() => [String])
  readonly tags: string[];
}
