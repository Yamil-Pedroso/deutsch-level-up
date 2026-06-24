import { ArtikelDictionaryProgress } from "./ArtikelDictionaryProgress";
import { ArtikelGenderLab } from "./ArtikelGenderLab";
import { ArtikelGrammarLab } from "./ArtikelGrammarLab";
import { ArtikelReference } from "./ArtikelReference";
import { useArtikelProgress } from "./hooks/useArtikelProgress";

const navigation = [
  ["referenz", "Referenz"],
  ["genus", "Genus & Plural"],
  ["grammatik", "Kasus & Training"],
  ["fortschritt", "Wörterbuch & Fortschritt"],
] as const;

function Artikel() {
  const {
    progress,
    recordAnswer,
    toggleNoun,
    addPersonalNoun,
    removePersonalNoun,
    saveSpeedScore,
    resetProgress,
  } = useArtikelProgress();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#eadcc3] px-4 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:shadow-[10px_10px_0_#17130c]">
        <header className="sticky top-0 z-30 border-b-2 border-[#17130c] bg-[#ffe130] p-3 shadow-[0_5px_0_#17130c] sm:px-5 sm:py-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs">Deutsch Studio / Artikel-Labor</p>
              <h1 className="mt-1 max-w-4xl text-2xl font-black leading-tight sm:text-3xl">
                Der, die, das – und plötzlich ergibt alles Sinn.
              </h1>
              <p className="mt-1 max-w-3xl text-sm font-semibold leading-snug text-[#4a3922]">
                Lerne Artikel immer mit Nomen, Plural, Kasus und echtem Satz. Vom schnellen Wiederholen bis zur genauen Deklination.
              </p>
            </div>
            <div className="grid grid-cols-3 border-2 border-[#17130c] bg-white shadow-[4px_4px_0_#17130c]">
              {["der", "die", "das"].map((article) => <span className="border-r-2 border-[#17130c] px-3 py-2 text-lg font-black last:border-r-0" key={article}>{article}</span>)}
            </div>
          </div>
          <nav aria-label="Bereiche des Artikel-Labors" className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {navigation.map(([id, label], index) => (
              <button
                className="shrink-0 border-2 border-[#17130c] bg-white px-3 py-1.5 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#cfeeff]"
                key={id}
                onClick={() => scrollTo(id)}
                type="button"
              >
                {String(index + 1).padStart(2, "0")} · {label}
              </button>
            ))}
          </nav>
        </header>

        <ArtikelReference />
        <ArtikelGenderLab progress={progress} onAnswer={recordAnswer} onToggle={toggleNoun} />
        <ArtikelGrammarLab bestSpeedScore={progress.bestSpeedScore} onAnswer={recordAnswer} onSpeedScore={saveSpeedScore} />
        <ArtikelDictionaryProgress
          progress={progress}
          onAdd={addPersonalNoun}
          onRemove={removePersonalNoun}
          onReset={resetProgress}
          onToggle={toggleNoun}
        />
      </section>
    </main>
  );
}

export default Artikel;
