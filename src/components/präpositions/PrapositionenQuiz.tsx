import { useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { verbPraepositionenData } from "./data/prapositionen-data";
import type {
  VerbPraepositionItem,
  VerbPraepositionKasus,
} from "./types/prapositionen-types";

type QuizMode = "mixed" | "praeposition" | "kasus";

const STREAK_GOAL = 8;

type QuizQuestion = {
  answer: string;
  item: VerbPraepositionItem;
  options: string[];
  prompt: string;
  type: Exclude<QuizMode, "mixed">;
};

const modeLabel: Record<QuizMode, string> = {
  mixed: "Mix",
  praeposition: "Präposition",
  kasus: "Kasus",
};

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

const kasusLabel: Record<VerbPraepositionKasus, string> = {
  Akk: "Akkusativ",
  Dat: "Dativ",
  Gen: "Genitiv",
};

const quizItems = verbPraepositionenData.filter(
  (item) => !item.praeposition.toLowerCase().includes("genitiv")
);

const pickRandom = <T,>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)];

const shuffle = <T,>(items: T[]) =>
  [...items].sort(() => Math.random() - 0.5);

const buildOptions = (answer: string, pool: string[], size = 4) => {
  const distractors = shuffle(pool.filter((item) => item !== answer)).slice(
    0,
    size - 1
  );

  return shuffle([answer, ...distractors]);
};

const hidePraeposition = (example: string, praeposition: string) => {
  const escapedPraeposition = praeposition.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
  const pattern = new RegExp(`\\b${escapedPraeposition}\\b`, "i");

  return example.replace(pattern, "___");
};

const fireCompletionConfetti = () => {
  const defaults = {
    colors: ["#ffe130", "#ff7b2f", "#23a455", "#ffffff", "#17130c"],
    disableForReducedMotion: true,
    scalar: 1.15,
    ticks: 220,
  };

  confetti({
    ...defaults,
    angle: 60,
    origin: { x: 0, y: 0.72 },
    particleCount: 90,
    spread: 70,
  });
  confetti({
    ...defaults,
    angle: 120,
    origin: { x: 1, y: 0.72 },
    particleCount: 90,
    spread: 70,
  });
  confetti({
    ...defaults,
    origin: { x: 0.5, y: 0.35 },
    particleCount: 130,
    spread: 110,
    startVelocity: 42,
  });
};

const createQuestion = (mode: QuizMode): QuizQuestion => {
  const item = pickRandom(quizItems);
  const type =
    mode === "mixed"
      ? pickRandom<QuizQuestion["type"]>(["praeposition", "kasus"])
      : mode;

  if (type === "kasus") {
    return {
      answer: item.kasus,
      item,
      options: buildOptions(item.kasus, ["Akk", "Dat", "Gen"], 3),
      prompt: `Welchen Kasus braucht "${item.verb} ${item.praeposition}"?`,
      type,
    };
  }

  const allPraepositionen = Array.from(
    new Set(quizItems.map((quizItem) => quizItem.praeposition))
  );

  return {
    answer: item.praeposition,
    item,
    options: buildOptions(item.praeposition, allPraepositionen),
    prompt: hidePraeposition(item.beispiel, item.praeposition),
    type,
  };
};

