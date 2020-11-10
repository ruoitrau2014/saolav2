import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { post_category } from '../entity/post_category.entity';

@Injectable()
export class PostCategoryService {
    constructor(
        @InjectRepository(post_category)
        private readonly post_categoryRepo: Repository<post_category>
    ) { }
    async findAll(): Promise<post_category[]> {
        return await this.post_categoryRepo.find();
    }
    async findOne(id: number): Promise<post_category> {
        return await this.post_categoryRepo.findOne(id);
    }
    async create(post_category: post_category): Promise<post_category> {
        return await this.post_categoryRepo.create(post_category);
    }
    async update(post_category: post_category): Promise<UpdateResult> {
        return await this.post_categoryRepo.update(post_category.id, post_category);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.post_categoryRepo.delete(id);
    }
}
