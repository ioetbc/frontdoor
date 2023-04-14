import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { LibraryModule } from './cats/cats.module';
import { ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LibraryModule,
    GraphQLModule.forRoot({
      playground: true,
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING),
  ],
})
export class AppModule {}
