import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { PostCategoryService } from './post-category.service'
import { post_category } from '../entity/post_category.entity';

@Controller('post-category')
export class PostCategoryController {
    constructor(private readonly post_categoryService: PostCategoryService) { }
    @Get()
    findAll(): Promise<post_category[]> {
        return this.post_categoryService.findAll();
    }
    @Get(':id')
    findOne(@Param() params) {
        return this.post_categoryService.findOne(params.id);
    }
    @Post()
    create(@Body() post_category: post_category) {
        return this.post_categoryService.create(post_category);
    }
    @Put()
    update(@Body() post_category: post_category) {
        return this.post_categoryService.update(post_category);
    }
    @Delete(':id')
    Delete(@Param() params) {
        return this.post_categoryService.delete(params.id);
    }
}
