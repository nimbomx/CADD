import {
  IsEmail,
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CompanyInfoDto {
  @IsString()
  companyName: string;

  @IsString()
  industry: string;

  @IsString()
  size: string;

  @IsOptional()
  @IsString()
  website?: string;
}

export class ProgrammerInfoDto {
  @IsOptional()
  @IsString({ each: true })
  skills?: string[];

  @IsString()
  experience: string;

  @IsOptional()
  @IsString()
  github?: string;

  @IsOptional()
  @IsString()
  portfolio?: string;
}

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(['programmer', 'company'])
  userType: 'programmer' | 'company';

  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyInfoDto)
  companyInfo?: CompanyInfoDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProgrammerInfoDto)
  programmerInfo?: ProgrammerInfoDto;
}
