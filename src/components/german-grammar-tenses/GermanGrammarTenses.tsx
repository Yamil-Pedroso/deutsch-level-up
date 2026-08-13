import type { ReactNode } from "react";

type Example = {
  de: string;
  es: string;
  en: string;
};

type GrammarSection = {
  id: string;
  number: string;
  title: string;
  explanationEs: string;
  explanationEn: string;
  formula?: string;
  examples: Example[];
  accent: string;
};

const navigation = [
  ["zeitformen", "Zeitformen"],
  ["modi", "Modi"],
  ["passiv", "Passiv"],
  ["modalverben", "Modalverben"],
  ["infinitiv", "Infinitiv"],
  ["partizipien", "Partizipien"],
  ["tabellen", "Tabellen"],
  ["lernweg", "Lernweg"],
  ["uebungen", "Übungen"],
  ["summary", "Summary"],
] as const;

const tenseSections: GrammarSection[] = [
  {
    id: "praesens",
    number: "01",
    title: "Präsens",
    explanationEs: "Se usa para acciones presentes, hábitos y también para futuro cercano cuando hay una indicación temporal.",
    explanationEn: "Used for present actions, habits, and near future when a time marker is clear.",
    formula: "Subjekt + konjugiertes Verb",
    accent: "bg-[#ffe130]",
    examples: [
      { de: "Ich lerne Deutsch.", es: "Aprendo alemán.", en: "I am learning German." },
      { de: "Er arbeitet in Zürich.", es: "Él trabaja en Zúrich.", en: "He works in Zurich." },
      { de: "Morgen fahre ich nach Bern.", es: "Mañana voy a Berna.", en: "Tomorrow I am going to Bern." },
    ],
  },
  {
    id: "perfekt",
    number: "02",
    title: "Perfekt",
    explanationEs: "Es el pasado más común en el alemán hablado.",
    explanationEn: "The most common past tense in spoken German.",
    formula: "haben/sein + Partizip II",
    accent: "bg-[#cfeeff]",
    examples: [
      { de: "Ich habe Deutsch gelernt.", es: "He aprendido alemán.", en: "I have learned German." },
      { de: "Er ist nach Hause gegangen.", es: "Él se fue a casa.", en: "He went home." },
      { de: "Wir haben einen Film gesehen.", es: "Vimos una película.", en: "We watched a movie." },
    ],
  },
  {
    id: "praeteritum",
    number: "03",
    title: "Präteritum",
    explanationEs: "Se usa mucho en textos escritos y con sein, haben y los verbos modales.",
    explanationEn: "Used often in written language and with sein, haben, and modal verbs.",
    formula: "Subjekt + Verb im Präteritum",
    accent: "bg-[#fff3d8]",
    examples: [
      { de: "Ich war krank.", es: "Yo estaba enfermo.", en: "I was sick." },
      { de: "Er hatte keine Zeit.", es: "Él no tenía tiempo.", en: "He had no time." },
      { de: "Wir gingen nach Hause.", es: "Fuimos a casa.", en: "We went home." },
    ],
  },
  {
    id: "plusquamperfekt",
    number: "04",
    title: "Plusquamperfekt",
    explanationEs: "Expresa una acción anterior a otra acción en el pasado.",
    explanationEn: "Expresses an action that happened before another past action.",
    formula: "hatte/war + Partizip II",
    accent: "bg-[#d9f99d]",
    examples: [
      { de: "Ich hatte gelernt.", es: "Yo había estudiado.", en: "I had studied." },
      { de: "Er war gegangen.", es: "Él se había ido.", en: "He had left." },
      { de: "Wir hatten gearbeitet.", es: "Habíamos trabajado.", en: "We had worked." },
    ],
  },
  {
    id: "futur-1",
    number: "05",
    title: "Futur I",
    explanationEs: "Se usa para futuro, predicciones y suposiciones.",
    explanationEn: "Used for future actions, predictions, and assumptions.",
    formula: "werden + Infinitiv",
    accent: "bg-[#ffe130]",
    examples: [
      { de: "Ich werde lernen.", es: "Voy a estudiar.", en: "I will study." },
      { de: "Er wird arbeiten.", es: "Él trabajará.", en: "He will work." },
      { de: "Wir werden reisen.", es: "Viajaremos.", en: "We will travel." },
    ],
  },
  {
    id: "futur-2",
    number: "06",
    title: "Futur II",
    explanationEs: "Expresa una acción futura terminada o una suposición sobre el pasado.",
    explanationEn: "Expresses a completed future action or an assumption about the past.",
    formula: "werden + Partizip II + haben/sein",
    accent: "bg-[#cfeeff]",
    examples: [
      { de: "Ich werde gelernt haben.", es: "Habré estudiado.", en: "I will have studied." },
      { de: "Er wird angekommen sein.", es: "Él habrá llegado.", en: "He will have arrived." },
      { de: "Wir werden gearbeitet haben.", es: "Habremos trabajado.", en: "We will have worked." },
    ],
  },
];

