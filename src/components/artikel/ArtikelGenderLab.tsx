import { useState } from "react";
import { nounData } from "./data/artikel-data";
import { ArtikelSpeakButton } from "./ArtikelSpeakButton";
import type {
  ArtikelLevel,
  ArtikelProgress,
  Gender,
} from "./types/artikel-types";

type GenderLabProps = {
  progress: ArtikelProgress;
  onAnswer: (area: "gender" | "plural", correct: boolean) => void;
  onToggle: (list: "favorites" | "mastered", id: string) => void;
};

type GenderMode = "Der–Die–Das" | "Plural" | "Sortieren" | "Roulette";
const modes: GenderMode[] = ["Der–Die–Das", "Plural", "Sortieren", "Roulette"];

function randomDifferentIndex(current: number, length: number) {
  if (length < 2) return 0;
  let next = current;
  while (next === current) next = Math.floor(Math.random() * length);
  return next;
}

export function ArtikelGenderLab({
  progress,
  onAnswer,
  onToggle,
}: GenderLabProps) {
  const [mode, setMode] = useState<GenderMode>("Der–Die–Das");

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c] bg-[#fffaf0]" id="genus">
      <div className="border-b-2 border-[#17130c] bg-[#17130c] p-4 text-white sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">03–06 · Genus & Plural</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-black">Wörter wirklich behalten</h2>
          <div className="flex gap-2 overflow-x-auto">
            {modes.map((item) => (
              <button
                className={`shrink-0 border-2 border-white px-3 py-2 text-sm font-black ${
                  item === mode ? "bg-[#ffe130] text-[#17130c]" : "hover:bg-white hover:text-[#17130c]"
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
        {mode === "Der–Die–Das" && <GenderTrainer progress={progress} onAnswer={onAnswer} onToggle={onToggle} />}
        {mode === "Plural" && <PluralTrainer onAnswer={onAnswer} />}
        {mode === "Sortieren" && <GenderSorter />}
        {mode === "Roulette" && <ArticleRoulette />}
      </div>
    </section>
  );
}

function GenderTrainer({ progress, onAnswer, onToggle }: GenderLabProps) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<Gender | "">("");
  const item = nounData[index];
  const locked = choice !== "";
  const correct = choice === item.article;

  const choose = (article: Gender) => {
    if (locked) return;
    setChoice(article);
    onAnswer("gender", article === item.article);
  };

  const next = () => {
    setIndex(randomDifferentIndex(index, nounData.length));
    setChoice("");
  };

  return (
    <PracticeFrame eyebrow="03 · Der–Die–Das Trainer" title={`___ ${item.noun}`} subtitle={`${item.translation} · ${item.category} · ${item.level}`}>
      <div className="grid gap-3 sm:grid-cols-3">
        {(["der", "die", "das"] as const).map((article) => (
          <button
            className={`border-2 border-[#17130c] p-5 text-3xl font-black transition hover:-translate-y-1 ${
              locked && article === item.article ? "bg-[#79dc87]" : locked && article === choice ? "bg-[#ff9a91]" : "bg-white hover:bg-[#ffe130]"
            }`}
            disabled={locked}
            key={article}
            onClick={() => choose(article)}
            type="button"
          >
            {article}
          </button>
        ))}
      </div>
      {locked && (
        <div aria-live="polite" className={`mt-4 border-2 border-[#17130c] p-4 ${correct ? "bg-[#b8efbf]" : "bg-[#ffc2bc]"}`}>
          <p className="text-xl font-black">{item.article} {item.noun}</p>
          <p className="mt-1 font-bold">{item.example}</p>
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <ArtikelSpeakButton text={`${item.article} ${item.noun}. ${item.example}`} />
        <SmallButton active={progress.favorites.includes(item.id)} onClick={() => onToggle("favorites", item.id)}>★ Favorit</SmallButton>
        <SmallButton active={progress.mastered.includes(item.id)} onClick={() => onToggle("mastered", item.id)}>✓ Kann ich</SmallButton>
        {locked && <PrimaryButton onClick={next}>Nächstes Wort</PrimaryButton>}
      </div>
    </PracticeFrame>
  );
}

function PluralTrainer({ onAnswer }: Pick<GenderLabProps, "onAnswer">) {
  const [index, setIndex] = useState(10);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [attemptRecorded, setAttemptRecorded] = useState(false);
  const item = nounData[index];
  const correct = answer.trim().toLocaleLowerCase("de") === item.plural.toLocaleLowerCase("de");

  const check = () => {
    if (!attemptRecorded) {
      onAnswer("plural", correct);
      setAttemptRecorded(true);
    }
    setChecked(true);
  };

  const next = () => {
    setIndex(randomDifferentIndex(index, nounData.length));
    setAnswer("");
    setChecked(false);
    setAttemptRecorded(false);
  };

  return (
    <PracticeFrame eyebrow="04 · Plural-Trainer" title={`${item.article} ${item.noun} → die …?`} subtitle="Schreibe nur die Pluralform.">
      <input
        className="w-full border-2 border-[#17130c] bg-white p-4 text-xl font-black outline-none focus:shadow-[4px_4px_0_#17130c]"
        onChange={(event) => { setAnswer(event.target.value); setChecked(false); }}
        onKeyDown={(event) => { if (event.key === "Enter") check(); }}
        placeholder="Plural eingeben"
        value={answer}
      />
      {checked && <Feedback correct={correct}>{correct ? `Richtig: die ${item.plural}` : `Lösung: die ${item.plural}`}</Feedback>}
      <div className="mt-4 flex gap-2">
        <PrimaryButton onClick={check}>Prüfen</PrimaryButton>
        <SmallButton onClick={next}>Weiter</SmallButton>
      </div>
    </PracticeFrame>
  );
}

function GenderSorter() {
  const words = nounData.slice(0, 9);
  const [assignments, setAssignments] = useState<Record<string, Gender>>({});
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const assign = (id: string, article: Gender) => {
    setAssignments((current) => ({ ...current, [id]: article }));
    setChecked(false);
  };

  const correctCount = words.filter((word) => assignments[word.id] === word.article).length;

  return (
    <PracticeFrame eyebrow="05 · Genus sortieren" title="Ziehe oder klicke die Wörter" subtitle="Wähle zuerst ein Wort und ordne es dann einer Artikel-Spalte zu.">
      <div className="flex flex-wrap gap-2">
        {words.map((word) => (
          <button
            className={`border-2 border-[#17130c] px-3 py-2 font-black ${draggedId === word.id ? "bg-[#ffe130]" : "bg-white"} ${assignments[word.id] ? "opacity-40" : ""}`}
            draggable
            key={word.id}
            onClick={() => setDraggedId(word.id)}
            onDragStart={() => setDraggedId(word.id)}
            type="button"
          >
            {word.noun}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {(["der", "die", "das"] as const).map((article) => (
          <button
            className="min-h-36 border-2 border-dashed border-[#17130c] bg-[#cfeeff] p-4 text-left"
            key={article}
            onClick={() => { if (draggedId) assign(draggedId, article); }}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => { if (draggedId) assign(draggedId, article); }}
            type="button"
          >
            <span className="text-2xl font-black">{article}</span>
            <span className="mt-3 block text-sm font-bold">
              {words.filter((word) => assignments[word.id] === article).map((word) => word.noun).join(" · ") || "Hier ablegen"}
            </span>
          </button>
        ))}
      </div>
      {checked && <Feedback correct={correctCount === words.length}>{correctCount} von {words.length} richtig sortiert.</Feedback>}
      <div className="mt-4 flex gap-2">
        <PrimaryButton onClick={() => setChecked(true)}>Auswerten</PrimaryButton>
        <SmallButton onClick={() => { setAssignments({}); setChecked(false); }}>Neu starten</SmallButton>
      </div>
    </PracticeFrame>
  );
}

function ArticleRoulette() {
  const [level, setLevel] = useState<ArtikelLevel | "Alle">("Alle");
  const [category, setCategory] = useState("Alle");
  const filtered = nounData.filter((noun) =>
    (level === "Alle" || noun.level === level) &&
    (category === "Alle" || noun.category === category),
  );
  const [selectedId, setSelectedId] = useState(nounData[0].id);
  const selected = filtered.find((noun) => noun.id === selectedId) ?? filtered[0];
  const categories = ["Alle", ...new Set(nounData.map((noun) => noun.category))];

  const spin = () => {
    if (!filtered.length) return;
    setSelectedId(filtered[Math.floor(Math.random() * filtered.length)].id);
  };

  return (
    <PracticeFrame eyebrow="06 · Artikel-Roulette" title="Lass den Zufall wählen" subtitle="Filtere deinen Wortschatz und ziehe eine spontane Lernkarte.">
      <div className="grid gap-3 sm:grid-cols-2">
        <select className="border-2 border-[#17130c] bg-white p-3 font-black" onChange={(event) => setLevel(event.target.value as ArtikelLevel | "Alle")} value={level}>
          {["Alle", "A1", "A2", "B1"].map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="border-2 border-[#17130c] bg-white p-3 font-black" onChange={(event) => setCategory(event.target.value)} value={category}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      {selected && (
        <div className="mt-5 border-2 border-[#17130c] bg-[#ffe130] p-6 text-center shadow-[5px_5px_0_#17130c]">
          <p className="text-4xl font-black">{selected.article} {selected.noun}</p>
          <p className="mt-2 font-bold">Plural: die {selected.plural} · {selected.translation}</p>
        </div>
      )}
      <div className="mt-5"><PrimaryButton onClick={spin}>Roulette drehen</PrimaryButton></div>
    </PracticeFrame>
  );
}

function PracticeFrame({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6d1a]">{eyebrow}</p><h3 className="mt-2 text-3xl font-black">{title}</h3><p className="mb-6 mt-2 font-semibold text-[#654d31]">{subtitle}</p>{children}</div>;
}

function Feedback({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  return <p aria-live="polite" className={`mt-4 border-2 border-[#17130c] p-4 font-black ${correct ? "bg-[#b8efbf]" : "bg-[#ffc2bc]"}`}>{children}</p>;
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 font-black text-white shadow-[3px_3px_0_#17130c] hover:-translate-y-0.5" onClick={onClick} type="button">{children}</button>;
}

function SmallButton({ children, onClick, active = false }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return <button className={`border-2 border-[#17130c] px-3 py-2 text-sm font-black ${active ? "bg-[#ffe130]" : "bg-white hover:bg-[#cfeeff]"}`} onClick={onClick} type="button">{children}</button>;
}
