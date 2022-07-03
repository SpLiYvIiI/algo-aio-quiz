import { QuizzesRepositoryInterface } from './interfaces/quizzes-repository.interface';
import { CreateQuizDto } from './dtos/create-quiz.dto';
import { UpdateQuizDto } from './dtos/update-quiz.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz, QuizDocument } from './schemas/quiz.schema';
import { Model } from 'mongoose';
import { QuizInterface } from './types';
import { FilterQuizDto } from './dtos/filter-quiz.dto';

@Injectable()
export class QuizzesRepository implements QuizzesRepositoryInterface {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}

  async findOne(id: string): Promise<QuizInterface> {
    return this.quizModel.findById(id);
  }

  async findAll(filterQuizDto: FilterQuizDto): Promise<QuizInterface[]> {
    const options = {
      filter: {
        ...(filterQuizDto.category ? { category: filterQuizDto.category } : {}),
        ...(filterQuizDto.difficulty
          ? { difficulty: filterQuizDto.difficulty }
          : {}),
      },
      ...(filterQuizDto.skip ? { skip: filterQuizDto.skip } : { skip: 0 }),
      ...(filterQuizDto.take ? { take: filterQuizDto.take } : { take: 25 }),
    };
    return this.quizModel.find({ ...options.filter }, null, {
      skip: options.skip,
      limit: options.take,
    });
  }

  async create(createQuizDto: CreateQuizDto): Promise<QuizInterface> {
    return await new this.quizModel(createQuizDto).save();
  }

  async update(
    id: string,
    updateQuizDto: UpdateQuizDto,
  ): Promise<QuizInterface> {
    return this.quizModel.findByIdAndUpdate(id, updateQuizDto, { new: true });
  }

  async delete(id: string): Promise<QuizInterface> {
    return this.quizModel.findByIdAndDelete(id, { new: true });
  }
}
