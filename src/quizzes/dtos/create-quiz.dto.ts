import { CategoryEnum, DifficultyEnum } from '../types';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @IsNotEmpty()
  @ArrayMinSize(4)
  answers: string[];

  @IsNumber()
  @IsNotEmpty()
  correct_answer_index: number;

  @IsEnum(CategoryEnum)
  @IsNotEmpty()
  category: CategoryEnum;

  @IsEnum(DifficultyEnum)
  @IsNotEmpty()
  difficulty: DifficultyEnum;
}
