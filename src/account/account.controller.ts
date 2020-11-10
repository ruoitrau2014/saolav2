import { Controller, Get, Post, Req, Res, Body, Param, Delete, Render, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { account } from '../entity/account.entity';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Get('')    
    findAll() {
        return this.accountService.findAll();
    }
    @Post('')
    create(@Body() account: account) {
        return this.accountService.create(account);
    }
    @Put('')
    update(@Body() account: account) {
        return this.accountService.update(account);
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.accountService.findOne(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.accountService.remove(id);
    }
    
}