const moodSections: GrammarSection[] = [
  {
    id: "konjunktiv-1",
    number: "07",
    title: "Konjunktiv I",
    explanationEs: "Se usa sobre todo para discurso indirecto.",
    explanationEn: "Mainly used for indirect speech.",
    formula: "Konjunktiv I",
    accent: "bg-[#fff3d8]",
    examples: [
      { de: "Er sagt, er sei krank.", es: "Él dice que está enfermo.", en: "He says he is sick." },
      { de: "Sie behauptet, sie habe keine Zeit.", es: "Ella afirma que no tiene tiempo.", en: "She claims she has no time." },
      { de: "Der Lehrer sagt, die Prüfung beginne morgen.", es: "El profesor dice que el examen empieza mañana.", en: "The teacher says the exam starts tomorrow." },
    ],
  },
  {
    id: "konjunktiv-2",
    number: "08",
    title: "Konjunktiv II",
    explanationEs: "Se usa para deseos, hipótesis, cortesía y sugerencias.",
    explanationEn: "Used for wishes, hypothetical situations, politeness, and suggestions.",
    formula: "würde + Infinitiv / hätte / wäre / könnte",
    accent: "bg-[#d9f99d]",
    examples: [
      { de: "Ich würde gern reisen.", es: "Me gustaría viajar.", en: "I would like to travel." },
      { de: "Wenn ich Zeit hätte, würde ich lernen.", es: "Si tuviera tiempo, estudiaría.", en: "If I had time, I would study." },
      { de: "Könnten Sie mir helfen?", es: "¿Podría ayudarme?", en: "Could you help me?" },
    ],
  },
  {
    id: "imperativ",
    number: "09",
    title: "Imperativ",
    explanationEs: "Se usa para órdenes, instrucciones y peticiones directas.",
    explanationEn: "Used for commands, instructions, and direct requests.",
    accent: "bg-[#ffe130]",
    examples: [
      { de: "Komm!", es: "¡Ven!", en: "Come!" },
      { de: "Kommen Sie!", es: "¡Venga usted!", en: "Come!" },
      { de: "Lernt Deutsch!", es: "¡Aprended alemán!", en: "Learn German!" },
      { de: "Gehen wir!", es: "¡Vayamos!", en: "Let's go!" },
    ],
  },
];

