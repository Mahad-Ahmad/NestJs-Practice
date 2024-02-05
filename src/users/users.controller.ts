import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  ParseArrayPipe,
  ParseIntPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UseGuards(AuthGuard)
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers(@Query('admin') admin: 'true' | 'false') {
    return this.usersService.getUsers(admin);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.getUser(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
