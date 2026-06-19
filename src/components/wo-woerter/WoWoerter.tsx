import { useState } from "react";
import { woWoerterData } from "./data/wo-woerter-data";

const WoWoerter = () => {
  const [selectedWort, setSelectedWort] = useState(woWoerterData[0]);

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Wo-Wörter
          </p>
          <div className="mt-3 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div className="min-w-0">
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Fragen mit wo(r)-Wörtern.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
                Wähle eine Frageform und sieh sofort das passende Beispiel.
              </p>
            </div>
            <div className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]">
              <span className="text-xs font-black uppercase tracking-[0.16em]">
                Frageform
              </span>
              <p className="mt-2 text-2xl font-black">wo(r) + Präp.</p>
            </div>
          </div>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Schnellwahl
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0">
              {woWoerterData.map((item) => (
                <button
                  className={`max-w-[calc(100vw-4rem)] shrink-0 truncate border border-[#17130c] px-3 py-2 text-left text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                    selectedWort.wort === item.wort
                      ? "bg-[#ff7b2f] text-white"
                      : "bg-[#fffaf0]"
                  }`}
                  key={item.wort}
                  onClick={() => setSelectedWort(item)}
                  type="button"
                >
                  {item.wort}
                </button>
              ))}
            </div>
          </aside>

          <section className="min-w-0 max-w-full overflow-hidden p-4 sm:p-7">
            <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[4px_4px_0_#17130c] sm:p-6 sm:shadow-[6px_6px_0_#17130c]">
                <span className="inline-block max-w-full break-words border border-[#17130c] bg-[#ffe45e] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                  {selectedWort.literal}
                </span>
                <h3 className="mt-5 break-words text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                  {selectedWort.wort}
                </h3>
                <p className="mt-5 border-t-2 border-dashed border-[#17130c]/40 pt-5 text-lg font-bold leading-relaxed text-[#4a3922]">
                  {selectedWort.bedeutung}
                </p>
              </div>

              <div className="min-w-0 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[3px_3px_0_#17130c] sm:p-5 sm:shadow-[6px_6px_0_#17130c]">
                <p className="text-xs font-black uppercase tracking-[0.16em]">
                  Mini-Aufgabe
                </p>
                <p className="mt-4 text-2xl font-black leading-tight">
                  Beantworte die Frage mit einem kurzen deutschen Satz.
                </p>
              </div>
            </div>

            <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {woWoerterData.map((item) => (
                <button
                  className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 text-left shadow-[3px_3px_0_#17130c] transition hover:-translate-y-0.5 hover:bg-[#ffe130]"
                  key={`card-${item.wort}`}
                  onClick={() => setSelectedWort(item)}
                  type="button"
                >
                  <h4 className="text-xl font-black">{item.wort}</h4>
                  <p className="mt-2 truncate text-sm font-bold text-[#6f583b]">
                    {item.literal}
                  </p>
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default WoWoerter;
