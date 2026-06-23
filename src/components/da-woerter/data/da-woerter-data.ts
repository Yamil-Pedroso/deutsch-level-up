import type {
  DaWortItem,
  GenitivDaWortItem,
  GenitivExample,
  GoldenRulePair,
  ImportantDaWortItem,
} from "../types/da-woerter-types";

export const daWoerterData: DaWortItem[] = [
  {
    praeposition: "an",
    kasus: "Akk/Dat",
    frage: "woran?",
    antwort: "daran",
    beispiel: "Woran denkst du? - Ich denke daran.",
  },
  {
    praeposition: "auf",
    kasus: "Akk",
    frage: "worauf?",
    antwort: "darauf",
    beispiel: "Worauf wartest du? - Ich warte darauf.",
  },
  {
    praeposition: "aus",
    kasus: "Dat",
    frage: "woraus?",
    antwort: "daraus",
    beispiel: "Woraus besteht das? - Es besteht daraus.",
  },
  {
    praeposition: "bei",
    kasus: "Dat",
    frage: "wobei?",
    antwort: "dabei",
    beispiel: "Wobei hilfst du mir? - Ich helfe dir dabei.",
  },
  {
    praeposition: "durch",
    kasus: "Akk",
    frage: "wodurch?",
    antwort: "dadurch",
    beispiel: "Wodurch ist das passiert? - Dadurch.",
  },
  {
    praeposition: "für",
    kasus: "Akk",
    frage: "wofür?",
    antwort: "dafür",
    beispiel: "Wofür interessierst du dich? - Dafür.",
  },
  {
    praeposition: "gegen",
    kasus: "Akk",
    frage: "wogegen?",
    antwort: "dagegen",
    beispiel: "Wogegen kämpft er? - Dagegen.",
  },
  {
    praeposition: "hinter",
    kasus: "Akk/Dat",
    frage: "wohinter?",
    antwort: "dahinter",
    beispiel: "Was steckt dahinter? - Das steckt dahinter.",
  },
  {
    praeposition: "in",
    kasus: "Akk/Dat",
    frage: "worin?",
    antwort: "darin",
    beispiel: "Worin besteht das Problem? - Darin.",
  },
  {
    praeposition: "mit",
    kasus: "Dat",
    frage: "womit?",
    antwort: "damit",
    beispiel: "Womit fängst du an? - Damit.",
  },
  {
    praeposition: "nach",
    kasus: "Dat",
    frage: "wonach?",
    antwort: "danach",
    beispiel: "Wonach suchst du? - Danach.",
  },
  {
    praeposition: "neben",
    kasus: "Akk/Dat",
    frage: "woneben?",
    antwort: "daneben",
    beispiel: "Was liegt neben dem Buch? - Das liegt daneben.",
  },
  {
    praeposition: "über",
    kasus: "Akk",
    frage: "worüber?",
    antwort: "darüber",
    beispiel: "Worüber sprecht ihr? - Darüber.",
  },
  {
    praeposition: "um",
    kasus: "Akk",
    frage: "worum?",
    antwort: "darum",
    beispiel: "Worum kümmerst du dich? - Darum.",
  },
  {
    praeposition: "unter",
    kasus: "Akk/Dat",
    frage: "worunter?",
    antwort: "darunter",
    beispiel: "Worunter leidet er? - Darunter.",
  },
  {
    praeposition: "von",
    kasus: "Dat",
    frage: "wovon?",
    antwort: "davon",
    beispiel: "Wovon träumst du? - Davon.",
  },
  {
    praeposition: "vor",
    kasus: "Akk/Dat",
    frage: "wovor?",
    antwort: "davor",
    beispiel: "Wovor hast du Angst? - Davor.",
  },
  {
    praeposition: "zu",
    kasus: "Dat",
    frage: "wozu?",
    antwort: "dazu",
    beispiel: "Wozu dient das? - Dazu.",
  },
  {
    praeposition: "zwischen",
    kasus: "Akk/Dat",
    frage: "wozwischen?",
    antwort: "dazwischen",
    beispiel: "Was liegt zwischen den Häusern? - Dazwischen.",
  },
];

