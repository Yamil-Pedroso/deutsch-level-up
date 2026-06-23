import { useEffect, useMemo, useState } from "react";
import { verbPraepositionenData } from "./data/prapositionen-data";

type FlashcardProgress = Record<string, "known" | "review">;

const STORAGE_KEY = "deutsch-studio:praepositionen-flashcards";

const praepositionTranslation: Record<string, string> = {
  an: "en / a",
  aus: "de / desde",
  auf: "en / sobre / a",
  bei: "en / con / junto a",
  bis: "hasta",
  durch: "a través de / por",
  entlang: "a lo largo de",
  für: "para / por",
  gegen: "contra",
  hinter: "detrás de",
  in: "en / dentro de / a",
  innerhalb: "dentro de",
  mit: "con",
  nach: "por / hacia / después de",
  neben: "al lado de",
  ohne: "sin",
  "anstatt / statt": "en lugar de",
  seit: "desde",
  trotz: "a pesar de",
  um: "por / de / alrededor de",
  über: "sobre / por",
  unter: "debajo de / bajo",
  von: "de",
  vor: "delante de / antes de / de",
  während: "durante",
  wegen: "debido a / por",
  zu: "a / hacia / para",
  gegenüber: "frente a",
  außerhalb: "fuera de",
  beiderseits: "a ambos lados de",
  diesseits: "de este lado de",
  jenseits: "al otro lado de",
  zwischen: "entre",
};

const flashcardItems = verbPraepositionenData.filter(
  (item) => !item.praeposition.toLowerCase().includes("genitiv")
);

const shuffle = <T,>(items: T[]) =>
  [...items].sort(() => Math.random() - 0.5);

const normalizeAnswer = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const getCardId = (index: number) => {
  const item = flashcardItems[index];

  return `${item.verb}-${item.praeposition}-${item.kasus}-${item.beispiel}`;
};

const splitExample = (example: string, praeposition: string) => {
  const escapedPraeposition = praeposition.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
  const pattern = new RegExp(`\\b${escapedPraeposition}\\b`, "i");
  const match = example.match(pattern);

  if (!match || match.index === undefined) {
    return { after: "", before: example };
  }

  return {
    after: example.slice(match.index + match[0].length),
    before: example.slice(0, match.index),
  };
};

const readProgress = (): FlashcardProgress => {
  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);
    return savedValue ? (JSON.parse(savedValue) as FlashcardProgress) : {};
  } catch {
    return {};
  }
};

