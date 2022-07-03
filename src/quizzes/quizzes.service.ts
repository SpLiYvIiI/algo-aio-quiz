import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dtos/create-quiz.dto';
import { QuizzesRepositoryInterface } from './interfaces/quizzes-repository.interface';
import { UpdateQuizDto } from './dtos/update-quiz.dto';
import { QuizInterface } from './types';
import { FilterQuizDto } from './dtos/filter-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(
    @Inject('QuizzesRepositoryInterface')
    private readonly quizzesRepository: QuizzesRepositoryInterface,
  ) {}

  findQuiz(id: string): Promise<QuizInterface> {
    return this.quizzesRepository.findOne(id);
  }

  findQuizzes(filterQuizDto: FilterQuizDto): Promise<QuizInterface[]> {
    return this.quizzesRepository.findAll(filterQuizDto);
  }

  async createQuiz(createQuizDto: CreateQuizDto): Promise<QuizInterface> {
    return await this.quizzesRepository.create(createQuizDto);
  }

  updateQuiz(id: string, updateQuizDto: UpdateQuizDto): Promise<QuizInterface> {
    return this.quizzesRepository.update(id, updateQuizDto);
  }

  deleteQuiz(id: string) {
    return this.quizzesRepository.delete(id);
  }
}
