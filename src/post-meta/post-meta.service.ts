import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { post_meta } from '../entity/post_meta.entity';

@Injectable()
export class PostMetaService {
    constructor(
        @InjectRepository(post_meta)
        private readonly post_metaRepo: Repository<post_meta>,
    ) { }

    async findAll(): Promise<post_meta[]> {
        return await this.post_metaRepo.find();
    }
    async findOne(id: number): Promise<post_meta> {
        return await this.post_metaRepo.findOne(id);
    }
    async create(post_meta: post_meta): Promise<post_meta> {
        return await this.post_metaRepo.save(post_meta);
    }
    async update(post_meta: post_meta): Promise<UpdateResult> {
        return await this.post_metaRepo.update(post_meta.id, post_meta);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.post_metaRepo.delete(id);
    }

}
