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
import { ContentService } from './content.service';
import { ContentDocument } from './schemas/content.schema';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async findAll(): Promise<ContentDocument[]> {
    return this.contentService.findAll();
  }

  @Get('published')
  async findPublished(): Promise<ContentDocument[]> {
    return this.contentService.findPublished();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ContentDocument> {
    const content = await this.contentService.findOne(id);
    if (!content) {
      throw new HttpException('Content not found', HttpStatus.NOT_FOUND);
    }
    return content;
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string): Promise<ContentDocument> {
    const content = await this.contentService.findBySlug(slug);
    if (!content) {
      throw new HttpException('Content not found', HttpStatus.NOT_FOUND);
    }
    return content;
  }

  @Get('author/:authorId')
  async findByAuthor(
    @Param('authorId') authorId: string,
  ): Promise<ContentDocument[]> {
    return this.contentService.findByAuthor(authorId);
  }

  @Post()
  async create(@Body() contentData: any): Promise<ContentDocument> {
    try {
      return await this.contentService.create(contentData);
    } catch (error) {
      throw new HttpException(
        'Error creating content',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<ContentDocument> {
    const content = await this.contentService.update(id, updateData);
    if (!content) {
      throw new HttpException('Content not found', HttpStatus.NOT_FOUND);
    }
    return content;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    const content = await this.contentService.delete(id);
    if (!content) {
      throw new HttpException('Content not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Content deleted successfully' };
  }
}
