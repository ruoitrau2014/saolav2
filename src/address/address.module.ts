import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { address } from '../entity/address.entity';

@Module({
    imports: [TypeOrmModule.forFeature([address])],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
