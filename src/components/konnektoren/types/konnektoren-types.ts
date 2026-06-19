export type KonnektorCategory =
  | "Addition"
  | "Gegensatz"
  | "Kausal"
  | "Konditional"
  | "Konsekutiv"
  | "Final"
  | "Temporal";

export type KonnektorItem = {
  wort: string;
  literal: string;
  bedeutung: string;
  category: KonnektorCategory;
};
