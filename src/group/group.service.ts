import { Injectable } from '@nestjs/common';
import { group } from '../entity/group.entity';
import { Repository, Connection, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(group)
        private groupRepo: Repository<group>,
        private connection: Connection
    ) { }
    findAll(query = {}): Promise<group[]> {
        return this.groupRepo.find(query);
    }
    async findOne(id: string): Promise<group> {
        return await this.groupRepo.findOne(id);
    }
    async create(group: group): Promise<group> {
        return await this.groupRepo.save(group);
    }
    async update(group: group): Promise<UpdateResult> {
        return await this.groupRepo.update(group.id, group)
    }
    async delete(id): Promise<DeleteResult> {
        return await this.groupRepo.delete(id)
    }

}
