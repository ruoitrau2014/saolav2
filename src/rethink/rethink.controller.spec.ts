import { Test, TestingModule } from '@nestjs/testing';
import { RethinkController } from './rethink.controller';

describe('RethinkController', () => {
  let controller: RethinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RethinkController],
    }).compile();

    controller = module.get<RethinkController>(RethinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
