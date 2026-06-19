import { useState } from "react";
import { daWoerterData } from "./data/da-woerter-data";

const DaWoerter = () => {
  const [selectedWort, setSelectedWort] = useState(daWoerterData[0]);

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Da-Wörter
          </p>
          <div className="mt-3 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div className="min-w-0">
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Da-Wörter für Dinge und Ideen.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
                Lerne, wie `da + Präposition` Wiederholungen vermeidet und
                Sätze natürlicher macht.
              </p>
            </div>
            <div className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]">
              <span className="text-xs font-black uppercase tracking-[0.16em]">
                Formel
              </span>
              <p className="mt-2 text-2xl font-black">da + Präposition</p>
            </div>
          </div>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0 border-b-2 border-[#17130c] p-4 sm:p-7 lg:border-b-0 lg:border-r-2">
            <div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Wortliste
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  Wähle eine Partikel
                </h3>
              </div>
              <span className="border border-[#17130c] bg-[#ff7b2f] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                {daWoerterData.length} Karten
              </span>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {daWoerterData.map((item) => {
                const isSelected = item.wort === selectedWort.wort;

                return (
                  <button
                    className={`min-w-0 border-2 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#17130c] ${
                      isSelected
                        ? "border-[#17130c] bg-[#ffe130] shadow-[3px_3px_0_#17130c] sm:shadow-[5px_5px_0_#17130c]"
                        : "border-[#17130c]/80 bg-[#fffaf0]"
                    }`}
                    key={item.wort}
                    onClick={() => setSelectedWort(item)}
                    type="button"
                  >
                    <span className="border border-[#17130c] bg-[#fff3d8] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em]">
                      da-Wort
                    </span>
                    <h4 className="mt-3 break-words text-2xl font-black">{item.wort}</h4>
                    <p className="mt-2 min-w-0 truncate text-sm font-bold text-[#6f583b]">
                      {item.literal}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="bg-[#fffaf0] p-4 sm:p-7 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Details
            </p>
            <div className="mt-4 min-w-0 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[3px_3px_0_#17130c] sm:p-5 sm:shadow-[5px_5px_0_#17130c]">
              <span className="inline-block max-w-full break-words border border-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                {selectedWort.literal}
              </span>
              <h3 className="mt-5 break-words text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                {selectedWort.wort}
              </h3>
              <p className="mt-4 border-t border-white/60 pt-4 text-base font-bold leading-relaxed">
                {selectedWort.bedeutung}
              </p>
            </div>

            <div className="mt-5 min-w-0 border-2 border-[#17130c] bg-[#ffe45e] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Merke dir
              </p>
              <p className="mt-3 text-sm font-bold leading-relaxed text-[#4a3922]">
                Benutze es, wenn das Thema im Gespräch schon klar ist.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default DaWoerter;
