export type PraepositionKasus =
  | "Akkusativ"
  | "Dativ"
  | "Genitiv"
  | "Akkusativ / Dativ";

export type VerbPraepositionKasus = "Akk" | "Dat" | "Gen";

export type PraepositionItem = {
  kasus: PraepositionKasus;
  praeposition: string;
  translation: string;
};

export type VerbPraepositionItem = {
  verb: string;
  praeposition: string;
  kasus: VerbPraepositionKasus;
  beispiel: string;
};

export type ImportantVerbPraepositionGroup = {
  label: string;
  items: string[];
};
