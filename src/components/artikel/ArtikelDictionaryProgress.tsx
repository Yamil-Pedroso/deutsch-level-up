import { useMemo, useState } from "react";
import { nounData } from "./data/artikel-data";
import { ArtikelSpeakButton } from "./ArtikelSpeakButton";
import type {
  ArtikelProgress,
  Gender,
  PersonalNoun,
} from "./types/artikel-types";

type DictionaryProgressProps = {
  progress: ArtikelProgress;
  onAdd: (noun: PersonalNoun) => void;
  onRemove: (id: string) => void;
  onToggle: (list: "favorites" | "mastered", id: string) => void;
  onReset: () => void;
};

export function ArtikelDictionaryProgress({
  progress,
  onAdd,
  onRemove,
  onToggle,
  onReset,
}: DictionaryProgressProps) {
  const [query, setQuery] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [form, setForm] = useState({
    noun: "",
    article: "der" as Gender,
    plural: "",
    example: "",
  });

  const visibleNouns = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("de");
    return nounData.filter((noun) => {
      const matches =
        !normalized ||
        [noun.noun, noun.translation, noun.plural].some((value) =>
          value.toLocaleLowerCase("de").includes(normalized),
        );
      return matches && (!onlyFavorites || progress.favorites.includes(noun.id));
    });
  }, [onlyFavorites, progress.favorites, query]);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.noun.trim() || !form.plural.trim()) return;
    onAdd({
      ...form,
      id: `${Date.now()}-${form.noun.trim().toLocaleLowerCase("de")}`,
      noun: form.noun.trim(),
      plural: form.plural.trim(),
      example: form.example.trim(),
    });
    setForm({ noun: "", article: "der", plural: "", example: "" });
  };

  return (
    <section className="scroll-mt-28 bg-[#ffe130]" id="fortschritt">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b-2 border-[#17130c] p-4 sm:p-7 lg:border-b-0 lg:border-r-2">
          <p className="text-xs font-black uppercase tracking-[0.2em]">13 · Persönliches Wörterbuch & Aussprache</p>
          <h2 className="mt-2 text-3xl font-black">Deine schwierigen Wörter</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <input
              className="min-w-0 flex-1 border-2 border-[#17130c] bg-white p-3 font-bold"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Wort oder Plural suchen …"
              value={query}
            />
            <label className="flex items-center gap-2 border-2 border-[#17130c] bg-white px-3 font-black">
              <input checked={onlyFavorites} className="h-5 w-5 accent-[#ff7b2f]" onChange={(event) => setOnlyFavorites(event.target.checked)} type="checkbox" />
              Nur Favoriten
            </label>
          </div>

          <div className="mt-4 grid max-h-96 gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
            {visibleNouns.map((noun) => (
              <article className="border-2 border-[#17130c] bg-white p-4" key={noun.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black">{noun.article} {noun.noun}</h3>
                    <p className="mt-1 text-sm font-bold">die {noun.plural} · {noun.translation}</p>
                  </div>
                  <button aria-label={`${noun.noun} als Favorit markieren`} className="text-2xl" onClick={() => onToggle("favorites", noun.id)} type="button">
                    {progress.favorites.includes(noun.id) ? "★" : "☆"}
                  </button>
                </div>
                <p className="mt-3 text-sm font-semibold">{noun.example}</p>
                <div className="mt-3"><ArtikelSpeakButton text={`${noun.article} ${noun.noun}. Die ${noun.plural}. ${noun.example}`} /></div>
              </article>
            ))}
          </div>

          <form className="mt-6 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[4px_4px_0_#17130c]" onSubmit={submit}>
            <h3 className="text-xl font-black">Eigenes Wort hinzufügen</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-[110px_1fr_1fr]">
              <select className="border-2 border-[#17130c] bg-white p-3 font-black" onChange={(event) => setForm({ ...form, article: event.target.value as Gender })} value={form.article}>
                {(["der", "die", "das"] as const).map((article) => <option key={article}>{article}</option>)}
              </select>
              <input className="border-2 border-[#17130c] bg-white p-3 font-bold" onChange={(event) => setForm({ ...form, noun: event.target.value })} placeholder="Nomen" value={form.noun} />
              <input className="border-2 border-[#17130c] bg-white p-3 font-bold" onChange={(event) => setForm({ ...form, plural: event.target.value })} placeholder="Plural" value={form.plural} />
            </div>
            <input className="mt-3 w-full border-2 border-[#17130c] bg-white p-3 font-bold" onChange={(event) => setForm({ ...form, example: event.target.value })} placeholder="Beispielsatz (optional)" value={form.example} />
            <button className="mt-3 border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 font-black text-white" type="submit">Wort speichern</button>
          </form>

          {progress.personalNouns.length > 0 && (
            <div className="mt-5">
              <h3 className="text-lg font-black">Meine Einträge</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {progress.personalNouns.map((noun) => (
                  <div className="flex items-center gap-3 border-2 border-[#17130c] bg-white px-3 py-2 font-black" key={noun.id}>
                    <span>{noun.article} {noun.noun} → die {noun.plural}</span>
                    <button aria-label={`${noun.noun} entfernen`} className="text-[#c73528]" onClick={() => onRemove(noun.id)} type="button">✕</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="p-4 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em]">14 · Lernfortschritt</p>
          <h2 className="mt-2 text-3xl font-black">Deine Stärken</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <ProgressCard label="Genus" correct={progress.genderCorrect} answered={progress.genderAnswered} />
            <ProgressCard label="Kasus" correct={progress.caseCorrect} answered={progress.caseAnswered} />
            <ProgressCard label="Plural" correct={progress.pluralCorrect} answered={progress.pluralAnswered} />
            <ProgressCard label="Adjektive" correct={progress.adjectiveCorrect} answered={progress.adjectiveAnswered} />
          </div>
          <div className="mt-5 border-2 border-[#17130c] bg-[#17130c] p-5 text-white">
            <p className="text-xs font-black uppercase text-[#ffe130]">60-Sekunden-Rekord</p>
            <p className="mt-2 text-5xl font-black">{progress.bestSpeedScore}</p>
            <p className="mt-1 font-bold">richtige Artikel</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Stat label="Favoriten" value={progress.favorites.length} />
            <Stat label="Beherrscht" value={progress.mastered.length} />
          </div>
          <button className="mt-5 border-2 border-[#17130c] bg-white px-3 py-2 text-xs font-black uppercase hover:bg-[#ffaaa1]" onClick={onReset} type="button">
            Fortschritt löschen
          </button>
        </aside>
      </div>
    </section>
  );
}

function ProgressCard({ label, correct, answered }: { label: string; correct: number; answered: number }) {
  const percentage = answered ? Math.round((correct / answered) * 100) : 0;
  return (
    <div className="border-2 border-[#17130c] bg-white p-4 shadow-[3px_3px_0_#17130c]">
      <div className="flex items-end justify-between gap-2"><p className="font-black">{label}</p><p className="text-2xl font-black text-[#ff6d1a]">{percentage}%</p></div>
      <div className="mt-3 h-3 bg-[#eadcc3]"><div className="h-full bg-[#ff7b2f]" style={{ width: `${percentage}%` }} /></div>
      <p className="mt-2 text-xs font-bold">{correct} von {answered} richtig</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="border-2 border-[#17130c] bg-white p-3"><p className="text-xs font-black uppercase">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></div>;
}
