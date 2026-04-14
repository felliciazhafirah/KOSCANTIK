import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) { }

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto)
  }

  @Get('kos/:kosId')
  findByKos(@Param('kosId') kosId: string) {
    return this.reviewService.findByKosId(Number(kosId))
  }

  @Get()
  findAll() {
    return this.reviewService.findAll()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateReviewDto) {
    return this.reviewService.update(Number(id), dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(Number(id))
  }
}