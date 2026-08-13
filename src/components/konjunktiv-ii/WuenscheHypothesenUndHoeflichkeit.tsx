const navigation = [
  ["was-ist-konjunktiv", "Was ist Konjunktiv II?"],
  ["wuensche", "Wünsche"],
  ["hypothesen", "Hypothesen"],
  ["bitten", "Bitten"],
  ["vorschlaege", "Vorschläge"],
  ["ratschlaege", "Ratschläge"],
  ["bedauern", "Bedauern"],
  ["formen", "Formen"],
  ["uebungen", "Aktiv üben"],
  ["telc-tipps", "TELC Tipps"],
] as const;

const useCases = [
  "Wünsche",
  "Hypothesen",
  "Höflichkeit",
  "Ratschläge",
  "irreale Situationen",
];

const formulaSections = [
  {
    id: "wuensche",
    label: "02",
    title: "Wünsche",
    accent: "bg-[#ffe130]",
    formulas: [
      "Ich wünschte, ich hätte...",
      "Ich wünschte, ich könnte...",
      "Ich würde gern + Infinitiv",
      "Ich hätte gern + Nomen",
    ],
    examples: [
      {
        de: "Ich wünschte, ich hätte mehr Zeit.",
        es: "Ojalá tuviera más tiempo.",
        en: "I wish I had more time.",
      },
      {
        de: "Ich wünschte, ich könnte besser Deutsch sprechen.",
        es: "Ojalá pudiera hablar mejor alemán.",
        en: "I wish I could speak German better.",
      },
      {
        de: "Ich würde gern nach Deutschland reisen.",
        es: "Me gustaría viajar a Alemania.",
        en: "I would like to travel to Germany.",
      },
      {
        de: "Ich hätte gern einen Kaffee.",
        es: "Quisiera un café.",
        en: "I would like a coffee.",
      },
    ],
  },
  {
    id: "hypothesen",
    label: "03",
    title: "Irreale Situationen / Hypothesen",
    accent: "bg-[#cfeeff]",
    formulas: ["Wenn + Subjekt + Konjunktiv II, würde + Infinitiv"],
    examples: [
      {
        de: "Wenn ich viel Geld hätte, würde ich ein Haus kaufen.",
        es: "Si tuviera mucho dinero, compraría una casa.",
        en: "If I had a lot of money, I would buy a house.",
      },
      {
        de: "Wenn ich Zeit hätte, würde ich mehr lernen.",
        es: "Si tuviera tiempo, estudiaría más.",
        en: "If I had time, I would study more.",
      },
      {
        de: "Wenn ich besser Deutsch sprechen könnte, würde ich in Deutschland arbeiten.",
        es: "Si pudiera hablar mejor alemán, trabajaría en Alemania.",
        en: "If I could speak German better, I would work in Germany.",
      },
    ],
  },
  {
    id: "bitten",
    label: "04",
    title: "Höfliche Bitten",
    accent: "bg-[#fff3d8]",
    formulas: ["Könnten Sie bitte...?", "Würden Sie bitte...?"],
    examples: [
      {
        de: "Könnten Sie mir bitte helfen?",
        es: "¿Podría ayudarme, por favor?",
        en: "Could you please help me?",
      },
      {
        de: "Würden Sie das bitte wiederholen?",
        es: "¿Podría repetir eso, por favor?",
        en: "Would you please repeat that?",
      },
      {
        de: "Könnten Sie mir die Adresse geben?",
        es: "¿Podría darme la dirección?",
        en: "Could you give me the address?",
      },
    ],
  },
  {
    id: "vorschlaege",
    label: "05",
    title: "Vorschläge",
    accent: "bg-[#d9f99d]",
    formulas: ["Wir könnten + Infinitiv"],
    examples: [
      {
        de: "Wir könnten ins Kino gehen.",
        es: "Podríamos ir al cine.",
        en: "We could go to the cinema.",
      },
      {
        de: "Wir könnten zusammen Deutsch lernen.",
        es: "Podríamos estudiar alemán juntos.",
        en: "We could study German together.",
      },
      {
        de: "Wir könnten morgen telefonieren.",
        es: "Podríamos hablar por teléfono mañana.",
        en: "We could talk on the phone tomorrow.",
      },
    ],
  },
  {
    id: "ratschlaege",
    label: "06",
    title: "Ratschläge",
    accent: "bg-[#ffe130]",
    formulas: ["Ich würde + Infinitiv", "Du solltest + Infinitiv"],
    examples: [
      {
        de: "Ich würde mehr lernen.",
        es: "Yo estudiaría más.",
        en: "I would study more.",
      },
      {
        de: "Ich würde früher schlafen gehen.",
        es: "Yo me iría a dormir más temprano.",
        en: "I would go to sleep earlier.",
      },
      {
        de: "Du solltest einen Deutschkurs besuchen.",
        es: "Deberías asistir a un curso de alemán.",
        en: "You should attend a German course.",
      },
    ],
  },
  {
    id: "bedauern",
    label: "07",
    title: "Vergangenheit / Bedauern",
    accent: "bg-[#cfeeff]",
    formulas: [
      "Ich hätte ... + Partizip II",
      "Ich hätte ... sollen/können/müssen",
    ],
    examples: [
      {
        de: "Ich hätte mehr lernen sollen.",
        es: "Debería haber estudiado más.",
        en: "I should have studied more.",
      },
      {
        de: "Ich hätte früher kommen können.",
        es: "Podría haber llegado antes.",
        en: "I could have come earlier.",
      },
      {
        de: "Ich hätte die Prüfung machen sollen.",
        es: "Debería haber hecho el examen.",
        en: "I should have taken the exam.",
      },
    ],
  },
];

