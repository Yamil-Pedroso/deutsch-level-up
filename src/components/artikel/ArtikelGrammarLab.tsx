import { useEffect, useState } from "react";
import {
  adjectiveExercises,
  articleMistakes,
  caseExercises,
  definiteArticleByCase,
  nounData,
} from "./data/artikel-data";
import type { Gender, Kasus } from "./types/artikel-types";

type GrammarLabProps = {
  bestSpeedScore: number;
  onAnswer: (
    area: "gender" | "case" | "plural" | "adjective",
    correct: boolean,
  ) => void;
  onSpeedScore: (score: number) => void;
};

type GrammarMode = "Adjektive" | "Kasus-Detektiv" | "Transformieren" | "Fehler" | "Tempo";
const modes: GrammarMode[] = ["Adjektive", "Kasus-Detektiv", "Transformieren", "Fehler", "Tempo"];

export function ArtikelGrammarLab({
  bestSpeedScore,
  onAnswer,
  onSpeedScore,
}: GrammarLabProps) {
  const [mode, setMode] = useState<GrammarMode>("Adjektive");

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c] bg-[#cfeeff]" id="grammatik">
      <div className="border-b-2 border-[#17130c] p-4 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em]">08–11 · Kasus & Deklination</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-black">Artikel im echten Satz</h2>
          <div className="flex gap-2 overflow-x-auto">
            {modes.map((item) => (
              <button
                className={`shrink-0 border-2 border-[#17130c] px-3 py-2 text-sm font-black ${
                  item === mode ? "bg-[#17130c] text-white" : "bg-white hover:bg-[#ffe130]"
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
      </div>
      <div className="p-4 sm:p-7">
        {mode === "Adjektive" && <AdjectiveTrainer onAnswer={onAnswer} />}
        {mode === "Kasus-Detektiv" && <CaseDetective onAnswer={onAnswer} />}
        {mode === "Transformieren" && <CaseTransformer />}
        {mode === "Fehler" && <ErrorDetective />}
        {mode === "Tempo" && <SpeedMode bestScore={bestSpeedScore} onSave={onSpeedScore} />}
      </div>
    </section>
  );
}

function AdjectiveTrainer({ onAnswer }: Pick<GrammarLabProps, "onAnswer">) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [attemptRecorded, setAttemptRecorded] = useState(false);
  const item = adjectiveExercises[index];
  const correct = answer.trim().toLocaleLowerCase("de") === item.answer.toLocaleLowerCase("de");

  const check = () => {
    if (!attemptRecorded) {
      onAnswer("adjective", correct);
      setAttemptRecorded(true);
    }
    setChecked(true);
  };

  const next = () => {
    setIndex((index + 1) % adjectiveExercises.length);
    setAnswer("");
    setChecked(false);
    setAttemptRecorded(false);
  };

  return (
    <Frame eyebrow="08 · Adjektiv-Endungen" title={item.sentence} subtitle="Schreibe das vollständige Adjektiv.">
      <input className="w-full border-2 border-[#17130c] bg-white p-4 text-xl font-black" onChange={(event) => { setAnswer(event.target.value); setChecked(false); }} placeholder="z. B. schöner" value={answer} />
      {checked && <Result correct={correct}>{correct ? "Richtig!" : `Lösung: ${item.answer}`} {item.explanation}</Result>}
      <Actions><Primary onClick={check}>Prüfen</Primary><Secondary onClick={next}>Weiter</Secondary></Actions>
    </Frame>
  );
}

function CaseDetective({ onAnswer }: Pick<GrammarLabProps, "onAnswer">) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Kasus | "">("");
  const item = caseExercises[index];
  const locked = answer !== "";
  const correct = answer === item.answer;

  const choose = (kasus: Kasus) => {
    if (locked) return;
    setAnswer(kasus);
    onAnswer("case", kasus === item.answer);
  };

  const next = () => {
    setIndex((index + 1) % caseExercises.length);
    setAnswer("");
  };

  return (
    <Frame eyebrow="09 · Satz-Detektiv" title={item.sentence} subtitle="Welcher Kasus wird durch den markanten Artikel gezeigt?">
      <div className="grid gap-3 sm:grid-cols-4">
        {(["Nominativ", "Akkusativ", "Dativ", "Genitiv"] as const).map((kasus) => (
          <button
            className={`border-2 border-[#17130c] p-4 font-black ${locked && kasus === item.answer ? "bg-[#79dc87]" : locked && kasus === answer ? "bg-[#ff9a91]" : "bg-white hover:bg-[#ffe130]"}`}
            disabled={locked}
            key={kasus}
            onClick={() => choose(kasus)}
            type="button"
          >
            {kasus}
          </button>
        ))}
      </div>
      {locked && <Result correct={correct}>{item.reason}</Result>}
      {locked && <Actions><Primary onClick={next}>Nächster Satz</Primary></Actions>}
    </Frame>
  );
}

function CaseTransformer() {
  const [nounId, setNounId] = useState(nounData[0].id);
  const [target, setTarget] = useState<Kasus>("Akkusativ");
  const noun = nounData.find((item) => item.id === nounId) ?? nounData[0];
  const article = definiteArticleByCase[target][noun.article];
  const ending =
    target === "Genitiv" && noun.article !== "die"
      ? getGenitiveForm(noun.noun)
      : noun.noun;
  const sentenceTemplates: Record<Kasus, string> = {
    Nominativ: `${article} ${ending} ist heute wichtig.`,
    Akkusativ: `Ich sehe ${article} ${ending}.`,
    Dativ: `Ich spreche mit ${article} ${ending}.`,
    Genitiv: `Die Farbe ${article} ${ending} gefällt mir.`,
  };

  return (
    <Frame eyebrow="10 · Kasus-Transformer" title={`${noun.article} ${noun.noun} → ${target}`} subtitle="Wähle ein Nomen und beobachte, wie sich Artikel und Satz verändern.">
      <div className="grid gap-3 sm:grid-cols-2">
        <select className="border-2 border-[#17130c] bg-white p-3 font-black" onChange={(event) => setNounId(event.target.value)} value={nounId}>
          {nounData.map((item) => <option key={item.id} value={item.id}>{item.article} {item.noun}</option>)}
        </select>
        <select className="border-2 border-[#17130c] bg-white p-3 font-black" onChange={(event) => setTarget(event.target.value as Kasus)} value={target}>
          {(["Nominativ", "Akkusativ", "Dativ", "Genitiv"] as const).map((kasus) => <option key={kasus}>{kasus}</option>)}
        </select>
      </div>
      <div className="mt-5 border-2 border-[#17130c] bg-[#ffe130] p-6 shadow-[4px_4px_0_#17130c]">
        <p className="text-4xl font-black">{article} {ending}</p>
        <p className="mt-3 text-lg font-bold">{sentenceTemplates[target]}</p>
      </div>
    </Frame>
  );
}

function getGenitiveForm(noun: string) {
  if (noun === "Student" || noun === "Linguist") return `${noun}en`;
  if (noun.endsWith("nis")) return `${noun}ses`;
  if (["Tisch", "Buch"].includes(noun) || /[sxzß]$/.test(noun)) return `${noun}es`;
  return `${noun}s`;
}

function ErrorDetective() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const item = articleMistakes[index];

  const next = () => {
    setIndex((index + 1) % articleMistakes.length);
    setRevealed(false);
  };

  return (
    <Frame eyebrow="11 · Häufige Fehler" title="Korrigiere den Artikel" subtitle="Erkläre dir zuerst selbst, warum der Satz nicht stimmt.">
      <div className="border-2 border-[#17130c] bg-[#ffaaa1] p-5 text-xl font-black shadow-[4px_4px_0_#17130c]">✕ {item.wrong}</div>
      {revealed && <div className="mt-4 border-2 border-[#17130c] bg-[#a8e8b0] p-5"><p className="text-xl font-black">✓ {item.correct}</p><p className="mt-3 border-t-2 border-[#17130c] pt-3 font-bold">{item.explanation}</p></div>}
      <Actions>{revealed ? <Primary onClick={next}>Verstanden · Weiter</Primary> : <Primary onClick={() => setRevealed(true)}>Lösung zeigen</Primary>}</Actions>
    </Frame>
  );
}

