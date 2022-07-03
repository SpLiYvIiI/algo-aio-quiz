import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { QuizzesRepositoryInterface } from './interfaces/quizzes-repository.interface';
import { QuizzesRepository } from './quizzes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, QuizSchema } from './schemas/quiz.schema';

@Module({
  providers: [
    QuizzesService,
    {
      provide: 'QuizzesRepositoryInterface',
      useClass: QuizzesRepository,
    },
  ],
  controllers: [QuizzesController],
  exports: [QuizzesService],
  imports: [
    MongooseModule.forFeature([{ name: Quiz.name, schema: QuizSchema }]),
  ],
})
export class QuizzesModule {}
