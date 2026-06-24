import { useState } from "react";

const patterns = [
  {
    id: "nebensatz",
    label: "Nebensatz",
    connectors: "weil · obwohl · wenn · damit",
    blocks: [
      ["Ich bleibe zu Hause,", "Hauptsatz", "#fffaf0"],
      ["weil", "Konnektor", "#ffe130"],
      ["ich müde", "Subjekt + Inhalt", "#9dd9ff"],
      ["bin.", "Verb am Ende", "#ff7b2f"],
    ],
  },
  {
    id: "adverb",
    label: "Position 1",
    connectors: "deshalb · trotzdem · außerdem",
    blocks: [
      ["Ich bin müde.", "Grund", "#fffaf0"],
      ["Deshalb", "Konnektor", "#ffe130"],
      ["bleibe", "Verb auf Position 2", "#ff7b2f"],
      ["ich zu Hause.", "Subjekt + Inhalt", "#9dd9ff"],
    ],
  },
  {
    id: "hauptsatz",
    label: "Hauptsatz",
    connectors: "und · aber · denn",
    blocks: [
      ["Ich bleibe zu Hause,", "Hauptsatz", "#fffaf0"],
      ["denn", "Konnektor", "#ffe130"],
      ["ich", "Subjekt", "#9dd9ff"],
      ["bin müde.", "Verb bleibt Position 2", "#73d673"],
    ],
  },
];

export function SatzbauVisualizer() {
  const [activeId, setActiveId] = useState(patterns[0].id);
  const active = patterns.find((pattern) => pattern.id === activeId) ?? patterns[0];

  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c] bg-[#cfeeff] p-4 sm:p-7" id="satzbau">
      <p className="text-xs font-black uppercase tracking-[0.2em]">02 · Satzbau-Visualizer</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-black">Wo steht das Verb?</h2>
        <div className="flex flex-wrap gap-2">
          {patterns.map((pattern) => (
            <button
              className={`border-2 border-[#17130c] px-3 py-2 text-sm font-black ${
                active.id === pattern.id ? "bg-[#17130c] text-white" : "bg-white"
              }`}
              key={pattern.id}
              onClick={() => setActiveId(pattern.id)}
              type="button"
            >
              {pattern.label}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 font-bold text-[#4a3922]">{active.connectors}</p>
      <div className="mt-5 flex flex-wrap items-stretch gap-2">
        {active.blocks.map(([text, role, color]) => (
          <div
            className="min-w-[150px] flex-1 border-2 border-[#17130c] p-4 shadow-[3px_3px_0_#17130c]"
            key={role}
            style={{ backgroundColor: color }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.14em]">{role}</span>
            <p className="mt-2 text-lg font-black">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
