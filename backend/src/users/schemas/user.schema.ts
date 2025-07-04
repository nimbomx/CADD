import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class OAuthProvider {
  @Prop({ required: true, enum: ['google', 'github', 'linkedin', 'facebook'] })
  provider: string;

  @Prop({ required: true })
  providerId: string;

  @Prop({ required: true })
  email: string;
}

@Schema()
export class CompanyInfo {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  industry: string;

  @Prop({ required: true })
  size: string;

  @Prop()
  website?: string;
}

@Schema()
export class ProgrammerInfo {
  @Prop({ type: [String], default: [] })
  skills: string[];

  @Prop({ required: true })
  experience: string;

  @Prop()
  github?: string;

  @Prop()
  portfolio?: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop()
  password?: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, enum: ['programmer', 'company'] })
  userType: string;

  @Prop()
  avatar?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop({ type: [OAuthProvider], default: [] })
  oauthProviders: OAuthProvider[];

  @Prop({ type: CompanyInfo })
  companyInfo?: CompanyInfo;

  @Prop({ type: ProgrammerInfo })
  programmerInfo?: ProgrammerInfo;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Índices para optimización de consultas (sin duplicar unique)
UserSchema.index({ userType: 1 });
UserSchema.index({
  'oauthProviders.provider': 1,
  'oauthProviders.providerId': 1,
});
UserSchema.index({ isActive: 1 });
UserSchema.index({ createdAt: -1 });
