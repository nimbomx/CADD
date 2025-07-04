import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './schemas/content.schema';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async findAll(): Promise<ContentDocument[]> {
    return this.contentModel.find().populate('author').exec();
  }

  async findOne(id: string): Promise<ContentDocument | null> {
    return this.contentModel.findById(id).populate('author').exec();
  }

  async findBySlug(slug: string): Promise<ContentDocument | null> {
    return this.contentModel.findOne({ slug }).populate('author').exec();
  }

  async findByAuthor(authorId: string): Promise<ContentDocument[]> {
    return this.contentModel
      .find({ author: authorId })
      .populate('author')
      .exec();
  }

  async findPublished(): Promise<ContentDocument[]> {
    return this.contentModel
      .find({ status: 'published' })
      .populate('author')
      .sort({ publishedAt: -1 })
      .exec();
  }

  async create(contentData: any): Promise<ContentDocument> {
    const content = new this.contentModel(contentData);
    return content.save();
  }

  async update(id: string, updateData: any): Promise<ContentDocument | null> {
    return this.contentModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate('author')
      .exec();
  }

  async delete(id: string): Promise<ContentDocument | null> {
    return this.contentModel.findByIdAndDelete(id).exec();
  }
}
