import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { BooksService } from './book.service'
import { CreateBookDto } from './dto/create-book.dto'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto)
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: 'accepted' | 'rejected',
  ) {
    return this.booksService.updateStatus(Number(id), status)
  }

  @Get('history/:ownerId')
  history(@Param('ownerId') ownerId: string) {
    return this.booksService.history(Number(ownerId))
  }
}