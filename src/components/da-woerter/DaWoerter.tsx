import {
  daWoerterData,
  genitivDaWoerter,
  genitivExamples,
  goldenRulePairs,
  importantDaWoerter,
} from "./data/da-woerter-data";

const DaWoerter = () => {
  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Pronominaladverbien
          </p>
          <p className="mt-3 max-w-3xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Para cosas e ideas: combina la pregunta con wo- y la respuesta con
            da-. Así evitas repetir sustantivos y suenas más natural.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="border border-[#17130c] bg-[#fffaf0] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
              wo + Präposition
            </span>
            <span className="border border-[#17130c] bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
              da + Präposition
            </span>
            <span className="border border-[#17130c] bg-[#fffaf0] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
              {daWoerterData.length} Formen
            </span>
          </div>
          <div className="mt-4 border-2 border-[#17130c] bg-[#fffaf0] px-4 py-3 text-sm font-bold shadow-[3px_3px_0_#17130c]">
            <span className="font-black">Wichtig:</span> wo(r) + Präposition
            fragt nach Sachen oder Ideen. <span className="font-black">Warum?</span>{" "}
            fragt dagegen nach einem Grund und ist kein Pronominaladverb.
          </div>
        </header>

        <section className="border-b-2 border-[#17130c] p-4 sm:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Liste mit Kasus
              </p>
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Pronominaladverbien
              </h2>
            </div>
            <span className="border border-[#17130c] bg-[#ffe130] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
              Frage und Antwort
            </span>
          </div>

          <div className="overflow-x-auto border-2 border-[#17130c] bg-[#fffaf0] shadow-[4px_4px_0_#17130c]">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#17130c] bg-[#17130c] text-white">
                  <th className="px-3 py-3 font-black">Präposition</th>
                  <th className="px-3 py-3 font-black">Kasus</th>
                  <th className="px-3 py-3 font-black">Frage wo-</th>
                  <th className="px-3 py-3 font-black">Antwort da-</th>
                  <th className="px-3 py-3 font-black">Bedeutung</th>
                  <th className="px-3 py-3 font-black">Beispiel</th>
                </tr>
              </thead>
              <tbody>
                {daWoerterData.map((item) => (
                  <tr
                    className="border-b border-[#17130c]/25 last:border-b-0"
                    key={`${item.praeposition}-${item.frage}`}
                  >
                    <td className="px-3 py-3 text-lg font-black">
                      {item.praeposition}
                    </td>
                    <td className="px-3 py-3">
                      <span className="border border-[#17130c] bg-[#ffe130] px-2 py-1 text-xs font-black">
                        {item.kasus}
                      </span>
                    </td>
                    <td className="px-3 py-3 font-black">{item.frage}</td>
                    <td className="px-3 py-3 font-black text-[#b34515]">
                      {item.antwort}
                    </td>
                    <td className="px-3 py-3 font-bold text-[#5f4d35]">
                      {item.translation}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#5f4d35]">
                      {item.beispiel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7">
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              B1 Fokus
            </p>
            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Los más importantes para B1
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {importantDaWoerter.map((item) => (
              <article
                className="border-2 border-[#17130c] bg-[#f8edd6] p-4 shadow-[3px_3px_0_#17130c]"
                key={item.label}
              >
                <h3 className="text-lg font-black">{item.label}</h3>
                <p className="mt-3 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-black">
                  {item.frage}
                </p>
                <p className="mt-2 text-sm font-bold text-[#5f4d35]">
                  {item.antwort}
                </p>
                <p className="mt-3 border border-[#17130c] bg-[#fffaf0] px-3 py-2 text-sm font-bold text-[#4a3922]">
                  {item.translation}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-b-2 border-[#17130c] lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="border-b-2 border-[#17130c] p-4 sm:p-7 lg:border-b-0 lg:border-r-2">
            <div className="mb-5">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Genitiv
              </p>
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Casos especiales
              </h2>
              <p className="mt-3 max-w-2xl text-sm font-bold leading-relaxed text-[#5f4d35]">
                Aunque no forman verdaderos Pronominaladverbien con wo- y da-,
                estas expresiones son muy importantes.
              </p>
            </div>

            <div className="overflow-x-auto border-2 border-[#17130c] bg-[#fffaf0]">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[#17130c] bg-[#17130c] text-white">
                    <th className="px-3 py-3 font-black">Präposition</th>
                    <th className="px-3 py-3 font-black">Kasus</th>
                    <th className="px-3 py-3 font-black">Frage</th>
                    <th className="px-3 py-3 font-black">Antwort</th>
                  </tr>
                </thead>
                <tbody>
                  {genitivDaWoerter.map((item) => (
                    <tr
                      className="border-b border-[#17130c]/25 last:border-b-0"
                      key={item.praeposition}
                    >
                      <td className="px-3 py-3 font-black">
                        {item.praeposition}
                      </td>
                      <td className="px-3 py-3 font-bold">{item.kasus}</td>
                      <td className="px-3 py-3 font-bold">{item.frage}</td>
                      <td className="px-3 py-3 font-black text-[#b34515]">
                        {item.antwort}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="bg-[#ffe45e] p-4 sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Beispiele
            </p>
            <div className="mt-4 space-y-3">
              {genitivExamples.map((item) => (
                <article
                  className="border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c]"
                  key={item.frage}
                >
                  <p className="text-sm font-black">{item.frage}</p>
                  <p className="mt-2 text-sm font-bold text-[#5f4d35]">
                    {item.antwort}
                  </p>
                  <p className="mt-3 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-bold">
                    {item.translation}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="bg-[#ff7b2f] p-4 text-white sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            Regla de oro
          </p>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            Para cosas e ideas
          </h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {goldenRulePairs.map((item) => (
              <div
                className="border-2 border-white/70 bg-[#17130c] px-3 py-3 text-center text-sm font-black"
                key={item.frage}
              >
                {item.frage} ↔ {item.antwort}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default DaWoerter;
