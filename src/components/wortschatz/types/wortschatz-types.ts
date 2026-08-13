export type VocabularyCategory = "nomen" | "verben" | "adjektive" | "extras";

export type VocabularyArticle = "der" | "die" | "das";

export type VocabularyItem = {
  id: string;
  word: string;
  meaning: string;
  meaningEn?: string;
  category: VocabularyCategory;
  article?: VocabularyArticle;
  praeteritum?: string;
  partizip2?: string;
};

export type CategoryOption = {
  id: VocabularyCategory | "alle";
  label: string;
};
