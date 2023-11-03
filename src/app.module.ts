import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [UserModule, BookModule,
     GraphQLModule.forRoot<ApolloDriverConfig>({
       autoSchemaFile: true,
       driver: ApolloDriver,
     }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
