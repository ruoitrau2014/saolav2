import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, UpdateResult } from 'typeorm';
import { account } from '../entity/account.entity';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(account)
        private accountRepository: Repository<account>,
        private connection: Connection
    ) {}

    findAll(query={}): Promise<account[]> {
        return this.accountRepository.find(query);
    }

    findOne(id: any): Promise<account | undefined> {
        return this.accountRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.accountRepository.delete(id);
    }
    async create(account: account): Promise<account> {
        return await this.accountRepository.save(account);
    }
    async update(account: account): Promise<UpdateResult> {
        return await this.accountRepository.update(account.id, account);
    }
    async createMany(accounts: account[]) {
        await this.connection.transaction(async manager => {
            for(let i in accounts){
                await manager.save(accounts[i]);
            }
        });
    }
}