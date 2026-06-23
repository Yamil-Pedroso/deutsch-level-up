import { useState } from "react";
import assets from "../../assets";
import Tooltip from "../common/Tooltip";
import {
  importantVerbPraepositionGroups,
  praepositionenData,
  verbPraepositionenData,
} from "./data/prapositionen-data";
import PrapositionenQuiz from "./PrapositionenQuiz";
import PrapositionenFlashcards from "./PrapositionenFlashcards";
import type {
  PraepositionKasus,
  VerbPraepositionKasus,
} from "./types/prapositionen-types";

const kasusOrder: PraepositionKasus[] = [
  "Akkusativ",
  "Dativ",
  "Genitiv",
  "Akkusativ / Dativ",
];

const kasusHint: Record<PraepositionKasus, string> = {
  Akkusativ: "Movimiento, dirección o destino directo.",
  Dativ: "Posición, procedencia o relación estable.",
  Genitiv: "Relaciones más formales: causa, lugar o contraste.",
  "Akkusativ / Dativ": "Wechselt je nach Bewegung oder Position.",
};

const verbKasusOrder: VerbPraepositionKasus[] = ["Akk", "Dat", "Gen"];

const verbKasusTitle: Record<VerbPraepositionKasus, string> = {
  Akk: "Verben mit Präposition + Akkusativ",
  Dat: "Verben mit Präposition + Dativ",
  Gen: "Verben mit Genitiv",
};