function SpeedMode({ bestScore, onSave }: { bestScore: number; onSave: (score: number) => void }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const item = nounData[index % nounData.length];

  useEffect(() => {
    if (!running) return;
    if (timeLeft === 0) {
      setRunning(false);
      onSave(score);
      return;
    }
    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [onSave, running, score, timeLeft]);

  const start = () => {
    setTimeLeft(60);
    setScore(0);
    setIndex(Math.floor(Math.random() * nounData.length));
    setRunning(true);
  };

  const answer = (article: Gender) => {
    if (!running) return;
    if (article === item.article) setScore((value) => value + 1);
    setIndex((value) => value + 1);
  };

  return (
    <Frame eyebrow="12 · 60-Sekunden-Modus" title={running ? `___ ${item.noun}` : "Bereit für Tempo?"} subtitle={`Zeit: ${timeLeft}s · Punkte: ${score} · Rekord: ${bestScore}`}>
      {!running ? (
        <div className="border-2 border-[#17130c] bg-[#17130c] p-7 text-center text-white">
          <p className="text-5xl font-black text-[#ffe130]">{bestScore}</p>
          <p className="mt-2 font-black uppercase">Bisheriger Rekord</p>
          <div className="mt-5"><Primary onClick={start}>60 Sekunden starten</Primary></div>
        </div>
      ) : (
        <>
          <div className="h-4 border-2 border-[#17130c] bg-white"><div className="h-full bg-[#ff7b2f] transition-all" style={{ width: `${(timeLeft / 60) * 100}%` }} /></div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {(["der", "die", "das"] as const).map((article) => <button className="border-2 border-[#17130c] bg-white p-5 text-2xl font-black hover:bg-[#ffe130]" key={article} onClick={() => answer(article)} type="button">{article}</button>)}
          </div>
        </>
      )}
    </Frame>
  );
}

function Frame({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6d1a]">{eyebrow}</p><h3 className="mt-2 text-3xl font-black">{title}</h3><p className="mb-6 mt-2 font-semibold text-[#654d31]">{subtitle}</p>{children}</div>;
}
function Result({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  return <p aria-live="polite" className={`mt-4 border-2 border-[#17130c] p-4 font-black ${correct ? "bg-[#b8efbf]" : "bg-[#ffc2bc]"}`}>{children}</p>;
}
function Actions({ children }: { children: React.ReactNode }) {
  return <div className="mt-5 flex flex-wrap gap-2">{children}</div>;
}
function Primary({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 font-black text-white shadow-[3px_3px_0_#17130c]" onClick={onClick} type="button">{children}</button>;
}
function Secondary({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="border-2 border-[#17130c] bg-white px-4 py-3 font-black hover:bg-[#ffe130]" onClick={onClick} type="button">{children}</button>;
}