const passiveSections: GrammarSection[] = [
  {
    id: "aktiv",
    number: "10",
    title: "Aktiv",
    explanationEs: "La estructura normal: el sujeto realiza la acción.",
    explanationEn: "The standard structure: the subject performs the action.",
    accent: "bg-[#fff3d8]",
    examples: [
      { de: "Der Lehrer erklärt die Aufgabe.", es: "El profesor explica la tarea.", en: "The teacher explains the task." },
      { de: "Die Firma baut ein Haus.", es: "La empresa construye una casa.", en: "The company builds a house." },
      { de: "Ich schreibe einen Brief.", es: "Escribo una carta.", en: "I write a letter." },
    ],
  },
  {
    id: "vorgangspassiv",
    number: "11",
    title: "Vorgangspassiv",
    explanationEs: "Pasiva de proceso: la acción está en primer plano.",
    explanationEn: "Process passive: the action is in focus.",
    formula: "werden + Partizip II",
    accent: "bg-[#cfeeff]",
    examples: [
      { de: "Das Auto wird repariert.", es: "El coche es reparado.", en: "The car is being repaired." },
      { de: "Das Auto wurde repariert.", es: "El coche fue reparado.", en: "The car was repaired." },
      { de: "Das Auto ist repariert worden.", es: "El coche ha sido reparado.", en: "The car has been repaired." },
      { de: "Das Haus wird gebaut werden.", es: "La casa será construida.", en: "The house will be built." },
    ],
  },
  {
    id: "zustandspassiv",
    number: "12",
    title: "Zustandspassiv",
    explanationEs: "Pasiva de estado: muestra el resultado, no el proceso.",
    explanationEn: "Statal passive: shows the result, not the process.",
    formula: "sein + Partizip II",
    accent: "bg-[#d9f99d]",
    examples: [
      { de: "Die Tür ist geöffnet.", es: "La puerta está abierta.", en: "The door is open." },
      { de: "Das Fenster ist geschlossen.", es: "La ventana está cerrada.", en: "The window is closed." },
      { de: "Das Auto ist repariert.", es: "El coche está reparado.", en: "The car is repaired." },
    ],
  },
];

const constructionSections: GrammarSection[] = [
  {
    id: "modalverben",
    number: "13",
    title: "Modalverben",
    explanationEs: "Expresan capacidad, obligación, permiso, consejo, deseo o preferencia.",
    explanationEn: "Express ability, obligation, permission, advice, desire, or preference.",
    formula: "Modalverb + Infinitiv",
    accent: "bg-[#ffe130]",
    examples: [
      { de: "Ich kann Deutsch sprechen.", es: "Puedo hablar alemán.", en: "I can speak German." },
      { de: "Ich muss lernen.", es: "Tengo que estudiar.", en: "I must study." },
      { de: "Wir dürfen gehen.", es: "Podemos irnos.", en: "We are allowed to leave." },
    ],
  },
  {
    id: "modal-perfekt",
    number: "14",
    title: "Modalverben im Perfekt",
    explanationEs: "En Perfekt, los modales usan doble infinitivo.",
    explanationEn: "In the perfect tense, modal verbs use the double infinitive.",
    formula: "haben + Infinitiv + Modalverb",
    accent: "bg-[#cfeeff]",
    examples: [
      { de: "Ich habe arbeiten müssen.", es: "Tuve que trabajar.", en: "I had to work." },
      { de: "Er hat kommen können.", es: "Él pudo venir.", en: "He was able to come." },
      { de: "Wir haben lernen wollen.", es: "Quisimos estudiar.", en: "We wanted to study." },
    ],
  },
  {
    id: "infinitiv",
    number: "15",
    title: "Infinitivkonstruktionen",
    explanationEs: "Conectan ideas con infinitivo y zu.",
    explanationEn: "Connect ideas with an infinitive and zu.",
    formula: "um/ohne/statt + ... + zu + Infinitiv",
    accent: "bg-[#fff3d8]",
    examples: [
      { de: "Ich lerne Deutsch, um die Prüfung zu bestehen.", es: "Aprendo alemán para aprobar el examen.", en: "I learn German in order to pass the exam." },
      { de: "Er ging, ohne etwas zu sagen.", es: "Se fue sin decir nada.", en: "He left without saying anything." },
      { de: "Statt zu lernen, spielte er Fußball.", es: "En vez de estudiar, jugó al fútbol.", en: "Instead of studying, he played football." },
    ],
  },
  {
    id: "partizipien",
    number: "16",
    title: "Partizipialkonstruktionen",
    explanationEs: "Los participios pueden funcionar como adjetivos o construcciones avanzadas.",
    explanationEn: "Participles can function as adjectives or advanced constructions.",
    accent: "bg-[#d9f99d]",
    examples: [
      { de: "der arbeitende Mann", es: "el hombre que trabaja", en: "the working man" },
      { de: "die lernende Studentin", es: "la estudiante que aprende", en: "the studying student" },
      { de: "der geschriebene Brief", es: "la carta escrita", en: "the written letter" },
      { de: "die geschlossene Tür", es: "la puerta cerrada", en: "the closed door" },
    ],
  },
];

