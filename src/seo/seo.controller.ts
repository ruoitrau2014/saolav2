import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SeoService } from './seo.service';
import { seo } from '../entity/seo.entity';

@Controller('seo')
export class SeoController {
    constructor(private readonly seoService: SeoService) { }
    @Get()
    findAll(): Promise<seo[]> {
        return this.seoService.findAll();
    }
    @Get(':id')
    findOne(@Param() params) {
        return this.seoService.fineOne(params.id);
    }
    @Post()
    create(@Body() seo: seo) {
        return this.seoService.create(seo);
    }
    @Put()
    update(@Body() seo: seo) {
        return this.seoService.update(seo);
    }
    @Delete(':id')
    delete(@Param() params) {
        return this.seoService.delete(params.id);
    }

}
