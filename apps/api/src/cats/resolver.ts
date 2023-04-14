import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Service } from './service';

import { LibraryType } from './dto/create-cat.dto';
import { LibraryInput } from './inputs/cats.input';

@Resolver()
export class LibraryResolver {
  constructor(private readonly library: Service) {}

  @Mutation(() => LibraryType)
  async createRecord(@Args('input') input: LibraryInput) {
    const opensearchshit = {
      summary: input.text,
      tags: ['heh', 'hohoho'],
    };

    return this.library.create(opensearchshit);
  }

  @Query(() => [LibraryType])
  async fetchLibrary() {
    return this.library.findAll();
  }

  @Query(() => LibraryType)
  async fetchSummary(@Args('input') input: LibraryInput) {
    console.log('get opensearch to summarise this', input.text);
    return {
      summary: 'this summary will come from opensearch',
      tags: ['along', 'with', 'tags'],
    };
  }
}
