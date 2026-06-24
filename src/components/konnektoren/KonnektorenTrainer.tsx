import { useState } from "react";
import {
  connectorComparisons,
  mistakeExercises,
  quizQuestions,
  sentenceExercises,
  transformationExercises,
  wordOrderExercises,
} from "./data/konnektoren-data";
import { SpeakButton } from "./SpeakButton";

type TrainerProps = {
  onComplete: (id: string) => void;
  onQuizAnswer: (correct: boolean) => void;
};

type TrainerMode = "Vergleichen" | "Verbinden" | "Quiz" | "Satz-Puzzle" | "Umformen" | "Fehler";

const modes: TrainerMode[] = ["Vergleichen", "Verbinden", "Quiz", "Satz-Puzzle", "Umformen", "Fehler"];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("de")
    .replace(/[.,!?„“"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function KonnektorenTrainer({ onComplete, onQuizAnswer }: TrainerProps) {
  const [mode, setMode] = useState<TrainerMode>("Vergleichen");

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c] bg-[#fffaf0]" id="training">
      <div className="border-b-2 border-[#17130c] bg-[#17130c] p-4 text-white sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">03–08 · Trainingslabor</p>
        <h2 className="mt-2 text-3xl font-black">Vom Erkennen zum Anwenden</h2>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {modes.map((item) => (
            <button
              className={`shrink-0 border-2 border-white px-4 py-2 text-sm font-black transition ${
                mode === item ? "bg-[#ffe130] text-[#17130c]" : "bg-[#17130c] text-white hover:bg-white hover:text-[#17130c]"
              }`}
              key={item}
              onClick={() => setMode(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-7">
        {mode === "Vergleichen" && <ComparisonModule onComplete={onComplete} />}
        {mode === "Verbinden" && <CombineModule onComplete={onComplete} />}
        {mode === "Quiz" && <QuizModule onComplete={onComplete} onQuizAnswer={onQuizAnswer} />}
        {mode === "Satz-Puzzle" && <WordOrderModule onComplete={onComplete} />}
        {mode === "Umformen" && <TransformModule onComplete={onComplete} />}
        {mode === "Fehler" && <MistakeModule onComplete={onComplete} />}
      </div>
    </section>
  );
}

function ComparisonModule({ onComplete }: Pick<TrainerProps, "onComplete">) {
  const [index, setIndex] = useState(0);
  const item = connectorComparisons[index];

  return (
    <PracticeShell eyebrow="03 · Konnektoren vergleichen" title={item.title} description={item.description}>
      <div className="grid gap-4 md:grid-cols-2">
        {[item.left, item.right].map((side, sideIndex) => (
          <article className={`border-2 border-[#17130c] p-5 shadow-[4px_4px_0_#17130c] ${sideIndex ? "bg-[#9dd9ff]" : "bg-[#ffe130]"}`} key={side.connector}>
            <h4 className="text-3xl font-black">{side.connector}</h4>
            <p className="mt-3 border-y-2 border-[#17130c] py-3 font-black">{side.rule}</p>
            <p className="mt-4 text-lg font-bold">{side.example}</p>
            <div className="mt-4"><SpeakButton compact text={side.example} /></div>
          </article>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <ActionButton onClick={() => { onComplete(item.id); setIndex((index + 1) % connectorComparisons.length); }}>
          Verstanden · Nächstes Paar
        </ActionButton>
      </div>
    </PracticeShell>
  );
}

function CombineModule({ onComplete }: Pick<TrainerProps, "onComplete">) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const item = sentenceExercises[index];
  const correct = normalize(answer) === normalize(item.answer) || (!!item.alternative && normalize(answer) === normalize(item.alternative));

  const next = () => {
    if (correct) onComplete(item.id);
    setIndex((index + 1) % sentenceExercises.length);
    setAnswer("");
    setChecked(false);
  };

  return (
    <PracticeShell eyebrow="04 · Sätze verbinden" title={`Verbinde mit „${item.connector}“`} description="Achte besonders auf die Position des Verbs.">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <SentenceBox>{item.first}</SentenceBox>
        <span className="text-center text-3xl font-black text-[#ff6d1a]">+</span>
        <SentenceBox>{item.second}</SentenceBox>
      </div>
      <textarea
        className="mt-5 min-h-28 w-full border-2 border-[#17130c] bg-white p-4 text-lg font-bold outline-none focus:shadow-[4px_4px_0_#17130c]"
        onChange={(event) => { setAnswer(event.target.value); setChecked(false); }}
        placeholder="Schreibe deinen vollständigen Satz …"
        value={answer}
      />
      {checked && (
        <Feedback correct={correct}>
          {correct ? "Sehr gut! Der Satzbau stimmt." : `Musterlösung: ${item.answer}`}
        </Feedback>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <ActionButton onClick={() => setChecked(true)}>Prüfen</ActionButton>
        <SecondaryButton onClick={next}>Weiter</SecondaryButton>
      </div>
    </PracticeShell>
  );
}

function QuizModule({ onComplete, onQuizAnswer }: TrainerProps) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [locked, setLocked] = useState(false);
  const item = quizQuestions[index];
  const correct = choice === item.answer;

  const choose = (option: string) => {
    if (locked) return;
    setChoice(option);
    setLocked(true);
    onQuizAnswer(option === item.answer);
    if (option === item.answer) onComplete(item.id);
  };

  const next = () => {
    setIndex((index + 1) % quizQuestions.length);
    setChoice("");
    setLocked(false);
  };

  return (
    <PracticeShell eyebrow="05 · Kontext-Quiz" title={`Frage ${index + 1} von ${quizQuestions.length}`} description="Welcher Konnektor passt semantisch und grammatisch?">
      <p className="border-2 border-[#17130c] bg-[#ffe130] p-5 text-xl font-black shadow-[4px_4px_0_#17130c]">{item.sentence}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {item.options.map((option) => {
          const isAnswer = locked && option === item.answer;
          const isWrong = locked && option === choice && !correct;
          return (
            <button
              className={`border-2 border-[#17130c] p-4 text-lg font-black transition hover:-translate-y-0.5 ${
                isAnswer ? "bg-[#73d673]" : isWrong ? "bg-[#ff8b8b]" : "bg-white hover:bg-[#cfeeff]"
              }`}
              disabled={locked}
              key={option}
              onClick={() => choose(option)}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>
      {locked && <Feedback correct={correct}>{item.explanation}</Feedback>}
      {locked && <div className="mt-4"><ActionButton onClick={next}>Nächste Frage</ActionButton></div>}
    </PracticeShell>
  );
}

function WordOrderModule({ onComplete }: Pick<TrainerProps, "onComplete">) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const item = wordOrderExercises[index];
  const builtSentence = selected.map((wordIndex) => item.words[wordIndex]).join(" ");
  const correct = normalize(builtSentence) === normalize(item.answer);

  const next = () => {
    if (correct) onComplete(item.id);
    setIndex((index + 1) % wordOrderExercises.length);
    setSelected([]);
    setChecked(false);
  };

  return (
    <PracticeShell eyebrow="06 · Satz-Puzzle" title="Baue den Satz" description={item.hint}>
      <div className="min-h-20 border-2 border-dashed border-[#17130c] bg-[#cfeeff] p-4 text-xl font-black">
        {builtSentence || "Klicke die Wörter in der richtigen Reihenfolge …"}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {item.words.map((word, wordIndex) => (
          <button
            className="border-2 border-[#17130c] bg-white px-4 py-3 font-black shadow-[2px_2px_0_#17130c] disabled:cursor-not-allowed disabled:opacity-30"
            disabled={selected.includes(wordIndex)}
            key={`${word}-${wordIndex}`}
            onClick={() => { setSelected([...selected, wordIndex]); setChecked(false); }}
            type="button"
          >
            {word}
          </button>
        ))}
      </div>
      {checked && <Feedback correct={correct}>{correct ? "Perfekt gebaut!" : `Lösung: ${item.answer}`}</Feedback>}
      <div className="mt-5 flex flex-wrap gap-2">
        <ActionButton onClick={() => setChecked(true)}>Prüfen</ActionButton>
        <SecondaryButton onClick={() => { setSelected([]); setChecked(false); }}>Neu bauen</SecondaryButton>
        <SecondaryButton onClick={next}>Weiter</SecondaryButton>
      </div>
    </PracticeShell>
  );
}

function TransformModule({ onComplete }: Pick<TrainerProps, "onComplete">) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const item = transformationExercises[index];
  const correct = normalize(answer) === normalize(item.answer);

  const next = () => {
    if (correct) onComplete(item.id);
    setIndex((index + 1) % transformationExercises.length);
    setAnswer("");
    setChecked(false);
  };

  return (
    <PracticeShell eyebrow="07 · Satz-Transformer" title={`${item.from} → ${item.to}`} description="Drücke dieselbe Aussage mit einer anderen Struktur aus.">
      <SentenceBox>{item.source}</SentenceBox>
      <textarea
        className="mt-5 min-h-28 w-full border-2 border-[#17130c] bg-white p-4 text-lg font-bold outline-none focus:shadow-[4px_4px_0_#17130c]"
        onChange={(event) => { setAnswer(event.target.value); setChecked(false); }}
        placeholder={`Formuliere mit „${item.to}“ …`}
        value={answer}
      />
      {checked && <Feedback correct={correct}>{correct ? "Starke Umformung!" : `Musterlösung: ${item.answer}`}</Feedback>}
      <div className="mt-4 flex gap-2">
        <ActionButton onClick={() => setChecked(true)}>Prüfen</ActionButton>
        <SecondaryButton onClick={next}>Weiter</SecondaryButton>
      </div>
    </PracticeShell>
  );
}

function MistakeModule({ onComplete }: Pick<TrainerProps, "onComplete">) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const item = mistakeExercises[index];

  const next = () => {
    onComplete(item.id);
    setIndex((index + 1) % mistakeExercises.length);
    setRevealed(false);
  };

  return (
    <PracticeShell eyebrow="08 · Fehler-Detektiv" title="Was ist hier falsch?" description="Finde den Fehler im Satz, bevor du die Lösung öffnest.">
      <div className="border-2 border-[#17130c] bg-[#ffb0a6] p-5 shadow-[4px_4px_0_#17130c]">
        <span className="font-black">✕</span>
        <p className="mt-2 text-xl font-black">{item.wrong}</p>
      </div>
      {revealed && (
        <div className="mt-4 border-2 border-[#17130c] bg-[#9ee49e] p-5">
          <p className="text-xl font-black">✓ {item.correct}</p>
          <p className="mt-3 border-t-2 border-[#17130c] pt-3 font-bold">{item.explanation}</p>
        </div>
      )}
      <div className="mt-5 flex gap-2">
        {!revealed ? <ActionButton onClick={() => setRevealed(true)}>Lösung zeigen</ActionButton> : <ActionButton onClick={next}>Verstanden · Weiter</ActionButton>}
      </div>
    </PracticeShell>
  );
}

type PracticeShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function PracticeShell({ eyebrow, title, description, children }: PracticeShellProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6d1a]">{eyebrow}</p>
      <h3 className="mt-2 text-3xl font-black">{title}</h3>
      <p className="mb-6 mt-2 font-semibold text-[#654d31]">{description}</p>
      {children}
    </div>
  );
}

function SentenceBox({ children }: { children: React.ReactNode }) {
  return <p className="border-2 border-[#17130c] bg-white p-5 text-lg font-black">{children}</p>;
}

function Feedback({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  return (
    <p aria-live="polite" className={`mt-4 border-2 border-[#17130c] p-4 font-black ${correct ? "bg-[#9ee49e]" : "bg-[#ffb0a6]"}`}>
      {children}
    </p>
  );
}

function ActionButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 font-black text-white shadow-[3px_3px_0_#17130c] transition hover:-translate-y-0.5" onClick={onClick} type="button">{children}</button>;
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="border-2 border-[#17130c] bg-white px-4 py-3 font-black transition hover:bg-[#ffe130]" onClick={onClick} type="button">{children}</button>;
}
