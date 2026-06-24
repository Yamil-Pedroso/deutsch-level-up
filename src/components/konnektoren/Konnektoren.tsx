import { KonnektorenLibrary } from "./KonnektorenLibrary";
import { KonnektorenProgress } from "./KonnektorenProgress";
import { KonnektorenTrainer } from "./KonnektorenTrainer";
import { SatzbauVisualizer } from "./SatzbauVisualizer";
import { useKonnektorenProgress } from "./hooks/useKonnektorenProgress";

const navigation = [
  ["bibliothek", "Bibliothek"],
  ["satzbau", "Satzbau"],
  ["training", "Training"],
  ["fortschritt", "Fortschritt"],
] as const;

function Konnektoren() {
  const {
    progress,
    toggleListItem,
    recordQuizAnswer,
    completeActivity,
    resetProgress,
  } = useKonnektorenProgress();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="mx-auto w-full max-w-[1600px] overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_7px_0_#17130c]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em]">Deutsch Studio / Konnektoren</p>
              <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Verstehen. Verbinden. Sicher sprechen.
              </h1>
              <p className="mt-4 max-w-3xl font-semibold leading-relaxed text-[#4a3922]">
                Entdecke Satzbau, Unterschiede und Bedeutung. Danach trainierst du alles direkt mit interaktiven Aufgaben.
              </p>
            </div>
            <div className="border-2 border-[#17130c] bg-[#ff7b2f] px-5 py-4 text-white shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.15em]">Heute geschafft</p>
              <p className="mt-1 text-3xl font-black">{progress.completedActivities.length}</p>
            </div>
          </div>
          <nav aria-label="Bereiche der Konnektoren-Seite" className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {navigation.map(([id, label], index) => (
              <button
                className="shrink-0 border-2 border-[#17130c] bg-white px-3 py-2 text-sm font-black transition hover:-translate-y-0.5 hover:bg-[#cfeeff]"
                key={id}
                onClick={() => scrollTo(id)}
                type="button"
              >
                {String(index + 1).padStart(2, "0")} · {label}
              </button>
            ))}
          </nav>
        </header>

        <KonnektorenLibrary progress={progress} onToggle={toggleListItem} />
        <SatzbauVisualizer />
        <KonnektorenTrainer onComplete={completeActivity} onQuizAnswer={recordQuizAnswer} />
        <KonnektorenProgress progress={progress} onReset={resetProgress} />
      </section>
    </main>
  );
}

export default Konnektoren;
