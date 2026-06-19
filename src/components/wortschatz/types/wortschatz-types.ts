export type VocabularyCategory = "nomen" | "verben" | "extras";

export type VocabularyArticle = "der" | "die" | "das";

export type VocabularyItem = {
  id: string;
  word: string;
  meaning: string;
  category: VocabularyCategory;
  article?: VocabularyArticle;
};

export type CategoryOption = {
  id: VocabularyCategory | "alle";
  label: string;
};
