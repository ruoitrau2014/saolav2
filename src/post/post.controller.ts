import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { post } from '../entity/post.entity';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {

    }
    @Get()
    findAll(): Promise<post[]> {
        return this.postService.findAll();
    }
    @Get(":id")
    get(@Param() params) {
        return this.postService.finOne(params.id)
    }
    @Post()
    Create(@Body() post: post) {
        return this.postService.create(post);
    }
    @Put()
    update(@Body() post: post) {
        return this.postService.update(post)
    }
    @Delete(':id')
    delete(@Param() params) {
        return this.postService.delete(params.id);
    }
}
