export type QuizItem = {
  id: number;
  question: string;
  isCorrect: boolean;
};

export type QuizListProps = {
  items: QuizItem[];
};