const PrapositionenFlashcards = () => {
  const [deckOrder, setDeckOrder] = useState<number[]>(() =>
    shuffle(flashcardItems.map((_, index) => index))
  );
  const [activePosition, setActivePosition] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false);
  const [progress, setProgress] = useState<FlashcardProgress>(() =>
    readProgress()
  );

  const activeIndex = deckOrder[activePosition] ?? 0;
  const activeItem = flashcardItems[activeIndex];
  const activeCardId = getCardId(activeIndex);
  const knownCount = Object.values(progress).filter(
    (status) => status === "known"
  ).length;
  const reviewCount = Object.values(progress).filter(
    (status) => status === "review"
  ).length;
  const cardStatus = progress[activeCardId];
  const completion = Math.round((knownCount / flashcardItems.length) * 100);
  const isTypedAnswerCorrect =
    normalizeAnswer(typedAnswer) === normalizeAnswer(activeItem.praeposition);

  const exampleParts = useMemo(
    () => splitExample(activeItem.beispiel, activeItem.praeposition),
    [activeItem]
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const goToCard = (nextPosition: number) => {
    const safePosition =
      (nextPosition + flashcardItems.length) % flashcardItems.length;
    setActivePosition(safePosition);
    setTypedAnswer("");
    setHasCheckedAnswer(false);
  };

  const markCard = (status: "known" | "review") => {
    setProgress((currentProgress) => ({
      ...currentProgress,
      [activeCardId]: status,
    }));
    goToCard(activePosition + 1);
  };

  const resetProgress = () => {
    setProgress({});
    setTypedAnswer("");
    setHasCheckedAnswer(false);
    setActivePosition(0);
  };

  const checkAnswer = () => {
    setHasCheckedAnswer(true);
  };

  const reshuffleDeck = () => {
    setDeckOrder(shuffle(flashcardItems.map((_, index) => index)));
    setActivePosition(0);
    setTypedAnswer("");
    setHasCheckedAnswer(false);
  };

  return (
    <section
      className="scroll-mt-28 border-t-2 border-[#17130c] bg-[#ffe130] p-4 text-[#17130c] sm:p-7"
      id="praepositionen-flashcards"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            Flashcards
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
            Wendekarten mit Eingabefeld für Verb + Präposition + Kasus.
          </h3>
          <p className="mt-3 max-w-3xl text-sm font-bold leading-relaxed text-[#5f4d35]">
            Ergänze die fehlende Präposition direkt im Satz. Danach prüfst du
            deine Antwort und markierst die Karte als gewusst oder zum
            Wiederholen. Dein Fortschritt bleibt im Browser gespeichert.
          </p>
        </div>

        <aside className="grid grid-cols-3 gap-2 border-2 border-[#17130c] bg-[#fffaf0] p-3 shadow-[4px_4px_0_#17130c]">
          <div className="border border-[#17130c] bg-[#23a455] p-3 text-center text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Gewusst
            </p>
            <p className="mt-1 text-2xl font-black">{knownCount}</p>
          </div>
          <div className="border border-[#17130c] bg-[#ff7b2f] p-3 text-center text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Wiederholen
            </p>
            <p className="mt-1 text-2xl font-black">{reviewCount}</p>
          </div>
          <div className="border border-[#17130c] bg-[#17130c] p-3 text-center text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Gesamt
            </p>
            <p className="mt-1 text-2xl font-black">{completion}%</p>
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[4px_4px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.16em]">
            Karte
          </p>
          <p className="mt-2 text-3xl font-black">
            {activePosition + 1}/{flashcardItems.length}
          </p>
          <div className="mt-4 h-3 border border-[#17130c] bg-[#f8edd6]">
            <div
              className="h-full bg-[#23a455] transition-all duration-500"
              style={{ width: `${completion}%` }}
            />
          </div>
          <p className="mt-4 text-sm font-bold text-[#5f4d35]">
            Status:{" "}
            <span className="font-black text-[#17130c]">
              {cardStatus === "known"
                ? "Gewusst"
                : cardStatus === "review"
                  ? "Wiederholen"
                  : "Neu"}
            </span>
          </p>
        </aside>

        <div className="min-w-0">
          <div className="min-h-[300px] w-full border-2 border-[#17130c] bg-[#fffaf0] p-5 text-left shadow-[6px_6px_0_#17130c] sm:p-7">
            <span className="border border-[#17130c] bg-[#ffe130] px-3 py-1 text-xs font-black uppercase tracking-[0.14em]">
              Vorderseite
            </span>

            <div className="mt-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6f583b]">
                Ergänze die Präposition
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-3xl font-black leading-tight sm:text-5xl">
                <span>{exampleParts.before}</span>
                <input
                  aria-label="Präposition eingeben"
                  className="w-36 border-2 border-[#17130c] bg-[#ffe130] px-3 py-2 text-center text-2xl font-black outline-none transition focus:bg-white focus:shadow-[3px_3px_0_#17130c] sm:w-44 sm:text-4xl"
                  onChange={(event) => setTypedAnswer(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      checkAnswer();
                    }
                  }}
                  placeholder="___"
                  value={typedAnswer}
                />
                <span>{exampleParts.after}</span>
              </div>
              <p className="mt-5 border-t border-dashed border-[#17130c]/40 pt-5 text-lg font-black text-[#5f4d35]">
                {activeItem.verb} + ___
              </p>

              {hasCheckedAnswer ? (
                <div
                  className={`mt-5 border-2 border-[#17130c] p-4 shadow-[3px_3px_0_#17130c] ${
                    isTypedAnswerCorrect
                      ? "bg-[#23a455] text-white"
                      : "bg-[#ff7b2f] text-white"
                  }`}
                >
                  <p className="text-xl font-black">
                    {isTypedAnswerCorrect
                      ? "Richtig!"
                      : "Noch nicht. Schau dir die Lösung an."}
                  </p>
                  <p className="mt-3 border-t border-white/50 pt-3 text-sm font-bold leading-relaxed">
                    Lösung: {activeItem.praeposition} + {activeItem.kasus}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-relaxed">
                    {praepositionTranslation[activeItem.praeposition] ??
                      "ohne Übersetzung"}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-5 border-2 border-[#17130c] bg-[#17130c] p-4 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe130]">
                Rückseite
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed">
                Die vollständige Lösung erscheint nach dem Prüfen:
              </p>
              {hasCheckedAnswer ? (
                <p className="mt-3 border-t border-white/40 pt-3 text-base font-bold leading-relaxed">
                  {activeItem.beispiel}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              className="border-2 border-[#17130c] bg-[#ffe130] px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={checkAnswer}
              type="button"
            >
              Prüfen
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#fffaf0] px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={() => goToCard(activePosition - 1)}
              type="button"
            >
              Zurück
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#fffaf0] px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={() => goToCard(activePosition + 1)}
              type="button"
            >
              Weiter
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#ffe130] px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={reshuffleDeck}
              type="button"
            >
              Neu mischen
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#23a455] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={() => markCard("known")}
              type="button"
            >
              Ich weiß es
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={() => markCard("review")}
              type="button"
            >
              Wiederholen
            </button>
            <button
              className="border-2 border-[#17130c] bg-[#17130c] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
              onClick={resetProgress}
              type="button"
            >
              Fortschritt zurücksetzen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrapositionenFlashcards;
