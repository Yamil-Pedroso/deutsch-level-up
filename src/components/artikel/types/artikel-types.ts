export type ArtikelTable = {
  title: string;
  headers: string[];
  rows: string[][];
};

export type Gender = "der" | "die" | "das";
export type Kasus = "Nominativ" | "Akkusativ" | "Dativ" | "Genitiv";
export type ArtikelLevel = "A1" | "A2" | "B1";

export type NounItem = {
  id: string;
  noun: string;
  article: Gender;
  plural: string;
  translation: string;
  category: string;
  level: ArtikelLevel;
  example: string;
};

export type GenderRule = {
  article: Gender;
  endings: string[];
  description: string;
  examples: string[];
  exceptions?: string;
};

export type CaseExercise = {
  id: string;
  sentence: string;
  answer: Kasus;
  reason: string;
};

export type AdjectiveExercise = {
  id: string;
  sentence: string;
  answer: string;
  explanation: string;
};

export type ArticleMistake = {
  id: string;
  wrong: string;
  correct: string;
  explanation: string;
};

export type PersonalNoun = {
  id: string;
  noun: string;
  article: Gender;
  plural: string;
  example: string;
};

export type ArtikelProgress = {
  favorites: string[];
  mastered: string[];
  personalNouns: PersonalNoun[];
  genderCorrect: number;
  genderAnswered: number;
  caseCorrect: number;
  caseAnswered: number;
  pluralCorrect: number;
  pluralAnswered: number;
  adjectiveCorrect: number;
  adjectiveAnswered: number;
  bestSpeedScore: number;
};
