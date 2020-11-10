import { Test, TestingModule } from '@nestjs/testing';
import { RethinkService } from './rethink.service';

describe('RethinkService', () => {
  let service: RethinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RethinkService],
    }).compile();

    service = module.get<RethinkService>(RethinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