const comparisonTables = [
  {
    title: "All tenses",
    headers: ["Form", "Formula", "Example"],
    rows: [
      ["Präsens", "konjugiertes Verb", "Ich lerne."],
      ["Perfekt", "haben/sein + Partizip II", "Ich habe gelernt."],
      ["Präteritum", "Verb im Präteritum", "Ich lernte."],
      ["Plusquamperfekt", "hatte/war + Partizip II", "Ich hatte gelernt."],
      ["Futur I", "werden + Infinitiv", "Ich werde lernen."],
      ["Futur II", "werden + Partizip II + haben/sein", "Ich werde gelernt haben."],
    ],
  },
  {
    title: "Passive forms",
    headers: ["Form", "Formula", "Example"],
    rows: [
      ["Präsens Passiv", "wird + Partizip II", "Das Auto wird repariert."],
      ["Präteritum Passiv", "wurde + Partizip II", "Das Auto wurde repariert."],
      ["Perfekt Passiv", "ist + Partizip II + worden", "Das Auto ist repariert worden."],
      ["Plusquamperfekt Passiv", "war + Partizip II + worden", "Das Auto war repariert worden."],
      ["Futur I Passiv", "wird + Partizip II + werden", "Das Haus wird gebaut werden."],
      ["Futur II Passiv", "wird + Partizip II + worden sein", "Das Haus wird gebaut worden sein."],
    ],
  },
  {
    title: "Konjunktiv I vs Konjunktiv II",
    headers: ["Mood", "Use", "Example"],
    rows: [
      ["Konjunktiv I", "indirect speech", "Er sagt, er sei krank."],
      ["Konjunktiv II", "wishes, politeness, hypothetical situations", "Ich würde gern reisen."],
    ],
  },
  {
    title: "Aktiv vs Passiv",
    headers: ["Voice", "Focus", "Example"],
    rows: [
      ["Aktiv", "person doing the action", "Der Lehrer erklärt die Aufgabe."],
      ["Passiv", "action / result", "Die Aufgabe wird erklärt."],
    ],
  },
];

const learningPath = [
  ["A1", "Präsens, Modalverben"],
  ["A2", "Perfekt, Imperativ"],
  ["B1", "Präteritum, Futur I, Passiv, Konjunktiv II"],
  ["B2", "Plusquamperfekt, Futur II"],
  ["C1", "Konjunktiv I"],
  ["C2", "Advanced participial constructions"],
];

const exercises = [
  {
    title: "Choose the correct tense",
    task: "Gestern ___ ich Deutsch gelernt.",
    answer: "habe",
  },
  {
    title: "Convert Präsens to Perfekt",
    task: "Ich lerne Deutsch. →",
    answer: "Ich habe Deutsch gelernt.",
  },
  {
    title: "Transform Aktiv to Passiv",
    task: "Der Lehrer erklärt die Aufgabe. →",
    answer: "Die Aufgabe wird erklärt.",
  },
  {
    title: "Build Konjunktiv II",
    task: "Wenn ich Zeit hätte, ...",
    answer: "würde ich mehr lernen.",
  },
  {
    title: "Complete Futur I / Futur II",
    task: "Morgen ___ ich arbeiten.",
    answer: "werde",
  },
  {
    title: "Use modal verbs",
    task: "Ich ___ Deutsch sprechen.",
    answer: "kann",
  },
  {
    title: "Infinitive constructions",
    task: "Ich lerne, ___ die Prüfung zu bestehen.",
    answer: "um",
  },
];

