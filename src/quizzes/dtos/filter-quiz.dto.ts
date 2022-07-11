import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { CategoryEnum, DifficultyEnum } from '../types';

export class FilterQuizDto {
  @IsEnum(CategoryEnum)
  @IsOptional()
  category?: CategoryEnum;

  @IsEnum(DifficultyEnum)
  @IsOptional()
  difficulty?: DifficultyEnum;

  @IsNumber()
  @Min(0)
  @IsOptional()
  skip?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  take?: number;
}
