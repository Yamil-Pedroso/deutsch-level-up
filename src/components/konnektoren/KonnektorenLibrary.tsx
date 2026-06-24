import { useMemo, useState } from "react";
import { konnektorenData } from "./data/konnektoren-data";
import { SpeakButton } from "./SpeakButton";
import type {
  KonnektorCategory,
  KonnektorItem,
  KonnektorenProgress,
  LanguageLevel,
  VerbPosition,
} from "./types/konnektoren-types";

type LibraryProps = {
  progress: KonnektorenProgress;
  onToggle: (list: "favorites" | "mastered" | "review", id: string) => void;
};

type CategoryFilter = KonnektorCategory | "Alle";
type LevelFilter = LanguageLevel | "Alle";
type PositionFilter = VerbPosition | "Alle";

const categories: CategoryFilter[] = [
  "Alle",
  "Addition",
  "Gegensatz",
  "Kausal",
  "Konditional",
  "Konsekutiv",
  "Final",
  "Temporal",
];

export function KonnektorenLibrary({ progress, onToggle }: LibraryProps) {
  const [category, setCategory] = useState<CategoryFilter>("Alle");
  const [level, setLevel] = useState<LevelFilter>("Alle");
  const [position, setPosition] = useState<PositionFilter>("Alle");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(konnektorenData[0].id);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("de");
    return konnektorenData.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        [item.wort, item.literal, item.exampleDe, item.category].some((value) =>
          value.toLocaleLowerCase("de").includes(normalizedQuery),
        );
      return (
        matchesQuery &&
        (category === "Alle" || item.category === category) &&
        (level === "Alle" || item.level === level) &&
        (position === "Alle" || item.verbPosition === position) &&
        (!onlyFavorites || progress.favorites.includes(item.id))
      );
    });
  }, [category, level, onlyFavorites, position, progress.favorites, query]);

  const selected =
    filtered.find((item) => item.id === selectedId) ??
    filtered[0] ??
    konnektorenData.find((item) => item.id === selectedId) ??
    konnektorenData[0];

  const selectItem = (item: KonnektorItem) => setSelectedId(item.id);

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c]" id="bibliothek">
      <div className="border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em]">01 · Bibliothek</p>
            <h2 className="mt-1 text-3xl font-black">Konnektoren finden</h2>
          </div>
          <label className="flex items-center gap-2 text-sm font-black">
            <input
              checked={onlyFavorites}
              className="h-5 w-5 accent-[#ff7b2f]"
              onChange={(event) => setOnlyFavorites(event.target.checked)}
              type="checkbox"
            />
            Nur Favoriten
          </label>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input
            aria-label="Konnektoren suchen"
            className="border-2 border-[#17130c] bg-white px-3 py-3 font-bold outline-none focus:shadow-[3px_3px_0_#17130c]"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Suchen: weil, Grund, obwohl …"
            value={query}
          />
          <FilterSelect label="Funktion" onChange={setCategory} options={categories} value={category} />
          <FilterSelect label="Niveau" onChange={setLevel} options={["Alle", "A1", "A2", "B1", "B2"]} value={level} />
          <FilterSelect
            label="Verbposition"
            onChange={setPosition}
            options={["Alle", "Position 2", "Satzende", "Unverändert"]}
            value={position}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          {filtered.map((item) => {
            const active = item.id === selected.id;
            return (
              <button
                className={`border-2 border-[#17130c] p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#17130c] ${
                  active ? "bg-[#ffe130] shadow-[4px_4px_0_#17130c]" : "bg-white"
                }`}
                key={item.id}
                onClick={() => selectItem(item)}
                type="button"
              >
                <div className="flex justify-between gap-2 text-[11px] font-black uppercase tracking-[0.12em]">
                  <span>{item.category}</span>
                  <span>{item.level}</span>
                </div>
                <h3 className="mt-3 text-xl font-black">{item.wort}</h3>
                <p className="mt-1 text-sm font-bold text-[#745a36]">{item.literal}</p>
                <p className="mt-4 text-xs font-black uppercase text-[#ff6d1a]">{item.verbPosition}</p>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="border-2 border-dashed border-[#17130c] bg-white p-6 font-bold sm:col-span-2 xl:col-span-3">
              Keine Konnektoren gefunden. Ändere die Filter oder die Suche.
            </p>
          )}
        </div>

        <aside className="border-t-2 border-[#17130c] bg-[#ff7b2f] p-5 text-white lg:border-l-2 lg:border-t-0">
          <div className="flex flex-wrap justify-between gap-3">
            <span className="border border-white px-2 py-1 text-xs font-black uppercase">{selected.level} · {selected.category}</span>
            <button
              aria-label={progress.favorites.includes(selected.id) ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
              className="border-2 border-white px-3 py-1 font-black"
              onClick={() => onToggle("favorites", selected.id)}
              type="button"
            >
              {progress.favorites.includes(selected.id) ? "★" : "☆"}
            </button>
          </div>
          <h3 className="mt-5 text-4xl font-black">{selected.wort}</h3>
          <p className="mt-2 text-lg font-bold">{selected.literal}</p>
          <div className="mt-5 border-2 border-white bg-[#17130c] p-4">
            <p className="text-xs font-black uppercase tracking-[0.15em]">Satzbau</p>
            <p className="mt-2 font-bold">{selected.structure}</p>
          </div>
          <p className="mt-5 text-lg font-black leading-relaxed">{selected.exampleDe}</p>
          <p className="mt-2 text-sm font-semibold">{selected.exampleEs}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <SpeakButton text={selected.exampleDe} />
            <button
              className={`border-2 border-[#17130c] px-3 py-2 text-xs font-black uppercase ${
                progress.mastered.includes(selected.id) ? "bg-[#73d673] text-[#17130c]" : "bg-white text-[#17130c]"
              }`}
              onClick={() => onToggle("mastered", selected.id)}
              type="button"
            >
              Kann ich
            </button>
            <button
              className={`border-2 border-[#17130c] px-3 py-2 text-xs font-black uppercase ${
                progress.review.includes(selected.id) ? "bg-[#ffe130] text-[#17130c]" : "bg-white text-[#17130c]"
              }`}
              onClick={() => onToggle("review", selected.id)}
              type="button"
            >
              Wiederholen
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

type FilterSelectProps<T extends string> = {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
};

function FilterSelect<T extends string>({ label, options, value, onChange }: FilterSelectProps<T>) {
  return (
    <label className="flex border-2 border-[#17130c] bg-white">
      <span className="border-r-2 border-[#17130c] bg-[#ffe130] px-3 py-3 text-xs font-black uppercase">{label}</span>
      <select
        className="min-w-0 flex-1 bg-white px-3 font-bold outline-none"
        onChange={(event) => onChange(event.target.value as T)}
        value={value}
      >
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
