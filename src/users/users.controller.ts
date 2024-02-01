import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create() {
    return;
  }

  @Get()
  findAll() {
    return;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return;
  }
}
