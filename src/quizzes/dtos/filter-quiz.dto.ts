import { IsEnum, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { CategoryEnum, DifficultyEnum } from '../types';
import { Type } from 'class-transformer';

export class FilterQuizDto {
  @IsEnum(CategoryEnum)
  @IsOptional()
  category?: CategoryEnum;

  @IsEnum(DifficultyEnum)
  @IsOptional()
  difficulty?: DifficultyEnum;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @IsOptional()
  skip?: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @IsOptional()
  take?: number;
}
