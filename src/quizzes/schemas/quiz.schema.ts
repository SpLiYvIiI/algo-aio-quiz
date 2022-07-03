import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CategoryEnum, DifficultyEnum } from '../types';

export type QuizDocument = Quiz & Document;

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  },
})
export class Quiz {
  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: [String], required: true })
  answers: string[];

  @Prop({ type: Number, required: true })
  correct_answer_index: number;

  @Prop({ type: String, required: true })
  category: CategoryEnum;

  @Prop({ type: String, required: true })
  difficulty: DifficultyEnum;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
