import { Module } from '@nestjs/common';
import { QuizzesModule } from './quizzes/quizzes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuizzesModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.knh0zeu.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class MainModule {}
