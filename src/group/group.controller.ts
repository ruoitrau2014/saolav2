import { Controller, Get, Param, Post, Put, Delete, Body, Res, Render } from '@nestjs/common';
import { GroupService } from './group.service';
import { group } from '../entity/group.entity';
import { ObjectID } from 'typeorm';

@Controller('group')
export class GroupController {
    constructor(private groupservice: GroupService) { }
    @Get('api')
    dsAll(): Promise<group[]> {
        return this.groupservice.findAll();
    }
    @Get('api/:id')
    get(@Param() params) {
        return this.groupservice.findOne(params.id);
    }
    @Post('api')
    create(@Body() group: group) {
        return this.groupservice.create(group);

    }
    @Put('api/:id')
    update1(@Body() group: group) {
        return this.groupservice.update(group);
    }
    @Delete('api/:id')
    delete1(@Param() params) {
        
        return this.groupservice.delete(params.id);
    }
    @Get()
    async findAll(@Res() res) {
        return res.render('admin/group/index', {
            group: await this.groupservice.findAll(),
        })
       
    }
    @Get('add')
    async add(@Res() res) {
        res.render('admin/group/add', {
        
        })
    }
    @Post('add')
    addMVC(@Body() group: group, @Res() res) {
        this.groupservice.create(group);
        return res.redirect('/group');
    }
    @Get(':id')
    async findOne(@Param() params, @Res() res) {
        return res.render('admin/group/edit', {
            group: await this.groupservice.findOne(params.id),
        }) 
    }
 
 
    @Post(':id')
    update(@Param() params, @Body() group: group,@Res() res) {
        console.log(params.id);
        group.id = params.id;
        this.groupservice.update(group);
        return res.redirect('/group');
    }

    @Delete(':id')
    delete(@Param() params) {
        console.log("delete");
        return this.groupservice.delete(params.id);
    }
}
