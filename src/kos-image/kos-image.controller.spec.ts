import { Test, TestingModule } from '@nestjs/testing';
import { KosImageController } from './kos-image.controller';
import { KosImageService } from './kos-image.service';

describe('KosImageController', () => {
  let controller: KosImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KosImageController],
      providers: [KosImageService],
    }).compile();

    controller = module.get<KosImageController>(KosImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
