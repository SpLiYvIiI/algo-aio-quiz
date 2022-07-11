enum DifficultyEnum {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

enum CategoryEnum {
  SORTING = 'SORTING',
  GRAPH_TRAVERSAL = 'GRAPH-TRAVERSAL',
}
interface QuizInterface {
  id?: number;
  question?: string;
  answers?: string[];
  correct_answer_index?: number;
  category?: CategoryEnum;
  difficulty?: DifficultyEnum;
}

export { DifficultyEnum, CategoryEnum, QuizInterface };
