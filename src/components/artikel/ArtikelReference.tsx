import { useState } from "react";
import {
  artikelTables,
  definiteArticleByCase,
  genderRules,
  nounData,
} from "./data/artikel-data";
import type { ArtikelTable, Gender, Kasus } from "./types/artikel-types";

export function ArtikelReference() {
  const [activeTableTitle, setActiveTableTitle] = useState(artikelTables[0].title);
  const [caseValue, setCaseValue] = useState<Kasus>("Nominativ");
  const [gender, setGender] = useState<Gender>("der");
  const activeTable =
    artikelTables.find((table) => table.title === activeTableTitle) ??
    artikelTables[0];
  const sample = nounData.find((noun) => noun.article === gender) ?? nounData[0];
  const declinedArticle = definiteArticleByCase[caseValue][gender];

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c]" id="referenz">
      <div className="grid lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="border-b-2 border-[#17130c] bg-[#fffaf0] p-4 lg:border-b-0 lg:border-r-2">
          <p className="text-xs font-black uppercase tracking-[0.18em]">01 · Grammatiktafeln</p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col">
            {artikelTables.map((table) => (
              <button
                className={`shrink-0 border-2 border-[#17130c] px-3 py-3 text-left text-sm font-black ${
                  table.title === activeTableTitle ? "bg-[#ff7b2f] text-white" : "bg-white hover:bg-[#ffe130]"
                }`}
                key={table.title}
                onClick={() => setActiveTableTitle(table.title)}
                type="button"
              >
                {table.title}
              </button>
            ))}
          </div>
        </aside>
        <div className="min-w-0 space-y-6 p-4 sm:p-7">
          <ArtikelTableView table={activeTable} />

          <div className="grid gap-4 xl:grid-cols-[1fr_1.2fr]">
            <article className="border-2 border-[#17130c] bg-[#cfeeff] p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.18em]">02 · Kasus-Maschine</p>
              <h3 className="mt-2 text-2xl font-black">Artikel verwandeln</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Select label="Kasus" options={["Nominativ", "Akkusativ", "Dativ", "Genitiv"]} value={caseValue} onChange={(value) => setCaseValue(value as Kasus)} />
                <Select label="Genus" options={["der", "die", "das"]} value={gender} onChange={(value) => setGender(value as Gender)} />
              </div>
              <div className="mt-5 border-2 border-[#17130c] bg-white p-5 text-center">
                <p className="text-sm font-black uppercase">{caseValue}</p>
                <p className="mt-2 text-4xl font-black text-[#ff6d1a]">{declinedArticle} {sample.noun}</p>
              </div>
            </article>

            <article className="border-2 border-[#17130c] bg-[#ffe130] p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.18em]">07 · Genus-Regeln</p>
              <h3 className="mt-2 text-2xl font-black">Endungen als Kompass</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {genderRules.map((rule) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={rule.article}>
                    <p className="text-2xl font-black">{rule.article}</p>
                    <p className="mt-2 text-sm font-black text-[#ff6d1a]">{rule.endings.join(" · ")}</p>
                    <p className="mt-2 text-xs font-semibold">{rule.description}</p>
                    <p className="mt-2 text-xs font-bold">{rule.examples.join(", ")}</p>
                    {rule.exceptions && <p className="mt-2 border-t border-[#17130c] pt-2 text-xs font-bold">Achtung: {rule.exceptions}</p>}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtikelTableView({ table }: { table: ArtikelTable }) {
  return (
    <div className="overflow-hidden border-2 border-[#17130c] bg-[#fffaf0] shadow-[4px_4px_0_#17130c]">
      <h3 className="border-b-2 border-[#17130c] bg-[#ffe45e] px-4 py-3 text-lg font-black">{table.title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead><tr>{table.headers.map((header) => <th className="border-b-2 border-r border-[#17130c] bg-[#ff7b2f] px-3 py-3 text-left font-black text-white last:border-r-0" key={header}>{header}</th>)}</tr></thead>
          <tbody>{table.rows.map((row) => <tr className="odd:bg-[#fffaf0] even:bg-[#fff3d8]" key={row.join("-")}>{row.map((cell, index) => <td className={`border-r border-t border-[#17130c]/50 px-3 py-3 font-bold last:border-r-0 ${index === 0 ? "font-black" : "text-[#5f4d35]"}`} key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <label className="font-black">
      <span className="mb-1 block text-xs uppercase">{label}</span>
      <select className="w-full border-2 border-[#17130c] bg-white p-3" onChange={(event) => onChange(event.target.value)} value={value}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
