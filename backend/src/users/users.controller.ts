import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDocument } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserDocument[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDocument> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Post()
  async create(@Body() userData: any): Promise<UserDocument> {
    try {
      return await this.usersService.create(userData);
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<UserDocument> {
    const user = await this.usersService.update(id, updateData);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    const user = await this.usersService.delete(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'User deleted successfully' };
  }
}
