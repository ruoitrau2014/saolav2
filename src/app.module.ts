import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
//import { Connection } from 'typeorm'
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { Session } from './session/session.module';
import { RethinkModule } from './rethink/rethink.module';
import { EventsModule } from './events/events.module';
import { Redis } from './redis/redis.module'
import { GroupModule } from './group/group.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { PostModule } from './post/post.module';
import { SeoModule } from './seo/seo.module';
import { PostMetaModule } from './post-meta/post-meta.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot(),
    AccountModule,
    AuthModule,
    Session,
    RethinkModule,
    Redis,
    EventsModule,
    GroupModule,
    PostCategoryModule,
    PostModule,
    SeoModule,
    PostMetaModule,
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //constructor(private connection: Connection) {}
}
