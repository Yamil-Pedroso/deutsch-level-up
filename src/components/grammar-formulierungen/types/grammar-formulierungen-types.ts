export type GrammarTableRow = {
  question: string;
  structure: string;
  example: string;
  cells?: string[];
};

export type GrammarTableSection = {
  title: string;
  prompt: string;
  headers?: string[];
  rows: GrammarTableRow[];
};

export type GrammarTableResource = {
  id: string;
  title: string;
  type: "table";
  sections: GrammarTableSection[];
  note?: string;
};

export type GrammarVerbEntry = {
  infinitiv: string;
  praesens: string;
  praeteritum: string;
  perfekt: string;
  translation: string;
};

export type GrammarVocabularyResource = {
  id: string;
  title: string;
  type: "verbs";
  note?: string;
  entries: GrammarVerbEntry[];
};

export type GrammarResource = GrammarTableResource | GrammarVocabularyResource;

export type GrammarTopicGroup = {
  title: string;
  items: string[];
};

export type GrammarChapter = {
  id: string;
  label: string;
  title: string;
  description: string;
  topicGroups: GrammarTopicGroup[];
  resources: GrammarResource[];
};
