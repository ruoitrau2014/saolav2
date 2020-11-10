import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { account } from '../entity/account.entity';

@Module({
  controllers: [AccountController],
  providers: [AccountService],  
  imports: [TypeOrmModule.forFeature([account])],
  exports: [TypeOrmModule,AccountService]
})
export class AccountModule {}