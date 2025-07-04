import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema({ timestamps: true })
export class Content {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true, lowercase: true })
  slug: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  excerpt: string;

  @Prop({ required: true, enum: ['article', 'resource', 'case-study'] })
  type: string;

  @Prop({
    required: true,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  })
  status: string;

  @Prop({ default: false })
  isPremium: boolean;

  @Prop({ required: true, enum: ['programmer', 'company', 'both'] })
  targetAudience: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop()
  featuredImage?: string;

  @Prop({ required: true, min: 1 })
  readingTime: number;

  @Prop()
  publishedAt?: Date;
}

export const ContentSchema = SchemaFactory.createForClass(Content);

// Índices para optimización de consultas (sin duplicar unique)
ContentSchema.index({ status: 1 });
ContentSchema.index({ type: 1 });
ContentSchema.index({ targetAudience: 1 });
ContentSchema.index({ isPremium: 1 });
ContentSchema.index({ author: 1 });
ContentSchema.index({ tags: 1 });
ContentSchema.index({ publishedAt: -1 });
ContentSchema.index({ createdAt: -1 });
ContentSchema.index({ status: 1, publishedAt: -1 }); // Consultas complejas
ContentSchema.index({ targetAudience: 1, status: 1, isPremium: 1 }); // Filtros múltiples
