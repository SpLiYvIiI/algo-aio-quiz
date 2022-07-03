import { CreateQuizDto } from '../dtos/create-quiz.dto';
import { UpdateQuizDto } from '../dtos/update-quiz.dto';
import { QuizInterface } from '../types';
import { FilterQuizDto } from '../dtos/filter-quiz.dto';

export interface QuizzesRepositoryInterface {
  findOne(id: string): Promise<QuizInterface>;
  findAll(filterQuizDto: FilterQuizDto): Promise<QuizInterface[]>;
  create(createQuizDto: CreateQuizDto): Promise<QuizInterface>;
  update(id: string, updateQuizDto: UpdateQuizDto): Promise<QuizInterface>;
  delete(id: string): Promise<QuizInterface>;
}