export const importantDaWoerter: ImportantDaWortItem[] = [
  {
    label: "an (+ Akk)",
    frage: "Woran denkst du?",
    antwort: "Ich denke daran.",
    translation: "Pienso en eso.",
  },
  {
    label: "auf (+ Akk)",
    frage: "Worauf wartest du?",
    antwort: "Ich warte darauf.",
    translation: "Espero eso.",
  },
  {
    label: "für (+ Akk)",
    frage: "Wofür interessierst du dich?",
    antwort: "Ich interessiere mich dafür.",
    translation: "Me interesa eso.",
  },
  {
    label: "über (+ Akk)",
    frage: "Worüber sprecht ihr?",
    antwort: "Wir sprechen darüber.",
    translation: "Hablamos sobre eso.",
  },
  {
    label: "um (+ Akk)",
    frage: "Worum kümmerst du dich?",
    antwort: "Ich kümmere mich darum.",
    translation: "Me ocupo de eso.",
  },
  {
    label: "mit (+ Dat)",
    frage: "Womit fängst du an?",
    antwort: "Ich fange damit an.",
    translation: "Empiezo con eso.",
  },
  {
    label: "von (+ Dat)",
    frage: "Wovon träumst du?",
    antwort: "Ich träume davon.",
    translation: "Sueño con eso.",
  },
  {
    label: "zu (+ Dat)",
    frage: "Wozu brauchst du das?",
    antwort: "Ich brauche das dazu.",
    translation: "Necesito eso para ello.",
  },
  {
    label: "vor (+ Dat)",
    frage: "Wovor hast du Angst?",
    antwort: "Ich habe davor Angst.",
    translation: "Tengo miedo de eso.",
  },
  {
    label: "unter (+ Dat)",
    frage: "Worunter leidest du?",
    antwort: "Ich leide darunter.",
    translation: "Sufro por eso.",
  },
  {
    label: "in (+ Dat)",
    frage: "Worin besteht das Problem?",
    antwort: "Das Problem besteht darin, dass niemand Zeit hat.",
    translation: "El problema consiste en que nadie tiene tiempo.",
  },
  {
    label: "zwischen (+ Dat)",
    frage: "Was steht zwischen den beiden Häusern?",
    antwort: "Dazwischen steht ein Baum.",
    translation: "Entre ellos hay un árbol.",
  },
];

export const genitivDaWoerter: GenitivDaWortItem[] = [
  {
    praeposition: "wegen",
    kasus: "Gen",
    frage: "weswegen?",
    antwort: "deswegen",
  },
  {
    praeposition: "statt",
    kasus: "Gen",
    frage: "anstatt wessen?",
    antwort: "stattdessen",
  },
  {
    praeposition: "während",
    kasus: "Gen",
    frage: "während wessen?",
    antwort: "währenddessen",
  },
  {
    praeposition: "trotz",
    kasus: "Gen",
    frage: "trotz wessen?",
    antwort: "trotzdem",
  },
];

export const genitivExamples: GenitivExample[] = [
  {
    frage: "Weswegen bist du traurig?",
    antwort: "Deswegen bin ich traurig.",
    translation: "Por eso estoy triste.",
  },
  {
    frage: "Was machst du anstatt Sport?",
    antwort: "Stattdessen lese ich ein Buch.",
    translation: "En vez de eso leo un libro.",
  },
  {
    frage: "Was machst du während der Pause?",
    antwort: "Währenddessen höre ich Musik.",
    translation: "Mientras tanto escucho música.",
  },
];

export const goldenRulePairs: GoldenRulePair[] = [
  { frage: "woran", antwort: "daran" },
  { frage: "worauf", antwort: "darauf" },
  { frage: "wofür", antwort: "dafür" },
  { frage: "womit", antwort: "damit" },
  { frage: "wovon", antwort: "davon" },
  { frage: "worüber", antwort: "darüber" },
  { frage: "worum", antwort: "darum" },
  { frage: "worunter", antwort: "darunter" },
  { frage: "wovor", antwort: "davor" },
  { frage: "wozu", antwort: "dazu" },
];
