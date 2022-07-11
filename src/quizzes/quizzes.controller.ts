import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateQuizDto } from './dtos/create-quiz.dto';
import { UpdateQuizDto } from './dtos/update-quiz.dto';
import { QuizzesService } from './quizzes.service';
import { CudDummyGuard } from './guards/cud-dummy.guard';
import { QuizInterface } from './types';
import { FilterQuizDto } from './dtos/filter-quiz.dto';

@Controller({
  path: 'quizzes',
  version: '1',
})
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Get('/:id')
  findQuiz(@Param('id') id: string): Promise<QuizInterface> {
    return this.quizzesService.findQuiz(id);
  }

  @Get('/')
  findQuizzes(@Query() filterQuizDto: FilterQuizDto): Promise<QuizInterface[]> {
    return this.quizzesService.findQuizzes(filterQuizDto);
  }

  @Post('/')
  @UseGuards(CudDummyGuard)
  async createQuiz(
    @Body() createQuizDto: CreateQuizDto,
  ): Promise<QuizInterface> {
    return await this.quizzesService.createQuiz(createQuizDto);
  }

  @Put('/:id')
  @UseGuards(CudDummyGuard)
  updateQuiz(
    @Param('id') id: string,
    @Body() updateQuizDto: UpdateQuizDto,
  ): Promise<QuizInterface> {
    return this.quizzesService.updateQuiz(id, updateQuizDto);
  }

  @Delete('/:id')
  @UseGuards(CudDummyGuard)
  deleteQuiz(@Param('id') id: string): Promise<QuizInterface> {
    return this.quizzesService.deleteQuiz(id);
  }
}
