import { useState } from "react";
import { grammarChapters } from "./data/grammar-formulierungen-data";
import type {
  GrammarResource,
  GrammarTableResource,
  GrammarTopicGroup,
  GrammarVocabularyResource,
} from "./types/grammar-formulierungen-types";

type GrammarTableCardProps = {
  resource: GrammarTableResource;
};

type VerbTableCardProps = {
  resource: GrammarVocabularyResource;
};

type ResourceCardProps = {
  resource: GrammarResource;
};

type TopicGroupCardProps = {
  group: GrammarTopicGroup;
};

const TopicGroupCard = ({ group }: TopicGroupCardProps) => (
  <article className="min-w-0 max-w-full border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]">
    <div className="mb-3 flex min-w-0 items-center justify-between gap-3 border-b-2 border-[#17130c] pb-3">
      <h4 className="min-w-0 break-words text-lg font-black sm:text-xl">
        {group.title}
      </h4>
      <span className="border border-[#17130c] bg-[#ffe45e] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em]">
        {group.items.length}
      </span>
    </div>
    <ul className="space-y-2">
      {group.items.map((item) => (
        <li className="flex gap-2 text-sm font-bold text-[#4a3922]" key={item}>
          <span className="mt-1 h-2 w-2 shrink-0 border border-[#17130c] bg-[#ff7b2f]" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

const GrammarTableCard = ({ resource }: GrammarTableCardProps) => (
  <article className="min-w-0 max-w-full border-2 border-[#17130c] bg-[#fffaf0] p-3 shadow-[3px_3px_0_#17130c] sm:p-4 sm:shadow-[5px_5px_0_#17130c]">
    <div className="mb-4 flex min-w-0 flex-wrap items-center justify-between gap-3 border-b-2 border-[#17130c] pb-3">
      <h4 className="min-w-0 break-words text-xl font-black sm:text-2xl">
        {resource.title}
      </h4>
      <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white">
        Tabelle
      </span>
    </div>

    <div className="space-y-5">
      {resource.sections.map((section) => (
        <section
          className="min-w-0 max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6]"
          key={section.title}
        >
          <div className="grid gap-2 border-b-2 border-[#17130c] bg-[#ffe45e] p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Thema
              </p>
              <h5 className="mt-1 text-xl font-black">{section.title}</h5>
            </div>
            <p className="text-sm font-bold leading-relaxed text-[#4a3922]">
              {section.prompt}
            </p>
          </div>

          <div className="max-w-full overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm sm:min-w-[760px]">
              <thead>
                <tr>
                  {(section.headers ?? [
                    "Frage",
                    "Präposition + Kasus",
                    "Beispiel",
                  ]).map((header) => (
                    <th
                      className="border-b-2 border-r border-[#17130c] bg-[#ff7b2f] px-3 py-3 text-left font-black text-white last:border-r-0"
                      key={`${section.title}-${header}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => {
                  const cells = row.cells ?? [
                    row.question,
                    row.structure,
                    row.example,
                  ];

                  return (
                  <tr
                    className="odd:bg-[#fffaf0] even:bg-[#fff3d8]"
                    key={`${section.title}-${row.structure}-${row.example}`}
                  >
                    {cells.map((cell, index) => (
                      <td
                        className={`border-r border-t border-[#17130c]/50 px-3 py-3 align-top last:border-r-0 ${
                          index === 0
                            ? "font-black text-[#17130c]"
                            : "font-bold leading-relaxed text-[#4a3922]"
                        }`}
                        key={`${section.title}-${row.structure}-${index}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>

    {resource.note && (
      <p className="mt-4 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-bold text-[#5f4d35]">
        {resource.note}
      </p>
    )}
  </article>
);

const VerbTableCard = ({ resource }: VerbTableCardProps) => (
  <article className="min-w-0 max-w-full border-2 border-[#17130c] bg-[#fffaf0] p-3 shadow-[3px_3px_0_#17130c] sm:p-4 sm:shadow-[5px_5px_0_#17130c]">
    <div className="mb-4 flex min-w-0 flex-wrap items-center justify-between gap-3 border-b-2 border-[#17130c] pb-3">
      <h4 className="min-w-0 break-words text-xl font-black sm:text-2xl">
        {resource.title}
      </h4>
      <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white">
        Verben
      </span>
    </div>

    <div className="max-w-full overflow-x-auto">
      <table className="w-full min-w-[620px] border-collapse text-sm md:min-w-[900px]">
        <thead>
          <tr>
            {[
              "Infinitiv",
              "Präsens",
              "Präteritum",
              "Perfekt",
              "Spanisch",
            ].map((header) => (
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
          {resource.entries.map((entry) => (
            <tr
              className="odd:bg-[#fffaf0] even:bg-[#fff3d8]"
              key={entry.infinitiv}
            >
              <td className="border-r border-t border-[#17130c]/50 px-3 py-3 align-top text-base font-black text-[#17130c]">
                {entry.infinitiv}
              </td>
              <td className="border-r border-t border-[#17130c]/50 px-3 py-3 align-top font-bold text-[#4a3922]">
                {entry.praesens}
              </td>
              <td className="border-r border-t border-[#17130c]/50 px-3 py-3 align-top font-bold text-[#4a3922]">
                {entry.praeteritum}
              </td>
              <td className="border-r border-t border-[#17130c]/50 px-3 py-3 align-top font-bold text-[#4a3922]">
                {entry.perfekt}
              </td>
              <td className="border-t border-[#17130c]/50 px-3 py-3 align-top font-bold text-[#5f4d35]">
                {entry.translation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {resource.note && (
      <p className="mt-4 border-t border-dashed border-[#17130c]/40 pt-3 text-sm font-bold text-[#5f4d35]">
        {resource.note}
      </p>
    )}
  </article>
);

const ResourceCard = ({ resource }: ResourceCardProps) => {
  if (resource.type === "verbs") {
    return <VerbTableCard resource={resource} />;
  }

  return <GrammarTableCard resource={resource} />;
};

const GrammarFormulierungen = () => {
  const [activeChapterId, setActiveChapterId] = useState(grammarChapters[0].id);
  const activeChapter =
    grammarChapters.find((chapter) => chapter.id === activeChapterId) ??
    grammarChapters[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Grammatik
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
            Grammatik und Formulierungen.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Hier sammeln wir Bilder aus dem Übungsbuch: Satzbau, Kasus,
            Präpositionen und wichtige Formulierungen.
          </p>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[minmax(220px,260px)_minmax(0,1fr)]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Kapitel
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {grammarChapters.map((chapter) => {
                const isActive = chapter.id === activeChapterId;

                return (
                  <button
                    className={`flex max-w-[calc(100vw-4rem)] shrink-0 items-center justify-between gap-4 border border-[#17130c] px-3 py-3 text-left text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                      isActive ? "bg-[#ff7b2f] text-white" : "bg-[#fffaf0]"
                    }`}
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    type="button"
                  >
                    <span className="min-w-0 truncate">{chapter.label}</span>
                    <span>{chapter.resources.length}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0 max-w-full overflow-hidden p-4 sm:p-7">
            <div className="mb-6 flex min-w-0 flex-wrap items-end justify-between gap-4 border-b-2 border-[#17130c] pb-5">
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Aktives Kapitel
                </p>
                <h3 className="mt-1 break-words text-2xl font-black sm:text-3xl">
                  {activeChapter.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm font-bold leading-relaxed text-[#5f4d35]">
                  {activeChapter.description}
                </p>
              </div>
              <span className="border border-[#17130c] bg-[#ffe45e] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                {activeChapter.resources.length} Einträge
              </span>
            </div>

            {activeChapter.topicGroups.length > 0 && (
              <div className="mb-6 grid min-w-0 gap-4 xl:grid-cols-2">
                {activeChapter.topicGroups.map((group) => (
                  <TopicGroupCard group={group} key={group.title} />
                ))}
              </div>
            )}

            {activeChapter.resources.length > 0 ? (
              <div className="grid min-w-0 gap-5">
                {activeChapter.resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="border-2 border-dashed border-[#17130c] bg-[#fffaf0] p-8 text-center shadow-[5px_5px_0_#17130c]">
                <p className="text-2xl font-black">Kapitel bereit zum Füllen.</p>
                <p className="mx-auto mt-3 max-w-xl text-sm font-bold leading-relaxed text-[#5f4d35]">
                  Wenn du mir ein Bild und das Kapitel gibst, extrahiere ich den
                  Inhalt und erstelle hier eine passende Tabelle.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default GrammarFormulierungen;
