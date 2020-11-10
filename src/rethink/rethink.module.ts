import { Module } from '@nestjs/common';
import { RethinkService } from './rethink.service';
import { RethinkController } from './rethink.controller';
import { RethinkProvider } from './database.provider'

@Module({
  providers: [RethinkService, RethinkProvider],
  controllers: [RethinkController],
  exports: [RethinkProvider, RethinkService]
})
export class RethinkModule {}
