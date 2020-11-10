import { Module } from '@nestjs/common';
import { PostMetaService } from './post-meta.service';
import { PostMetaController } from './post-meta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { post_meta } from '../entity/post_meta.entity';

@Module({
    imports: [TypeOrmModule.forFeature([post_meta])],
  providers: [PostMetaService],
  controllers: [PostMetaController]
})
export class PostMetaModule {}
