import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { group } from '../entity/group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [GroupService],
    controllers: [GroupController],
    imports: [TypeOrmModule.forFeature([group])],
    exports: [TypeOrmModule, GroupService],
})
export class GroupModule {}