const verbKasusNote: Partial<Record<VerbPraepositionKasus, string>> = {
  Gen: "Diese Formen sind weniger häufig und erscheinen oft in formeller Sprache.",
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

const normalizeSearch = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const getPraepositionLabel = (praeposition: string) =>
  praepositionTranslation[praeposition]
    ? `${praeposition} (${praepositionTranslation[praeposition]})`
    : praeposition;

const practiceLinks = [
  {
    alt: "Quiz",
    image: assets.quiz,
    label: "Zum Quiz springen",
    targetId: "praepositionen-quiz",
  },
  {
    alt: "Flashcards",
    image: assets.flashCards,
    label: "Zu den Flashcards springen",
    targetId: "praepositionen-flashcards",
  },
];

const Prapositionen = () => {
  const [activeKasus, setActiveKasus] = useState<PraepositionKasus>("Akkusativ");
  const [verbSearch, setVerbSearch] = useState("");
  const activeItems = praepositionenData.filter(
    (item) => item.kasus === activeKasus
  );
  const normalizedVerbSearch = normalizeSearch(verbSearch);
  const verbSearchResults = normalizedVerbSearch
    ? verbPraepositionenData.filter((item) => {
        const searchableValue = normalizeSearch(
          [
            item.verb,
            item.praeposition,
            praepositionTranslation[item.praeposition] ?? "",
            item.kasus,
            item.beispiel,
          ].join(" ")
        );

        return searchableValue.includes(normalizedVerbSearch);
      })
    : [];
  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.22em]">
                Deutsch Studio / Präpositionen
              </p>
              <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Präpositionen nach Kasus geordnet.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
                Wähle einen Kasus und lerne gezielt die passenden
                Präpositionen.
              </p>
            </div>

            <div className="flex gap-3 lg:justify-end">
              {practiceLinks.map((link) => (
                <Tooltip key={link.targetId} label={link.label}>
                  <button
                    className="relative h-24 w-24 overflow-hidden border-2 border-[#17130c] bg-[#fffaf0] shadow-[4px_4px_0_#17130c] transition hover:-translate-y-1 hover:rotate-[-2deg] hover:bg-[#ff7b2f] hover:shadow-[7px_7px_0_#17130c] focus:outline-none focus:ring-4 focus:ring-[#ff7b2f]/40"
                    onClick={() => scrollToSection(link.targetId)}
                    type="button"
                  >
                    <img
                      alt={link.alt}
                      className="h-full w-full object-cover transition duration-300 hover:scale-110"
                      src={link.image}
                    />
                    <span className="absolute bottom-1 left-1 right-1 border border-[#17130c] bg-[#ffe130] px-1 py-0.5 text-[10px] font-black uppercase tracking-[0.08em]">
                      {link.alt}
                    </span>
                  </button>
                </Tooltip>
              ))}
            </div>
          </div>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[260px_minmax(0,1fr)_320px]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Kasus
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {kasusOrder.map((kasus) => {
                const count = praepositionenData.filter(
                  (item) => item.kasus === kasus
                ).length;
                const isActive = kasus === activeKasus;

                return (
                  <button
                    className={`flex max-w-[calc(100vw-4rem)] shrink-0 items-center justify-between gap-4 border border-[#17130c] px-3 py-3 text-left text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                      isActive ? "bg-[#ff7b2f] text-white" : "bg-[#fffaf0]"
                    }`}
                    key={kasus}
                    onClick={() => setActiveKasus(kasus)}
                    type="button"
                  >
                    <span className="min-w-0 truncate">{kasus}</span>
                    <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0 border-b-2 border-[#17130c] p-4 sm:p-7 lg:border-b-0 lg:border-r-2">
            <div className="mb-5 border-b-2 border-[#17130c] pb-4">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Aktive Tafel
              </p>
              <h3 className="mt-1 break-words text-2xl font-black sm:text-3xl">
                {activeKasus}
              </h3>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {activeItems.map((item) => (
                <article
                  className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] transition hover:-translate-y-0.5 hover:bg-[#ffe130] sm:shadow-[4px_4px_0_#17130c]"
                  key={item.praeposition}
                >
                  <span className="border border-[#17130c] bg-[#fff3d8] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em]">
                    Präposition
                  </span>
                  <h4 className="mt-3 break-words text-2xl font-black sm:text-3xl">
                    {item.praeposition}
                  </h4>
                  <p className="mt-3 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-bold text-[#5f4d35]">
                    {item.translation}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <aside className="bg-[#fffaf0] p-4 sm:p-7 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Merkhilfe
            </p>
            <div className="mt-4 min-w-0 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[3px_3px_0_#17130c] sm:p-5 sm:shadow-[5px_5px_0_#17130c]">
              <h3 className="break-words text-2xl font-black sm:text-4xl">
                {activeKasus}
              </h3>
              <p className="mt-4 border-t border-white/60 pt-4 text-base font-bold leading-relaxed">
                {kasusHint[activeKasus]}
              </p>
            </div>
          </aside>
        </div>

        <section className="border-t-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7">
          <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Verben mit Präposition
              </p>
              <h3 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
                Verbos con preposición ordenados por caso.
              </h3>
              <p className="mt-3 text-sm font-bold leading-relaxed text-[#5f4d35] sm:text-base">
                Algunas combinaciones cambian de significado según la
                preposición. Memoriza el verbo junto con su preposición y caso.
              </p>
            </div>

            <label className="block border-2 border-[#17130c] bg-[#ffe130] p-4 shadow-[3px_3px_0_#17130c]">
              <span className="text-xs font-black uppercase tracking-[0.16em]">
                Buscar verbo o palabra
              </span>
              <input
                className="mt-3 w-full border-2 border-[#17130c] bg-[#fffaf0] px-3 py-3 text-sm font-bold outline-none transition placeholder:text-[#7b674a] focus:bg-white focus:shadow-[3px_3px_0_#17130c]"
                onChange={(event) => setVerbSearch(event.target.value)}
                placeholder="Ej: denken, in, miedo, Dativ..."
                type="search"
                value={verbSearch}
              />
            </label>
          </div>

          {normalizedVerbSearch ? (
            <div className="border-2 border-[#17130c] bg-[#f8edd6] p-4 shadow-[4px_4px_0_#17130c] sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17130c] pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em]">
                    Ergebnis
                  </p>
                  <h4 className="mt-1 text-2xl font-black">
                    {verbSearchResults.length
                      ? `${verbSearchResults.length} Treffer`
                      : "No existe ese verbo o palabra"}
                  </h4>
                </div>
                <button
                  className="border border-[#17130c] bg-[#fffaf0] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-[#ffe130]"
                  onClick={() => setVerbSearch("")}
                  type="button"
                >
                  Limpiar
                </button>
              </div>

              {verbSearchResults.length ? (
                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  {verbSearchResults.map((item) => (
                    <article
                      className="border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c]"
                      key={`${item.verb}-${item.praeposition}-${item.beispiel}`}
                    >
                      <div className="flex flex-wrap gap-2">
                        <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-xs font-black text-white">
                          {item.kasus}
                        </span>
                        <span className="border border-[#17130c] bg-[#ffe130] px-2 py-1 text-xs font-black">
                          {getPraepositionLabel(item.praeposition)}
                        </span>
                      </div>
                      <h4 className="mt-3 text-2xl font-black">
                        {item.verb}
                      </h4>
                      <p className="mt-3 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-bold leading-relaxed text-[#5f4d35]">
                        {item.beispiel}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 border-2 border-[#17130c] bg-[#fffaf0] p-5">
                  <p className="text-base font-black">
                    No encontré “{verbSearch.trim()}” en la data.
                  </p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-[#5f4d35]">
                    Puedes crear una nueva entrada con verbo, preposición,
                    caso y ejemplo.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="grid gap-5 xl:grid-cols-3">
                {verbKasusOrder.map((kasus) => {
                  const rows = verbPraepositionenData.filter(
                    (item) => item.kasus === kasus
                  );

                  return (
                    <article
                      className="min-w-0 border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c]"
                      key={kasus}
                    >
                      <div className="border-b-2 border-[#17130c] bg-[#ffe130] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-xl font-black leading-tight">
                            {verbKasusTitle[kasus]}
                          </h4>
                          <span className="shrink-0 border border-[#17130c] bg-[#fffaf0] px-2 py-1 text-xs font-black">
                            {rows.length}
                          </span>
                        </div>
                        {verbKasusNote[kasus] ? (
                          <p className="mt-3 text-sm font-bold text-[#5f4d35]">
                            {verbKasusNote[kasus]}
                          </p>
                        ) : null}
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-b-2 border-[#17130c] bg-[#17130c] text-white">
                              <th className="px-3 py-3 font-black">Verb</th>
                              <th className="px-3 py-3 font-black">Präp.</th>
                              <th className="px-3 py-3 font-black">Kasus</th>
                              <th className="px-3 py-3 font-black">
                                Beispiel
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((item) => (
                              <tr
                                className="border-b border-[#17130c]/25 last:border-b-0"
                                key={`${item.verb}-${item.praeposition}-${item.beispiel}`}
                              >
                                <td className="px-3 py-3 font-black">
                                  {item.verb}
                                </td>
                                <td className="px-3 py-3 font-bold">
                                  {getPraepositionLabel(item.praeposition)}
                                </td>
                                <td className="px-3 py-3">
                                  <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-xs font-black text-white">
                                    {item.kasus}
                                  </span>
                                </td>
                                <td className="px-3 py-3 font-semibold text-[#5f4d35]">
                                  {item.beispiel}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-7 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[4px_4px_0_#17130c] sm:p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Wichtig zum Auswendiglernen
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {importantVerbPraepositionGroups.map((group) => (
                    <article
                      className="border-2 border-white/70 bg-[#17130c] p-4"
                      key={group.label}
                    >
                      <h4 className="text-lg font-black">{group.label}</h4>
                      <ul className="mt-3 space-y-2 text-sm font-bold">
                        {group.items.map((item) => (
                          <li
                            className="border-t border-white/25 pt-2 first:border-t-0 first:pt-0"
                            key={item}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <PrapositionenQuiz />

        <PrapositionenFlashcards />
      </section>
    </main>
  );
};

export default Prapositionen;
