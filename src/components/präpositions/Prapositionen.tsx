import { useState } from "react";
import { praepositionenData } from "./data/prapositionen-data";
import type { PraepositionKasus } from "./types/prapositionen-types";

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

const Prapositionen = () => {
  const [activeKasus, setActiveKasus] = useState<PraepositionKasus>("Akkusativ");
  const activeItems = praepositionenData.filter(
    (item) => item.kasus === activeKasus
  );

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Präpositionen
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
            Präpositionen nach Kasus geordnet.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Wähle einen Kasus und lerne gezielt die passenden Präpositionen.
          </p>
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
              <h3 className="mt-1 break-words text-2xl font-black sm:text-3xl">{activeKasus}</h3>
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
              <h3 className="break-words text-2xl font-black sm:text-4xl">{activeKasus}</h3>
              <p className="mt-4 border-t border-white/60 pt-4 text-base font-bold leading-relaxed">
                {kasusHint[activeKasus]}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Prapositionen;
