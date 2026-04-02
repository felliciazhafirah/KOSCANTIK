import { Test, TestingModule } from '@nestjs/testing';
import { KosImageService } from './kos-image.service';

describe('KosImageService', () => {
  let service: KosImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KosImageService],
    }).compile();

    service = module.get<KosImageService>(KosImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
