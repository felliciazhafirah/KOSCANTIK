import { Injectable } from '@nestjs/common';
import { CreateFasilitaDto } from './dto/create-fasilita.dto';
import { UpdateFasilitaDto } from './dto/update-fasilita.dto';

@Injectable()
export class FasilitasService {
  create(createFasilitaDto: CreateFasilitaDto) {
    return 'This action adds a new fasilita';
  }

  findAll() {
    return `This action returns all fasilitas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fasilita`;
  }

  update(id: number, updateFasilitaDto: UpdateFasilitaDto) {
    return `This action updates a #${id} fasilita`;
  }

  remove(id: number) {
    return `This action removes a #${id} fasilita`;
  }
}
