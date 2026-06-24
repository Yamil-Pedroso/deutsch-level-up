import type {
  AdjectiveExercise,
  ArtikelTable,
  ArticleMistake,
  CaseExercise,
  GenderRule,
  NounItem,
} from "../types/artikel-types";

export const artikelTables: ArtikelTable[] = [
  {
    title: "Bestimmte Artikel",
    headers: ["Kasus", "Maskulin", "Feminin", "Neutrum", "Plural"],
    rows: [
      ["Nominativ", "der", "die", "das", "die"],
      ["Akkusativ", "den", "die", "das", "die"],
      ["Dativ", "dem", "der", "dem", "den"],
      ["Genitiv", "des", "der", "des", "der"],
    ],
  },
  {
    title: "Unbestimmte Artikel",
    headers: ["Kasus", "Maskulin", "Feminin", "Neutrum"],
    rows: [
      ["Nominativ", "ein", "eine", "ein"],
      ["Akkusativ", "einen", "eine", "ein"],
      ["Dativ", "einem", "einer", "einem"],
      ["Genitiv", "eines", "einer", "eines"],
    ],
  },
  {
    title: "Deklination mit Beispielen",
    headers: [
      "Kasus",
      "Bestimmt: der Mann",
      "Unbestimmt: ein Mann",
      "Bestimmt: die Frau",
      "Unbestimmt: eine Frau",
    ],
    rows: [
      ["Nominativ", "der Mann", "ein Mann", "die Frau", "eine Frau"],
      ["Akkusativ", "den Mann", "einen Mann", "die Frau", "eine Frau"],
      ["Dativ", "dem Mann", "einem Mann", "der Frau", "einer Frau"],
      ["Genitiv", "des Mannes", "eines Mannes", "der Frau", "einer Frau"],
    ],
  },
  {
    title: "Deklination des Adjektivs klein",
    headers: [
      "Kasus",
      "Bestimmt der Hund",
      "Bestimmt die Blume",
      "Bestimmt das Sofa",
      "Unbestimmt ein Hund",
      "Unbestimmt eine Blume",
      "Unbestimmt ein Sofa",
      "Ohne Artikel m.",
      "Ohne Artikel f.",
      "Ohne Artikel n.",
    ],
    rows: [
      [
        "Nominativ",
        "der kleine Hund",
        "die kleine Blume",
        "das kleine Sofa",
        "ein kleiner Hund",
        "eine kleine Blume",
        "ein kleines Sofa",
        "kleiner Hund",
        "kleine Blume",
        "kleines Sofa",
      ],
      [
        "Akkusativ",
        "den kleinen Hund",
        "die kleine Blume",
        "das kleine Sofa",
        "einen kleinen Hund",
        "eine kleine Blume",
        "ein kleines Sofa",
        "kleinen Hund",
        "kleine Blume",
        "kleines Sofa",
      ],
      [
        "Dativ",
        "dem kleinen Hund",
        "der kleinen Blume",
        "dem kleinen Sofa",
        "einem kleinen Hund",
        "einer kleinen Blume",
        "einem kleinen Sofa",
        "kleinem Hund",
        "kleiner Blume",
        "kleinem Sofa",
      ],
      [
        "Genitiv",
        "des kleinen Hundes",
        "der kleinen Blume",
        "des kleinen Sofas",
        "eines kleinen Hundes",
        "einer kleinen Blume",
        "eines kleinen Sofas",
        "kleinen Hundes",
        "kleiner Blume",
        "kleinen Sofas",
      ],
    ],
  },
];

export const nounData: NounItem[] = [
  { id: "tisch", noun: "Tisch", article: "der", plural: "Tische", translation: "mesa", category: "Zuhause", level: "A1", example: "Der Tisch steht am Fenster." },
  { id: "stift", noun: "Stift", article: "der", plural: "Stifte", translation: "bolígrafo", category: "Lernen", level: "A1", example: "Der Stift liegt auf dem Tisch." },
  { id: "apfel", noun: "Apfel", article: "der", plural: "Äpfel", translation: "manzana", category: "Essen", level: "A1", example: "Der Apfel ist frisch." },
  { id: "schluessel", noun: "Schlüssel", article: "der", plural: "Schlüssel", translation: "llave", category: "Alltag", level: "A1", example: "Ich suche den Schlüssel." },
  { id: "linguist", noun: "Linguist", article: "der", plural: "Linguisten", translation: "lingüista", category: "Beruf", level: "B1", example: "Der Linguist untersucht Sprachen." },
  { id: "zeitung", noun: "Zeitung", article: "die", plural: "Zeitungen", translation: "periódico", category: "Medien", level: "A1", example: "Die Zeitung liegt vor der Tür." },
  { id: "freiheit", noun: "Freiheit", article: "die", plural: "Freiheiten", translation: "libertad", category: "Abstrakt", level: "B1", example: "Die Freiheit ist sehr wichtig." },
  { id: "moeglichkeit", noun: "Möglichkeit", article: "die", plural: "Möglichkeiten", translation: "posibilidad", category: "Abstrakt", level: "B1", example: "Das ist eine gute Möglichkeit." },
  { id: "schule", noun: "Schule", article: "die", plural: "Schulen", translation: "escuela", category: "Lernen", level: "A1", example: "Die Schule beginnt um acht Uhr." },
  { id: "flasche", noun: "Flasche", article: "die", plural: "Flaschen", translation: "botella", category: "Alltag", level: "A1", example: "Die Flasche ist leer." },
  { id: "buch", noun: "Buch", article: "das", plural: "Bücher", translation: "libro", category: "Lernen", level: "A1", example: "Das Buch ist interessant." },
  { id: "maedchen", noun: "Mädchen", article: "das", plural: "Mädchen", translation: "chica", category: "Personen", level: "A1", example: "Das Mädchen liest ein Buch." },
  { id: "instrument", noun: "Instrument", article: "das", plural: "Instrumente", translation: "instrumento", category: "Musik", level: "A2", example: "Das Instrument klingt schön." },
  { id: "auto", noun: "Auto", article: "das", plural: "Autos", translation: "coche", category: "Verkehr", level: "A1", example: "Das Auto steht vor dem Haus." },
  { id: "ergebnis", noun: "Ergebnis", article: "das", plural: "Ergebnisse", translation: "resultado", category: "Abstrakt", level: "A2", example: "Das Ergebnis überrascht mich." },
  { id: "student", noun: "Student", article: "der", plural: "Studenten", translation: "estudiante", category: "Personen", level: "A1", example: "Der Student lernt in der Bibliothek." },
  { id: "wohnung", noun: "Wohnung", article: "die", plural: "Wohnungen", translation: "vivienda", category: "Zuhause", level: "A1", example: "Die Wohnung ist sehr hell." },
  { id: "broetchen", noun: "Brötchen", article: "das", plural: "Brötchen", translation: "panecillo", category: "Essen", level: "A1", example: "Das Brötchen schmeckt gut." },
];

