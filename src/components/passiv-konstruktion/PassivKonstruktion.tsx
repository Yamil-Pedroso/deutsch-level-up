const navigation = [
  ["was-ist-passiv", "Was ist Passiv?"],
  ["praesens", "Präsens"],
  ["praeteritum", "Präteritum"],
  ["perfekt", "Perfekt"],
  ["modalverben", "Modalverben"],
  ["aktiv-passiv", "Aktiv vs. Passiv"],
  ["hinweise", "Hinweise"],
  ["uebungen", "Mini-Übungen"],
] as const;

const tenseCards = [
  {
    id: "praesens",
    label: "02",
    title: "Passiv im Präsens",
    formula: "Subjekt + wird/werden + Partizip II",
    badge: "Gegenwart",
    examples: [
      {
        de: "Das Auto wird repariert.",
        es: "El coche es reparado.",
        en: "The car is being repaired.",
      },
      {
        de: "Die E-Mail wird geschrieben.",
        es: "El correo electrónico es escrito.",
        en: "The email is being written.",
      },
      {
        de: "Die Kinder werden abgeholt.",
        es: "Los niños son recogidos.",
        en: "The children are being picked up.",
      },
    ],
  },
  {
    id: "praeteritum",
    label: "03",
    title: "Passiv im Präteritum",
    formula: "Subjekt + wurde/wurden + Partizip II",
    badge: "Vergangenheit",
    examples: [
      {
        de: "Das Haus wurde gebaut.",
        es: "La casa fue construida.",
        en: "The house was built.",
      },
      {
        de: "Der Brief wurde geschickt.",
        es: "La carta fue enviada.",
        en: "The letter was sent.",
      },
      {
        de: "Die Fenster wurden geöffnet.",
        es: "Las ventanas fueron abiertas.",
        en: "The windows were opened.",
      },
    ],
  },
  {
    id: "perfekt",
    label: "04",
    title: "Passiv im Perfekt",
    formula: "Subjekt + ist/sind + Partizip II + worden",
    badge: "Perfekt",
    examples: [
      {
        de: "Das Auto ist repariert worden.",
        es: "El coche ha sido reparado.",
        en: "The car has been repaired.",
      },
      {
        de: "Die Aufgabe ist erklärt worden.",
        es: "La tarea ha sido explicada.",
        en: "The task has been explained.",
      },
      {
        de: "Die Briefe sind geschrieben worden.",
        es: "Las cartas han sido escritas.",
        en: "The letters have been written.",
      },
    ],
  },
  {
    id: "modalverben",
    label: "05",
    title: "Passiv mit Modalverben",
    formula: "Subjekt + Modalverb + Partizip II + werden",
    badge: "müssen · können · sollen",
    examples: [
      {
        de: "Die Rechnung muss bezahlt werden.",
        es: "La factura debe ser pagada.",
        en: "The bill must be paid.",
      },
      {
        de: "Das Zimmer kann reserviert werden.",
        es: "La habitación puede ser reservada.",
        en: "The room can be reserved.",
      },
      {
        de: "Die Aufgabe soll gemacht werden.",
        es: "La tarea debe ser hecha.",
        en: "The task is supposed to be done.",
      },
    ],
  },
];

const comparisons = [
  {
    active: {
      de: "Der Mechaniker repariert das Auto.",
      es: "El mecánico repara el coche.",
      en: "The mechanic repairs the car.",
    },
    passive: {
      de: "Das Auto wird repariert.",
      es: "El coche es reparado.",
      en: "The car is being repaired.",
    },
  },
  {
    active: {
      de: "Die Lehrerin erklärt die Aufgabe.",
      es: "La profesora explica la tarea.",
      en: "The teacher explains the task.",
    },
    passive: {
      de: "Die Aufgabe wird erklärt.",
      es: "La tarea es explicada.",
      en: "The task is being explained.",
    },
  },
];

