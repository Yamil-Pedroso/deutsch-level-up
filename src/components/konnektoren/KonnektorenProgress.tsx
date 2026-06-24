import { konnektorenData } from "./data/konnektoren-data";
import type { KonnektorenProgress as Progress } from "./types/konnektoren-types";

type ProgressProps = {
  progress: Progress;
  onReset: () => void;
};

export function KonnektorenProgress({ progress, onReset }: ProgressProps) {
  const mastery = Math.round((progress.mastered.length / konnektorenData.length) * 100);
  const accuracy = progress.quizAnswered
    ? Math.round((progress.quizCorrect / progress.quizAnswered) * 100)
    : 0;

  return (
    <section className="scroll-mt-28 bg-[#ffe130] p-4 sm:p-7" id="fortschritt">
      <p className="text-xs font-black uppercase tracking-[0.2em]">09–10 · Favoriten & Fortschritt</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black">Dein Lernstand</h2>
          <p className="mt-2 font-semibold">Deine Auswahl bleibt auf diesem Gerät gespeichert.</p>
        </div>
        <button className="border-2 border-[#17130c] bg-white px-3 py-2 text-xs font-black uppercase hover:bg-[#ffb0a6]" onClick={onReset} type="button">
          Fortschritt löschen
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Beherrscht" value={`${progress.mastered.length}/${konnektorenData.length}`} />
        <Stat label="Wiederholen" value={String(progress.review.length)} />
        <Stat label="Quiz-Genauigkeit" value={`${accuracy}%`} />
        <Stat label="Übungen erledigt" value={String(progress.completedActivities.length)} />
      </div>
      <div className="mt-5 border-2 border-[#17130c] bg-white p-2">
        <div className="h-5 bg-[#f1e5cc]">
          <div className="h-full bg-[#ff7b2f] transition-all duration-500" style={{ width: `${mastery}%` }} />
        </div>
      </div>
      <p className="mt-2 text-right text-xs font-black uppercase">{mastery}% gemeistert · {progress.favorites.length} Favoriten</p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]">
      <p className="text-xs font-black uppercase tracking-[0.12em]">{label}</p>
      <p className="mt-2 text-3xl font-black text-[#ff6d1a]">{value}</p>
    </div>
  );
}
