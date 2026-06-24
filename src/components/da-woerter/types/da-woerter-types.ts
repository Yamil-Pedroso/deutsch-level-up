export type DaWortItem = {
  praeposition: string;
  kasus: string;
  frage: string;
  antwort: string;
  translation: string;
  beispiel: string;
};

export type ImportantDaWortItem = {
  label: string;
  frage: string;
  antwort: string;
  translation: string;
};

export type GenitivDaWortItem = {
  praeposition: string;
  kasus: "Gen";
  frage: string;
  antwort: string;
};

export type GenitivExample = {
  frage: string;
  antwort: string;
  translation: string;
};

export type GoldenRulePair = {
  frage: string;
  antwort: string;
};
