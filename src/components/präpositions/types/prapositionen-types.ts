export type PraepositionKasus =
  | "Akkusativ"
  | "Dativ"
  | "Genitiv"
  | "Akkusativ / Dativ";

export type PraepositionItem = {
  kasus: PraepositionKasus;
  praeposition: string;
  translation: string;
};
