import { useState } from "react";
import { artikelTables } from "./data/artikel-data";
import type { ArtikelTable } from "./types/artikel-types";

type ArtikelTableViewProps = {
  table: ArtikelTable;
};

const ArtikelTableView = ({ table }: ArtikelTableViewProps) => (
  <div className="min-w-0 max-w-full overflow-hidden border-2 border-[#17130c] bg-[#fffaf0] shadow-[3px_3px_0_#17130c] sm:shadow-[6px_6px_0_#17130c]">
    <div className="border-b-2 border-[#17130c] bg-[#ffe45e] px-4 py-3">
      <h3 className="text-lg font-black">{table.title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th
                className="border-b-2 border-r border-[#17130c] bg-[#ff7b2f] px-3 py-3 text-left font-black text-white last:border-r-0"
                key={header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr className="odd:bg-[#fffaf0] even:bg-[#fff3d8]" key={row.join("-")}>
              {row.map((cell, index) => (
                <td
                  className={`border-r border-t border-[#17130c]/50 px-3 py-3 font-bold last:border-r-0 ${
                    index === 0 ? "font-black text-[#17130c]" : "text-[#5f4d35]"
                  }`}
                  key={`${cell}-${index}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Artikel = () => {
  const [activeTableTitle, setActiveTableTitle] = useState(artikelTables[0].title);
  const activeTable =
    artikelTables.find((table) => table.title === activeTableTitle) ??
    artikelTables[0];

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Artikel
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
            Artikel und Deklination klar geordnet.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Wechsle zwischen Tabellen und vergleiche Muster nach Kasus, Genus
            und Beispiel.
          </p>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Grammatiktafeln
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {artikelTables.map((table) => {
                const isActive = table.title === activeTableTitle;

                return (
                  <button
                    className={`max-w-[calc(100vw-4rem)] shrink-0 truncate border border-[#17130c] px-3 py-3 text-left text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                      isActive ? "bg-[#ff7b2f] text-white" : "bg-[#fffaf0]"
                    }`}
                    key={table.title}
                    onClick={() => setActiveTableTitle(table.title)}
                    type="button"
                  >
                    {table.title}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0 max-w-full overflow-hidden space-y-6 p-4 sm:p-7">
            <div className="grid min-w-0 gap-4 sm:grid-cols-3">
              {["der", "die", "das"].map((article) => (
                <div
                  className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]"
                  key={article}
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em]">
                    Artikel
                  </p>
                  <p className="mt-2 text-3xl font-black sm:text-4xl">{article}</p>
                </div>
              ))}
            </div>

            <ArtikelTableView table={activeTable} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Artikel;
