import { Injectable } from '@nestjs/common';
import { seo } from '../entity/seo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class SeoService {
    constructor(
        @InjectRepository(seo)
        private readonly seoRepo: Repository<seo>,
    ) { }
    async findAll(): Promise<seo[]> {
        return await this.seoRepo.find();
    }
    async fineOne(id: number): Promise<seo> {
        return await this.seoRepo.findOne(id);
    }
    async create(seo: seo): Promise<seo> {
        return await this.seoRepo.save(seo);
    }
    async update(seo: seo): Promise<UpdateResult> {
        return await this.seoRepo.update(seo.id, seo)
    }
    async delete(id): Promise<DeleteResult> {
        return await this.seoRepo.delete(id);
    }

}
