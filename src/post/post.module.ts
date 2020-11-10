import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { post } from '../entity/post.entity';

@Module({
    imports: [TypeOrmModule.forFeature([post])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
