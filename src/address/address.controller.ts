import { Controller, Get, Post, Body, Put, Delete, Param, Res } from '@nestjs/common';
import { AddressService } from './address.service'
import { address } from '../entity/address.entity';
@Controller('address')
export class AddressController {
    constructor(private readonly addessService: AddressService) { }
    @Get('api')
    findAll(): Promise<address[]> {
        return this.addessService.findAll();
    }
    @Get('api/:id')
    findone(@Param() params) {
        return this.addessService.findOne(params.id);
    }
    @Post('api')
    create(@Body() address: address) {
        return this.addessService.create(address);
    }
    @Put('api')
    update(@Body() address: address) {
        return this.addessService.update(address);
    }
    @Delete('api/:id')
    delete(@Param() params) {
        return this.addessService.delete(params.id);
    }
    @Get()
    async DSAll(@Res() res) {
        return res.render('admin/address/index', {
            address: await this.addessService.findAll(),
        })
    }
    @Get('add')
    async add(@Res() res) {
        res.render('admin/address/add', {

        })
    }
    @Post('add')
    addMVC(@Body() address: address, @Res() res) {
        this.addessService.create(address);
        return res.redirect('/address');
    }
    @Get(':id')
    async get(@Param() params, @Res() res) {
        return res.render('admin/address/edit', {
            address: await this.addessService.findOne(params.id),
        })
    }


    @Post(':id')
    update12(@Param() params, @Body() address: address, @Res() res) {
        console.log(params.id);
        address.id = params.id;
        this.addessService.update(address);
        return res.redirect('/address');
    }


}
