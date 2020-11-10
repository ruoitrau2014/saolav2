import { Module } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { PostCategoryController } from './post-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { post_category } from '../entity/post_category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([post_category])],
  providers: [PostCategoryService],
  controllers: [PostCategoryController]
})
export class PostCategoryModule {}