const PrapositionenQuiz = () => {
  const [mode, setMode] = useState<QuizMode>("mixed");
  const [question, setQuestion] = useState(() => createQuestion("mixed"));
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.answer;
  const accuracy = answered ? Math.round((score / answered) * 100) : 0;
  const progressWidth = `${Math.min((streak / STREAK_GOAL) * 100, 100)}%`;
  const correctLabel =
    question.type === "kasus"
      ? `${question.answer} (${kasusLabel[question.answer as VerbPraepositionKasus]})`
      : `${question.answer} (${praepositionTranslation[question.answer] ?? "ohne Übersetzung"})`;

  const detailText = useMemo(() => {
    const translation =
      praepositionTranslation[question.item.praeposition] ?? "ohne Übersetzung";

    return `${question.item.verb} + ${question.item.praeposition} (${translation}) + ${question.item.kasus}`;
  }, [question.item]);

  const handleModeChange = (nextMode: QuizMode) => {
    setMode(nextMode);
    setQuestion(createQuestion(nextMode));
    setSelectedAnswer(null);
    setShowHint(false);
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered) {
      return;
    }

    const nextIsCorrect = answer === question.answer;
    setSelectedAnswer(answer);
    setAnswered((currentAnswered) => currentAnswered + 1);
    setScore((currentScore) => currentScore + (nextIsCorrect ? 1 : 0));
    setStreak((currentStreak) => {
      const nextStreak = nextIsCorrect ? currentStreak + 1 : 0;

      if (nextStreak > 0 && nextStreak % STREAK_GOAL === 0) {
        fireCompletionConfetti();
      }

      return nextStreak;
    });
  };

  const handleNextQuestion = () => {
    setQuestion(createQuestion(mode));
    setSelectedAnswer(null);
    setShowHint(false);
  };

  const handleReset = () => {
    setQuestion(createQuestion(mode));
    setSelectedAnswer(null);
    setScore(0);
    setStreak(0);
    setAnswered(0);
    setShowHint(false);
  };

  return (
    <section
      className="scroll-mt-28 border-t-2 border-[#17130c] bg-[#17130c] p-4 text-white sm:p-7"
      id="praepositionen-quiz"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">
            Quiz-Modus
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
            Trainiere Verben mit Präposition, ohne in die Tabelle zu schauen.
          </h3>
          <p className="mt-3 max-w-3xl text-sm font-bold leading-relaxed text-white/75">
            Ergänze die richtige Präposition oder wähle den passenden Kasus.
            Das Quiz mischt echte Beispiele aus deiner eigenen Liste, damit du
            nützliche Muster schneller erkennst.
          </p>
        </div>

        <aside className="grid grid-cols-3 gap-2 border-2 border-white/70 bg-[#ff7b2f] p-3 shadow-[4px_4px_0_#ffe130]">
          <div className="border border-white/70 bg-[#17130c] p-3 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Punkte
            </p>
            <p className="mt-1 text-2xl font-black">{score}</p>
          </div>
          <div className="border border-white/70 bg-[#17130c] p-3 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Serie
            </p>
            <p className="mt-1 text-2xl font-black">{streak}</p>
          </div>
          <div className="border border-white/70 bg-[#17130c] p-3 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
              Treffer
            </p>
            <p className="mt-1 text-2xl font-black">{accuracy}%</p>
          </div>
        </aside>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["mixed", "praeposition", "kasus"] as QuizMode[]).map((quizMode) => (
          <button
            className={`border-2 px-4 py-2 text-sm font-black transition hover:-translate-y-0.5 ${
              quizMode === mode
                ? "border-[#ffe130] bg-[#ffe130] text-[#17130c] shadow-[3px_3px_0_#ff7b2f]"
                : "border-white/70 bg-transparent text-white hover:bg-white/10"
            }`}
            key={quizMode}
            onClick={() => handleModeChange(quizMode)}
            type="button"
          >
            {modeLabel[quizMode]}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-hidden border-2 border-white/70 bg-[#fffaf0] text-[#17130c] shadow-[5px_5px_0_#ff7b2f]">
        <div className="border-b-2 border-[#17130c] bg-[#ffe130] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="border border-[#17130c] bg-[#fffaf0] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
              {question.type === "kasus"
                ? "Wähle den Kasus"
                : "Ergänze die Präp."}
            </span>
            <span className="text-sm font-black">
              {answered} beantwortet
            </span>
          </div>
          <div className="mt-4 h-3 border border-[#17130c] bg-[#fffaf0]">
            <div
              className="h-full bg-[#ff7b2f] transition-all duration-500"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="p-4 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6f583b]">
              Frage
            </p>
            <h4 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
              {question.prompt}
            </h4>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isSelected = option === selectedAnswer;
                const isRightAnswer = option === question.answer;
                const feedbackClass = !isAnswered
                  ? "bg-[#fffaf0] hover:-translate-y-0.5 hover:bg-[#ffe130] hover:shadow-[3px_3px_0_#17130c]"
                  : isRightAnswer
                    ? "bg-[#23a455] text-white"
                    : isSelected
                      ? "bg-[#ff7b2f] text-white"
                      : "bg-[#fffaf0] opacity-60";

                return (
                  <button
                    className={`border-2 border-[#17130c] px-4 py-4 text-left text-lg font-black transition ${feedbackClass}`}
                    disabled={isAnswered}
                    key={option}
                    onClick={() => handleAnswer(option)}
                    type="button"
                  >
                    {question.type === "kasus"
                      ? `${option} (${kasusLabel[option as VerbPraepositionKasus]})`
                      : option}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                className="border-2 border-[#17130c] bg-[#ffe130] px-4 py-2 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
                onClick={() => setShowHint((current) => !current)}
                type="button"
              >
                {showHint ? "Hinweis ausblenden" : "Hinweis"}
              </button>
              <button
                className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
                onClick={handleNextQuestion}
                type="button"
              >
                Nächste Frage
              </button>
              <button
                className="border-2 border-[#17130c] bg-[#fffaf0] px-4 py-2 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#17130c]"
                onClick={handleReset}
                type="button"
              >
                Zurücksetzen
              </button>
            </div>

            {showHint ? (
              <div className="mt-4 border-2 border-[#17130c] bg-[#ffe130] p-4">
                <p className="text-sm font-black">Hinweis: {detailText}</p>
              </div>
            ) : null}
          </div>

          <aside className="border-t-2 border-[#17130c] bg-[#f8edd6] p-4 sm:p-6 lg:border-l-2 lg:border-t-0">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Feedback
            </p>
            {isAnswered ? (
              <div
                className={`mt-4 border-2 border-[#17130c] p-4 shadow-[3px_3px_0_#17130c] ${
                  isCorrect ? "bg-[#23a455] text-white" : "bg-[#ff7b2f] text-white"
                }`}
              >
                <h4 className="text-2xl font-black">
                  {isCorrect ? "Richtig!" : "Fast. Schau dir das Muster an."}
                </h4>
                <p className="mt-3 border-t border-white/50 pt-3 text-sm font-bold leading-relaxed">
                  Antwort: {correctLabel}
                </p>
              </div>
            ) : (
              <div className="mt-4 border-2 border-[#17130c] bg-[#fffaf0] p-4">
                <h4 className="text-xl font-black">Wähle eine Option.</h4>
                <p className="mt-2 text-sm font-bold leading-relaxed text-[#5f4d35]">
                  Nutze den Hinweis nur, wenn du ihn brauchst. Deine Serie
                  steigt mit jeder richtigen Antwort in Folge.
                </p>
              </div>
            )}

            <div className="mt-4 border-2 border-[#17130c] bg-[#fffaf0] p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Beispiel
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-[#5f4d35]">
                {question.item.beispiel}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PrapositionenQuiz;
