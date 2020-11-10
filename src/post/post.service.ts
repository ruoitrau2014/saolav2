import { Injectable } from '@nestjs/common';
import { post } from '../entity/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(post)
        private readonly postRepo: Repository<post>

    ) { }

    async findAll(): Promise<post[]> {
        return await this.postRepo.find();
    }
    async finOne(id: number): Promise<post> {
        return await this.postRepo.findOne(id);
    }
    async create(post: post): Promise<post> {
        return await this.postRepo.save(post);
    }
    async update(post: post): Promise<UpdateResult> {
        return await this.postRepo.update(post.id, post);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.postRepo.delete(id);
    }
}
