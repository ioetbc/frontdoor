import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LibraryResolver } from './cats.resolver';
import { LibraryService } from './cats.service';
import { LibrarySchema } from './cats.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Library', schema: LibrarySchema }]),
  ],
  providers: [LibraryService, LibraryResolver],
})
export class LibraryModule {}
