import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { address } from '../entity/address.entity';
import { Repository, UpdateQuery, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(address)
        private readonly addressRepo: Repository<address>,
    ) { }
    async findAll(): Promise<address[]> {
        return await this.addressRepo.find();
    }
    async findOne(id: number): Promise<address> {
        return await this.addressRepo.findOne(id);
    }
    async create(address: address): Promise<address> {
        return await this.addressRepo.save(address);
    }
    async update(address: address): Promise<UpdateResult> {
        return await this.addressRepo.update(address.id, address);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.addressRepo.delete(id);
    }
  
}
