import { Injectable } from '@nestjs/common';
import { CreateKosImageDto } from './dto/create-kos-image.dto';
import { UpdateKosImageDto } from './dto/update-kos-image.dto';

@Injectable()
export class KosImageService {
  create(createKosImageDto: CreateKosImageDto) {
    return 'This action adds a new kosImage';
  }

  findAll() {
    return `This action returns all kosImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kosImage`;
  }

  update(id: number, updateKosImageDto: UpdateKosImageDto) {
    return `This action updates a #${id} kosImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} kosImage`;
  }
}