const importantForms = [
  ["haben", "hätte"],
  ["sein", "wäre"],
  ["können", "könnte"],
  ["müssen", "müsste"],
  ["dürfen", "dürfte"],
  ["sollen", "sollte"],
  ["wollen", "wollte"],
  ["mögen", "möchte"],
  ["werden", "würde"],
];

const fillExercises = [
  {
    prompt: "Wenn ich Zeit ___, ___ ich Deutsch lernen.",
    es: "Si tuviera tiempo, estudiaría alemán.",
    en: "If I had time, I would study German.",
    answer: "hätte / würde",
    hint: "Hypothese mit wenn",
  },
  {
    prompt: "Ich ___ gern einen Kaffee.",
    es: "Quisiera un café.",
    en: "I would like a coffee.",
    answer: "hätte",
    hint: "höflicher Wunsch mit Nomen",
  },
  {
    prompt: "___ Sie mir bitte helfen?",
    es: "¿Podría ayudarme, por favor?",
    en: "Could you please help me?",
    answer: "Könnten",
    hint: "höfliche Bitte",
  },
  {
    prompt: "Wenn ich reich wäre, ___ ich ein Haus kaufen.",
    es: "Si fuera rico, compraría una casa.",
    en: "If I were rich, I would buy a house.",
    answer: "würde",
    hint: "würde + Infinitiv",
  },
];

const transformExercises = [
  {
    normal: {
      de: "Ich will nach Berlin reisen.",
      es: "Quiero viajar a Berlín.",
      en: "I want to travel to Berlin.",
    },
    konjunktiv: {
      de: "Ich würde gern nach Berlin reisen.",
      es: "Me gustaría viajar a Berlín.",
      en: "I would like to travel to Berlin.",
    },
  },
  {
    normal: {
      de: "Geben Sie mir bitte die Adresse.",
      es: "Deme la dirección, por favor.",
      en: "Please give me the address.",
    },
    konjunktiv: {
      de: "Könnten Sie mir bitte die Adresse geben?",
      es: "¿Podría darme la dirección, por favor?",
      en: "Could you please give me the address?",
    },
  },
  {
    normal: {
      de: "Ich habe keine Zeit.",
      es: "No tengo tiempo.",
      en: "I do not have time.",
    },
    konjunktiv: {
      de: "Wenn ich Zeit hätte, würde ich kommen.",
      es: "Si tuviera tiempo, vendría.",
      en: "If I had time, I would come.",
    },
  },
];

