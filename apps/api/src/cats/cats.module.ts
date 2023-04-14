import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LibraryResolver } from './resolver';
import { Service } from './service';

import { MongooseSchema } from './mongoose.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Library', schema: MongooseSchema }]),
  ],
  providers: [LibraryResolver, Service],
})
export class LibraryModule {}