const summaryItems = [
  "Präsens",
  "Perfekt",
  "Präteritum",
  "Plusquamperfekt",
  "Futur I",
  "Futur II",
  "Konjunktiv I",
  "Konjunktiv II",
  "Imperativ",
  "Aktiv",
  "Passiv",
  "Zustandspassiv",
  "Modalverben",
  "Infinitivkonstruktionen",
  "Partizipialkonstruktionen",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ExampleList({ examples }: { examples: Example[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {examples.map((example) => (
        <li className="border-l-4 border-[#ff7b2f] bg-[#fffaf0] px-3 py-2" key={example.de}>
          <p className="font-black">{example.de}</p>
          <p className="mt-1 text-sm font-bold text-[#5f4d35]">ES: {example.es}</p>
          <p className="text-sm font-bold text-[#5f4d35]">EN: {example.en}</p>
        </li>
      ))}
    </ul>
  );
}

function GrammarCard({ section }: { section: GrammarSection }) {
  return (
    <article className="scroll-mt-36 border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]" id={section.id}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border border-[#17130c] bg-[#17130c] px-2 py-1 text-xs font-black uppercase text-white">
          {section.number}
        </span>
        <span className={`border border-[#17130c] px-2 py-1 text-xs font-black uppercase ${section.accent}`}>
          Grammatik
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-black">{section.title}</h3>
      <p className="mt-3 text-sm font-bold leading-relaxed text-[#5f4d35]">ES: {section.explanationEs}</p>
      <p className="mt-1 text-sm font-bold leading-relaxed text-[#5f4d35]">EN: {section.explanationEn}</p>
      {section.formula && (
        <div className="mt-4 border-2 border-[#17130c] bg-[#f8edd6] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.14em]">Formula</p>
          <p className="mt-1 font-black">{section.formula}</p>
        </div>
      )}
      <ExampleList examples={section.examples} />
    </article>
  );
}

function GermanGrammarTenses() {
  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:shadow-[10px_10px_0_#17130c]">
        <header className="sticky top-0 z-30 border-b-2 border-[#17130c] bg-[#ffe130] p-4 shadow-[0_6px_0_#17130c] sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em]">
                Deutsch Studio / A1-C2 Grammar Map
              </p>
              <h1 className="mt-2 max-w-5xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Deutsche Zeitformen und Verbkonstruktionen
              </h1>
              <p className="mt-3 max-w-4xl text-sm font-semibold leading-relaxed text-[#4a3922] sm:text-base">
                A complete guide to German tenses, moods, voices, and verbal
                constructions from A1 to C2, with translations in Spanish and
                English.
              </p>
            </div>
            <div className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 text-white shadow-[4px_4px_0_#17130c]">
              <p className="text-[10px] font-black uppercase tracking-[0.16em]">Grammar map</p>
              <p className="mt-1 text-xl font-black">A1 → C2</p>
            </div>
          </div>

          <nav aria-label="Bereiche der deutschen Verbkonstruktionen" className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {navigation.map(([id, label], index) => (
              <button
                className="shrink-0 border-2 border-[#17130c] bg-white px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#cfeeff]"
                key={id}
                onClick={() => scrollTo(id)}
                type="button"
              >
                {String(index + 1).padStart(2, "0")} · {label}
              </button>
            ))}
          </nav>
        </header>

        <SectionShell id="zeitformen" eyebrow="01-06 · Zeitformen" title="German tenses">
          {tenseSections.map((section) => <GrammarCard key={section.id} section={section} />)}
        </SectionShell>

        <SectionShell id="modi" eyebrow="07-09 · Modi" title="Moods and commands" tone="warm">
          {moodSections.map((section) => <GrammarCard key={section.id} section={section} />)}
        </SectionShell>

        <SectionShell id="passiv" eyebrow="10-12 · Voice" title="Aktiv, Vorgangspassiv und Zustandspassiv">
          {passiveSections.map((section) => <GrammarCard key={section.id} section={section} />)}
        </SectionShell>

        <SectionShell id="modalverben" eyebrow="13-16 · Verb constructions" title="Modal verbs, infinitives and participles" tone="warm">
          {constructionSections.map((section) => <GrammarCard key={section.id} section={section} />)}
        </SectionShell>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="tabellen">
          <p className="text-xs font-black uppercase tracking-[0.2em]">17 · Comparison Tables</p>
          <h2 className="mt-1 text-3xl font-black">Compare the systems quickly.</h2>
          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {comparisonTables.map((table) => (
              <article className="overflow-hidden border-2 border-[#17130c] bg-white shadow-[4px_4px_0_#17130c]" key={table.title}>
                <h3 className="border-b-2 border-[#17130c] bg-[#ffe130] px-4 py-3 text-xl font-black">{table.title}</h3>
                <div className="max-w-full overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-sm">
                    <thead>
                      <tr>
                        {table.headers.map((header) => (
                          <th className="border-b-2 border-r border-[#17130c] bg-[#17130c] px-3 py-2 text-left font-black text-white last:border-r-0" key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr className="odd:bg-[#fffaf0] even:bg-[#fff3d8]" key={row.join("-")}>
                          {row.map((cell, index) => (
                            <td className={`border-r border-t border-[#17130c]/50 px-3 py-2 align-top font-bold last:border-r-0 ${index === 0 ? "text-[#17130c]" : "text-[#5f4d35]"}`} key={cell}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#cfeeff] p-4 sm:p-7" id="lernweg">
          <p className="text-xs font-black uppercase tracking-[0.2em]">18 · TELC and CEFR Learning Path</p>
          <h2 className="mt-1 text-3xl font-black">From A1 to C2.</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {learningPath.map(([level, topics]) => (
              <article className="border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]" key={level}>
                <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-xs font-black text-white">{level}</span>
                <p className="mt-4 font-black">{topics}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#17130c] p-4 text-white sm:p-7" id="uebungen">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">19 · Interactive Exercises</p>
          <h2 className="mt-1 text-3xl font-black">Practice every system.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {exercises.map((exercise) => (
              <article className="border-2 border-white bg-[#fffaf0] p-4 text-[#17130c] shadow-[4px_4px_0_#ffe130]" key={exercise.title}>
                <h3 className="text-xl font-black">{exercise.title}</h3>
                <p className="mt-3 border-2 border-[#17130c] bg-white p-3 font-black">{exercise.task}</p>
                <p className="mt-3 text-sm font-bold text-[#5f4d35]">Solution: <span className="text-[#ff6d1a]">{exercise.answer}</span></p>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-mt-36 bg-[#ff7b2f] p-4 text-white sm:p-7" id="summary">
          <p className="text-xs font-black uppercase tracking-[0.2em]">20 · Visual Summary</p>
          <h2 className="mt-1 text-3xl font-black">Everything on one wall.</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {summaryItems.map((item) => (
              <div className="border-2 border-white/80 bg-[#17130c] px-3 py-3 text-center text-sm font-black" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function SectionShell({
  children,
  eyebrow,
  id,
  title,
  tone = "blue",
}: {
  children: ReactNode;
  eyebrow: string;
  id: string;
  title: string;
  tone?: "blue" | "warm";
}) {
  return (
    <section className={`scroll-mt-36 border-b-2 border-[#17130c] p-4 sm:p-7 ${tone === "blue" ? "bg-[#cfeeff]" : "bg-[#fffaf0]"}`} id={id}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-black">{title}</h2>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">{children}</div>
    </section>
  );
}

export default GermanGrammarTenses;