const wennExercises = [
  {
    de: "Wenn ich besser Deutsch sprechen könnte, würde ich ...",
    es: "Si pudiera hablar mejor alemán, ...",
    en: "If I could speak German better, I would ...",
  },
  {
    de: "Wenn ich mehr Zeit hätte, würde ich ...",
    es: "Si tuviera más tiempo, ...",
    en: "If I had more time, I would ...",
  },
  {
    de: "Wenn ich in der Schweiz arbeiten würde, müsste ich ...",
    es: "Si trabajara en Suiza, tendría que ...",
    en: "If I worked in Switzerland, I would have to ...",
  },
];

const telcTips = [
  "Benutze Könnten Sie...? in formalen Nachrichten und Gesprächen.",
  "Benutze Ich würde gern... für Wünsche und Pläne.",
  "Benutze Wenn ich Zeit hätte, würde ich... für Hypothesen.",
  "Mach im TELC B1 keine zu komplizierten Sätze. Klar und korrekt ist besser.",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function WünscheHypothesenUndHöflichkeit() {
  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:shadow-[10px_10px_0_#17130c]">
        <header className="sticky top-0 z-30 border-b-2 border-[#17130c] bg-[#ffe130] p-4 shadow-[0_6px_0_#17130c] sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em]">
                Deutsch Studio / TELC B1 Grammatik
              </p>
              <h1 className="mt-2 max-w-5xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Konjunktiv II: Wünsche, Höflichkeit und irreale Situationen
              </h1>
              <p className="mt-3 max-w-4xl text-sm font-semibold leading-relaxed text-[#4a3922] sm:text-base">
                El Konjunktiv II se usa para expresar deseos, situaciones
                irreales, hipótesis, consejos y formas corteses.
              </p>
            </div>
            <div className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 text-white shadow-[4px_4px_0_#17130c]">
              <p className="text-[10px] font-black uppercase tracking-[0.16em]">
                B1 Werkzeug
              </p>
              <p className="mt-1 text-xl font-black">hätte · wäre · würde</p>
            </div>
          </div>

          <nav aria-label="Bereiche des Konjunktiv-II-Themas" className="mt-4 flex gap-2 overflow-x-auto pb-1">
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

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="was-ist-konjunktiv">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                01 · Was ist der Konjunktiv II?
              </p>
              <h2 className="mt-2 text-3xl font-black">
                La forma para lo posible, cortés o irreal.
              </h2>
              <p className="mt-4 font-bold leading-relaxed text-[#5f4d35]">
                En alemán, el Konjunktiv II te ayuda a sonar más amable y a
                hablar de cosas que no son reales, que son hipotéticas o que te
                gustaría que fueran diferentes.
              </p>
            </article>

            <article className="border-2 border-[#17130c] bg-[#ffe130] p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Uso principal
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCases.map((item) => (
                  <span
                    className="border-2 border-[#17130c] bg-white px-3 py-2 text-sm font-black"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-4 border-b-2 border-[#17130c] bg-[#cfeeff] p-4 sm:p-7 xl:grid-cols-2">
          {formulaSections.map((section) => (
            <article
              className="scroll-mt-36 border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]"
              id={section.id}
              key={section.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="border border-[#17130c] bg-[#17130c] px-2 py-1 text-xs font-black uppercase text-white">
                  {section.label}
                </span>
                <span className={`border border-[#17130c] px-2 py-1 text-xs font-black uppercase ${section.accent}`}>
                  Konjunktiv II
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-black">{section.title}</h2>

              <div className="mt-4 grid gap-2">
                {section.formulas.map((formula) => (
                  <div className="border-2 border-[#17130c] bg-[#f8edd6] p-3" key={formula}>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em]">
                      Formel
                    </p>
                    <p className="mt-1 font-black">{formula}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-4 space-y-2">
                {section.examples.map((example) => (
                  <li className="border-l-4 border-[#ff7b2f] bg-[#fffaf0] px-3 py-2" key={example.de}>
                    <p className="font-black">{example.de}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {example.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {example.en}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="formen">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                08 · Wichtige Formen
              </p>
              <h2 className="mt-1 text-3xl font-black">
                Diese Formen brauchst du ständig.
              </h2>
            </div>
            <span className="border-2 border-[#17130c] bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase text-white shadow-[3px_3px_0_#17130c]">
              auswendig lernen
            </span>
          </div>

          <div className="max-w-full overflow-x-auto border-2 border-[#17130c] bg-white shadow-[4px_4px_0_#17130c]">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b-2 border-r-2 border-[#17130c] bg-[#17130c] px-4 py-3 text-left font-black text-white">
                    Infinitiv
                  </th>
                  <th className="border-b-2 border-[#17130c] bg-[#17130c] px-4 py-3 text-left font-black text-white">
                    Konjunktiv II
                  </th>
                </tr>
              </thead>
              <tbody>
                {importantForms.map(([infinitive, form]) => (
                  <tr className="odd:bg-[#fffaf0] even:bg-[#fff3d8]" key={infinitive}>
                    <td className="border-r-2 border-t border-[#17130c]/40 px-4 py-3 font-black">
                      {infinitive}
                    </td>
                    <td className="border-t border-[#17130c]/40 px-4 py-3 font-black text-[#ff6d1a]">
                      {form}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#17130c] p-4 text-white sm:p-7" id="uebungen">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">
                09 · Aktiv üben
              </p>
              <h2 className="mt-1 text-3xl font-black">
                Vom Erkennen zum Anwenden.
              </h2>
            </div>
            <span className="border-2 border-white bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase">
              hätte · wäre · könnte · würde
            </span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <article className="border-2 border-white bg-[#fffaf0] p-5 text-[#17130c] shadow-[4px_4px_0_#ffe130]">
              <h3 className="text-2xl font-black">A. Ergänze</h3>
              <div className="mt-4 space-y-3">
                {fillExercises.map((exercise) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={exercise.prompt}>
                    <p className="font-black">{exercise.prompt}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {exercise.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {exercise.en}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#5f4d35]">
                      Lösung: <span className="text-[#ff6d1a]">{exercise.answer}</span> · {exercise.hint}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-2 border-white bg-[#cfeeff] p-5 text-[#17130c] shadow-[4px_4px_0_#ffe130]">
              <h3 className="text-2xl font-black">B. Umformen</h3>
              <div className="mt-4 space-y-3">
                {transformExercises.map((exercise) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={exercise.normal.de}>
                    <p className="text-xs font-black uppercase tracking-[0.14em]">Normal</p>
                    <p className="font-black">{exercise.normal.de}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {exercise.normal.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {exercise.normal.en}
                    </p>
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-[#ff6d1a]">
                      Konjunktiv II
                    </p>
                    <p className="font-black">{exercise.konjunktiv.de}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {exercise.konjunktiv.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {exercise.konjunktiv.en}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-2 border-white bg-[#ffe130] p-5 text-[#17130c] shadow-[4px_4px_0_#ffe130]">
              <h3 className="text-2xl font-black">C. Wenn ... würde ...</h3>
              <p className="mt-2 font-bold text-[#5f4d35]">
                Ergänze deine eigene Idee.
              </p>
              <div className="mt-4 space-y-3">
                {wennExercises.map((sentence) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={sentence.de}>
                    <p className="font-black">{sentence.de}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {sentence.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {sentence.en}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="scroll-mt-36 bg-[#ffe130] p-4 sm:p-7" id="telc-tipps">
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            10 · TELC B1 Tipps
          </p>
          <h2 className="mt-1 text-3xl font-black">
            Sicher, höflich und nicht zu kompliziert.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {telcTips.map((tip, index) => (
              <article className="border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]" key={tip}>
                <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-black leading-relaxed">{tip}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default WünscheHypothesenUndHöflichkeit;
