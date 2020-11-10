import { Test, TestingModule } from '@nestjs/testing';
import { PostMetaController } from './post-meta.controller';

describe('PostMetaController', () => {
  let controller: PostMetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostMetaController],
    }).compile();

    controller = module.get<PostMetaController>(PostMetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
