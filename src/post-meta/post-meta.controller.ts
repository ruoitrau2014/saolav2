import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PostMetaService } from './post-meta.service'
import { post_meta } from '../entity/post_meta.entity';
@Controller('post-meta')
export class PostMetaController {
    constructor(private readonly post_metaService: PostMetaService) { }
    @Get()
    findAll(): Promise<post_meta[]> {
        return this.post_metaService.findAll();
    }
    @Get(':id')
    findOne(@Param() params) {
        return this.post_metaService.findOne(params.id);
    }
    @Put()
    update(@Body() post_meta: post_meta) {
        return this.post_metaService.update(post_meta);
    }
    @Delete(':id')
    Delete(@Param() params) {
        return this.post_metaService.delete(params.id);
    }

}
