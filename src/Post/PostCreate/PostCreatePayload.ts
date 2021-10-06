import {
  IsNotEmpty,
  IsOptional,
  Min,
  IsArray,
  MinLength,
} from 'class-validator';

export class PostCreatePayload {
  @IsNotEmpty()
  title!: string;
  @IsNotEmpty()
  content!: string;

  @IsOptional()
  image?: string;
  @IsOptional()
  video?: string;

  @IsArray()
  tags!: string[];
}
