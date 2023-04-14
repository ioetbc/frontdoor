import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LibraryService } from './cats.service';
import { LibraryType } from './dto/create-cat.dto';
import { LibraryInput } from './inputs/cats.input';

@Resolver()
export class LibraryResolver {
  constructor(private readonly libraryService: LibraryService) {}

  @Mutation(() => LibraryType)
  async createRecord(@Args('input') input: LibraryInput) {
    return this.libraryService.create(input);
  }

  @Query(() => [LibraryType])
  async fetchLibrary() {
    return this.libraryService.findAll();
  }
}
