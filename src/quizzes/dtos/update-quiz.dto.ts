import { CategoryEnum, DifficultyEnum } from '../types';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateQuizDto {
  @IsString()
  @IsOptional()
  question?: string;

  @IsArray()
  @IsOptional()
  answers?: string[];

  @IsNumber()
  @IsOptional()
  correct_answer_index?: number;

  @IsEnum(CategoryEnum)
  @IsOptional()
  category?: CategoryEnum;

  @IsEnum(DifficultyEnum)
  @IsOptional()
  difficulty?: DifficultyEnum;
}
