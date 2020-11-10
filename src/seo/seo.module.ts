import { Module } from '@nestjs/common';
import { SeoService } from './seo.service';
import { SeoController } from './seo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seo } from '../entity/seo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([seo])],
  providers: [SeoService],
  controllers: [SeoController]
})
export class SeoModule {}