export const genderRules: GenderRule[] = [
  { article: "die", endings: ["-ung", "-heit", "-keit", "-schaft", "-ion"], description: "Viele abstrakte Nomen und Ableitungen sind feminin.", examples: ["die Wohnung", "die Freiheit", "die Möglichkeit", "die Nation"] },
  { article: "das", endings: ["-chen", "-lein", "-ment", "-um"], description: "Verkleinerungen sowie viele Fremdwörter sind neutral.", examples: ["das Mädchen", "das Brötchen", "das Instrument", "das Zentrum"] },
  { article: "der", endings: ["-ling", "-ismus", "-ist", "-er"], description: "Personenbezeichnungen und einige typische Endungen sind maskulin.", examples: ["der Lehrling", "der Tourismus", "der Linguist", "der Lehrer"], exceptions: "Nicht jedes Wort auf -er ist maskulin: die Leiter." },
];

export const caseExercises: CaseExercise[] = [
  { id: "case-1", sentence: "Der Mann kauft ein Buch.", answer: "Nominativ", reason: "„Der Mann“ ist das Subjekt: Wer kauft?" },
  { id: "case-2", sentence: "Ich sehe den Hund.", answer: "Akkusativ", reason: "„den Hund“ ist das direkte Objekt: Wen sehe ich?" },
  { id: "case-3", sentence: "Ich helfe dem Nachbarn.", answer: "Dativ", reason: "Das Verb „helfen“ verlangt den Dativ." },
  { id: "case-4", sentence: "Das Dach des Hauses ist rot.", answer: "Genitiv", reason: "„des Hauses“ zeigt Besitz oder Zugehörigkeit." },
  { id: "case-5", sentence: "Wir fahren mit dem Auto.", answer: "Dativ", reason: "Die Präposition „mit“ verlangt immer den Dativ." },
  { id: "case-6", sentence: "Sie legt das Buch auf den Tisch.", answer: "Akkusativ", reason: "Richtung mit „auf“: Wohin legt sie das Buch?" },
];

export const adjectiveExercises: AdjectiveExercise[] = [
  { id: "adj-1", sentence: "Das ist ein schön__ Tag.", answer: "schöner", explanation: "Maskulin, Nominativ, nach „ein“: -er." },
  { id: "adj-2", sentence: "Ich sehe den alt__ Mann.", answer: "alten", explanation: "Maskulin, Akkusativ, nach bestimmtem Artikel: -en." },
  { id: "adj-3", sentence: "Sie trägt eine rot__ Jacke.", answer: "rote", explanation: "Feminin, Akkusativ, nach „eine“: -e." },
  { id: "adj-4", sentence: "Wir wohnen in einem klein__ Haus.", answer: "kleinen", explanation: "Neutrum, Dativ, nach unbestimmtem Artikel: -en." },
  { id: "adj-5", sentence: "Frisch__ Brot schmeckt gut.", answer: "Frisches", explanation: "Neutrum, Nominativ, ohne Artikel: -es." },
];

export const articleMistakes: ArticleMistake[] = [
  { id: "error-1", wrong: "Ich fahre mit den Auto.", correct: "Ich fahre mit dem Auto.", explanation: "„mit“ verlangt Dativ; „Auto“ ist neutral: dem Auto." },
  { id: "error-2", wrong: "Ich sehe der Mann.", correct: "Ich sehe den Mann.", explanation: "Das direkte Objekt steht im Akkusativ: den Mann." },
  { id: "error-3", wrong: "Das ist einen guter Film.", correct: "Das ist ein guter Film.", explanation: "Nach „sein“ steht der Nominativ." },
  { id: "error-4", wrong: "Wegen dem Wetter bleiben wir zu Hause.", correct: "Wegen des Wetters bleiben wir zu Hause.", explanation: "In der Standardsprache verlangt „wegen“ den Genitiv." },
];

export const definiteArticleByCase = {
  Nominativ: { der: "der", die: "die", das: "das" },
  Akkusativ: { der: "den", die: "die", das: "das" },
  Dativ: { der: "dem", die: "der", das: "dem" },
  Genitiv: { der: "des", die: "der", das: "des" },
} as const;