const fillExercises = [
  {
    sentence: "Die E-Mail ___ geschrieben.",
    es: "El correo electrónico es escrito.",
    en: "The email is being written.",
    solution: "wird",
    hint: "Singular im Präsens",
  },
  {
    sentence: "Die Kinder ___ abgeholt.",
    es: "Los niños son recogidos.",
    en: "The children are being picked up.",
    solution: "werden",
    hint: "Plural im Präsens",
  },
  {
    sentence: "Der Brief ___ gestern geschickt.",
    es: "La carta fue enviada ayer.",
    en: "The letter was sent yesterday.",
    solution: "wurde",
    hint: "Singular im Präteritum",
  },
  {
    sentence: "Die Fenster ___ geöffnet.",
    es: "Las ventanas fueron abiertas.",
    en: "The windows were opened.",
    solution: "wurden",
    hint: "Plural im Präteritum",
  },
];

const transformExercises = [
  {
    active: {
      de: "Der Arzt untersucht den Patienten.",
      es: "El médico examina al paciente.",
      en: "The doctor examines the patient.",
    },
    passive: {
      de: "Der Patient wird untersucht.",
      es: "El paciente es examinado.",
      en: "The patient is being examined.",
    },
  },
  {
    active: {
      de: "Die Firma baut ein neues Büro.",
      es: "La empresa construye una oficina nueva.",
      en: "The company builds a new office.",
    },
    passive: {
      de: "Ein neues Büro wird gebaut.",
      es: "Una oficina nueva es construida.",
      en: "A new office is being built.",
    },
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type TranslatedSentence = {
  de: string;
  es: string;
  en: string;
};

function TranslationLines({ sentence }: { sentence: TranslatedSentence }) {
  return (
    <>
      <p className="font-black">{sentence.de}</p>
      <p className="mt-1 text-sm font-bold text-[#5f4d35]">
        ES: {sentence.es}
      </p>
      <p className="text-sm font-bold text-[#5f4d35]">
        EN: {sentence.en}
      </p>
    </>
  );
}

function PassivKonstruktion() {
  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:shadow-[10px_10px_0_#17130c]">
        <header className="sticky top-0 z-30 border-b-2 border-[#17130c] bg-[#ffe130] p-4 shadow-[0_6px_0_#17130c] sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em]">
                Deutsch Studio / TELC B1 Grammatik
              </p>
              <h1 className="mt-2 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Passivkonstruktion im Deutschen
              </h1>
              <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-[#4a3922] sm:text-base">
                Die Passivform benutzt man, wenn die Handlung wichtiger ist als
                die Person, die etwas macht.
              </p>
            </div>
            <div className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 text-white shadow-[4px_4px_0_#17130c]">
              <p className="text-[10px] font-black uppercase tracking-[0.16em]">
                Kernformel
              </p>
              <p className="mt-1 text-xl font-black">werden + Partizip II</p>
            </div>
          </div>

          <nav aria-label="Bereiche der Passivkonstruktion" className="mt-4 flex gap-2 overflow-x-auto pb-1">
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

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="was-ist-passiv">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.2em]">01 · Was ist das Passiv?</p>
              <h2 className="mt-2 text-3xl font-black">La acción está en primer plano.</h2>
              <p className="mt-4 font-bold leading-relaxed text-[#5f4d35]">
                En la voz pasiva no importa tanto quién hace la acción. Lo
                importante es qué pasa con una cosa o una persona. Por eso se
                usa mucho en noticias, instrucciones, procesos, cartas formales
                y situaciones de trabajo.
              </p>
            </article>

            <article className="border-2 border-[#17130c] bg-[#ffe130] p-5 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.2em]">Formel</p>
              <p className="mt-3 border-2 border-[#17130c] bg-white px-4 py-3 text-xl font-black">
                werden + Partizip II
              </p>
              <div className="mt-4 border-l-4 border-[#ff7b2f] bg-white/70 px-3 py-2">
                <TranslationLines
                  sentence={{
                    de: "Der Brief wird geschrieben.",
                    es: "La carta es escrita.",
                    en: "The letter is being written.",
                  }}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-4 border-b-2 border-[#17130c] bg-[#cfeeff] p-4 sm:p-7 xl:grid-cols-2">
          {tenseCards.map((card) => (
            <article
              className="scroll-mt-36 border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]"
              id={card.id}
              key={card.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="border border-[#17130c] bg-[#17130c] px-2 py-1 text-xs font-black uppercase text-white">
                  {card.label}
                </span>
                <span className="border border-[#17130c] bg-[#ffe130] px-2 py-1 text-xs font-black uppercase">
                  {card.badge}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-black">{card.title}</h2>
              <div className="mt-4 border-2 border-[#17130c] bg-[#f8edd6] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.14em]">Formel</p>
                <p className="mt-1 font-black">{card.formula}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {card.examples.map((example) => (
                  <li className="border-l-4 border-[#ff7b2f] bg-[#fffaf0] px-3 py-2" key={example.de}>
                    <TranslationLines sentence={example} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="aktiv-passiv">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">06 · Vergleich</p>
              <h2 className="mt-1 text-3xl font-black">Aktiv vs. Passiv</h2>
            </div>
            <span className="border-2 border-[#17130c] bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase text-white shadow-[3px_3px_0_#17130c]">
              Objekt wird Subjekt
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {comparisons.map((item) => (
              <article className="border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]" key={item.active.de}>
                <div className="grid gap-3">
                  <div className="border-2 border-[#17130c] bg-[#ffe130] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em]">Aktiv</p>
                    <div className="mt-2">
                      <TranslationLines sentence={item.active} />
                    </div>
                  </div>
                  <div className="border-2 border-[#17130c] bg-[#cfeeff] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em]">Passiv</p>
                    <div className="mt-2">
                      <TranslationLines sentence={item.passive} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-mt-36 border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7" id="hinweise">
          <p className="text-xs font-black uppercase tracking-[0.2em]">07 · Wichtige Hinweise</p>
          <h2 className="mt-1 text-3xl font-black">Das musst du dir merken.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Im Passiv ist die Handlung wichtiger als die Person.",
              "Die Person, die etwas macht, kann man oft weglassen.",
              "Wenn man die Person nennt, benutzt man meistens von + Dativ.",
            ].map((note, index) => (
              <article className="border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]" key={note}>
                <span className="border border-[#17130c] bg-[#ff7b2f] px-2 py-1 text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-black leading-relaxed">{note}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 border-2 border-[#17130c] bg-white p-5 shadow-[4px_4px_0_#17130c]">
            <p className="text-xs font-black uppercase tracking-[0.16em]">von + Dativ</p>
            <div className="mt-2">
              <TranslationLines
                sentence={{
                  de: "Das Auto wird von dem Mechaniker repariert.",
                  es: "El coche es reparado por el mecánico.",
                  en: "The car is repaired by the mechanic.",
                }}
              />
            </div>
          </div>
        </section>

        <section className="scroll-mt-36 bg-[#17130c] p-4 text-white sm:p-7" id="uebungen">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe130]">08 · Mini-Übungen</p>
              <h2 className="mt-1 text-3xl font-black">Kurz üben, schnell merken.</h2>
            </div>
            <span className="border-2 border-white bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase">
              TELC B1 Praxis
            </span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <article className="border-2 border-white bg-[#fffaf0] p-5 text-[#17130c] shadow-[4px_4px_0_#ffe130]">
              <h3 className="text-2xl font-black">A. Ergänze die Form</h3>
              <p className="mt-2 font-bold text-[#5f4d35]">wird · werden · wurde · wurden</p>
              <div className="mt-4 space-y-3">
                {fillExercises.map((exercise) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={exercise.sentence}>
                    <p className="font-black">{exercise.sentence}</p>
                    <p className="mt-1 text-sm font-bold text-[#5f4d35]">
                      ES: {exercise.es}
                    </p>
                    <p className="text-sm font-bold text-[#5f4d35]">
                      EN: {exercise.en}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#5f4d35]">
                      Lösung: <span className="text-[#ff6d1a]">{exercise.solution}</span> · {exercise.hint}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-2 border-white bg-[#cfeeff] p-5 text-[#17130c] shadow-[4px_4px_0_#ffe130]">
              <h3 className="text-2xl font-black">B. Aktiv → Passiv</h3>
              <p className="mt-2 font-bold text-[#5f4d35]">Achte darauf: Das Akkusativobjekt wird zum Subjekt.</p>
              <div className="mt-4 space-y-3">
                {transformExercises.map((exercise) => (
                  <div className="border-2 border-[#17130c] bg-white p-3" key={exercise.active.de}>
                    <p className="text-xs font-black uppercase tracking-[0.14em]">Aktiv</p>
                    <TranslationLines sentence={exercise.active} />
                    <div className="mt-3 border-t border-[#17130c]/30 pt-3">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ff6d1a]">Passiv</p>
                      <TranslationLines sentence={exercise.passive} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}

export default PassivKonstruktion;
