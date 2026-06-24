export type KonnektorCategory =
  | "Addition"
  | "Gegensatz"
  | "Kausal"
  | "Konditional"
  | "Konsekutiv"
  | "Final"
  | "Temporal";

export type LanguageLevel = "A1" | "A2" | "B1" | "B2";
export type VerbPosition = "Position 2" | "Satzende" | "Unverändert";

export type KonnektorItem = {
  id: string;
  wort: string;
  literal: string;
  category: KonnektorCategory;
  level: LanguageLevel;
  verbPosition: VerbPosition;
  structure: string;
  exampleDe: string;
  exampleEs: string;
};

export type ConnectorComparison = {
  id: string;
  title: string;
  description: string;
  left: { connector: string; rule: string; example: string };
  right: { connector: string; rule: string; example: string };
};

export type SentenceExercise = {
  id: string;
  first: string;
  second: string;
  connector: string;
  answer: string;
  alternative?: string;
};

export type QuizQuestion = {
  id: string;
  sentence: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type WordOrderExercise = {
  id: string;
  words: string[];
  answer: string;
  hint: string;
};

export type TransformationExercise = {
  id: string;
  source: string;
  from: string;
  to: string;
  answer: string;
};

export type MistakeExercise = {
  id: string;
  wrong: string;
  correct: string;
  explanation: string;
};

export type KonnektorenProgress = {
  favorites: string[];
  mastered: string[];
  review: string[];
  quizCorrect: number;
  quizAnswered: number;
  completedActivities: string[];
};
