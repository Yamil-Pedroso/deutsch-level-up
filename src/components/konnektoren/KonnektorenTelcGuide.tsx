type TelcConnectorCard = {
  id: string;
  connector: string;
  translation: string;
  translationEn: string;
  formula: string;
  hint: string;
  examples: string[];
  group: "Verb am Ende" | "Position 2" | "Genitiv" | "Infinitiv mit zu" | "Normale Wortstellung";
};

const telcConnectors: TelcConnectorCard[] = [
  {
    id: "weil",
    connector: "weil",
    translation: "porque",
    translationEn: "because",
    formula: "Hauptsatz + weil + Subjekt + ... + Verb",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Ich lerne Deutsch, weil ich die TELC-Prüfung bestehen möchte.",
      "Er bleibt zu Hause, weil er krank ist.",
      "Wir fahren nach Bern, weil wir Urlaub haben.",
    ],
  },
  {
    id: "denn",
    connector: "denn",
    translation: "porque",
    translationEn: "because",
    formula: "Hauptsatz + denn + Subjekt + Verb + ...",
    hint: "Die Wortstellung bleibt wie im Hauptsatz.",
    group: "Normale Wortstellung",
    examples: [
      "Ich lerne Deutsch, denn ich möchte in der Schweiz arbeiten.",
      "Wir bleiben zu Hause, denn es regnet.",
      "Er kauft ein Auto, denn er braucht es für die Arbeit.",
    ],
  },
  {
    id: "deshalb",
    connector: "deshalb",
    translation: "por eso",
    translationEn: "therefore / that is why",
    formula: "Satz 1. Deshalb + Verb + Subjekt + ...",
    hint: "Das Verb steht direkt nach deshalb.",
    group: "Position 2",
    examples: [
      "Ich bin müde. Deshalb gehe ich früh ins Bett.",
      "Es regnet. Deshalb bleiben wir zu Hause.",
      "Ich habe viel gelernt. Deshalb bin ich zufrieden.",
    ],
  },
  {
    id: "deswegen",
    connector: "deswegen",
    translation: "por eso",
    translationEn: "for that reason",
    formula: "Satz 1. Deswegen + Verb + Subjekt + ...",
    hint: "Das Verb steht auf Position 2.",
    group: "Position 2",
    examples: [
      "Er ist krank. Deswegen geht er nicht zur Arbeit.",
      "Ich habe keine Zeit. Deswegen kann ich nicht kommen.",
      "Die Prüfung ist schwer. Deswegen lerne ich jeden Tag.",
    ],
  },
  {
    id: "darum",
    connector: "darum",
    translation: "por eso",
    translationEn: "that is why",
    formula: "Satz 1. Darum + Verb + Subjekt + ...",
    hint: "Darum funktioniert wie deshalb/deswegen.",
    group: "Position 2",
    examples: [
      "Ich bin müde. Darum gehe ich schlafen.",
      "Das Wetter ist schlecht. Darum bleiben wir drinnen.",
      "Er hat viel gearbeitet. Darum braucht er Urlaub.",
    ],
  },
  {
    id: "aber",
    connector: "aber",
    translation: "pero",
    translationEn: "but",
    formula: "Satz + aber + Satz",
    hint: "Die Wortstellung bleibt normal.",
    group: "Normale Wortstellung",
    examples: [
      "Ich möchte kommen, aber ich habe keine Zeit.",
      "Er ist müde, aber er arbeitet weiter.",
      "Das Auto ist alt, aber es funktioniert gut.",
    ],
  },
  {
    id: "obwohl",
    connector: "obwohl",
    translation: "aunque",
    translationEn: "although",
    formula: "Hauptsatz + obwohl + Subjekt + ... + Verb",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Ich gehe spazieren, obwohl es regnet.",
      "Er arbeitet, obwohl er krank ist.",
      "Sie lernt Deutsch, obwohl es schwierig ist.",
    ],
  },
  {
    id: "trotzdem",
    connector: "trotzdem",
    translation: "aun así",
    translationEn: "nevertheless",
    formula: "Satz 1. Trotzdem + Verb + Subjekt + ...",
    hint: "Das Verb steht auf Position 2.",
    group: "Position 2",
    examples: [
      "Es regnet. Trotzdem gehe ich spazieren.",
      "Ich bin müde. Trotzdem lerne ich weiter.",
      "Die Prüfung ist schwer. Trotzdem habe ich keine Angst.",
    ],
  },
  {
    id: "dass",
    connector: "dass",
    translation: "que",
    translationEn: "that",
    formula: "Hauptsatz + dass + Subjekt + ... + Verb",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Ich glaube, dass Deutsch wichtig ist.",
      "Er sagt, dass er morgen kommt.",
      "Wir denken, dass die Prüfung schwierig ist.",
    ],
  },
  {
    id: "wenn",
    connector: "wenn",
    translation: "si / cuando",
    translationEn: "if / when",
    formula: "Wenn + Subjekt + ... + Verb, Hauptsatz",
    hint: "Das Verb steht im Nebensatz am Ende.",
    group: "Verb am Ende",
    examples: [
      "Wenn ich Zeit habe, komme ich.",
      "Wenn es regnet, bleibe ich zu Hause.",
      "Ich freue mich, wenn du kommst.",
    ],
  },
  {
    id: "als",
    connector: "als",
    translation: "cuando (pasado)",
    translationEn: "when (past)",
    formula: "Als + Subjekt + ... + Verb, Hauptsatz",
    hint: "Für einmalige Ereignisse in der Vergangenheit.",
    group: "Verb am Ende",
    examples: [
      "Als ich klein war, spielte ich Fußball.",
      "Als ich nach Zürich kam, sprach ich kein Deutsch.",
      "Als wir Kinder waren, spielten wir draußen.",
    ],
  },
  {
    id: "waehrend",
    connector: "während",
    translation: "mientras / durante",
    translationEn: "while / during",
    formula: "Hauptsatz + während + Subjekt + ... + Verb / während + Genitiv",
    hint: "Als Konnektor: Verb am Ende. Als Präposition: Genitiv.",
    group: "Verb am Ende",
    examples: [
      "Ich höre Musik, während ich arbeite.",
      "Er liest, während sie kocht.",
      "Während des Kurses darf man nicht telefonieren.",
    ],
  },
  {
    id: "bevor",
    connector: "bevor",
    translation: "antes de que",
    translationEn: "before",
    formula: "Hauptsatz + bevor + Subjekt + ... + Verb",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Ich esse, bevor ich arbeite.",
      "Ruf mich an, bevor du kommst.",
      "Wir lernen, bevor wir die Prüfung machen.",
    ],
  },
  {
    id: "nachdem",
    connector: "nachdem",
    translation: "después de que",
    translationEn: "after",
    formula: "Nachdem + Subjekt + ... + Verb, Hauptsatz",
    hint: "Oft mit Plusquamperfekt, wenn zwei Vergangenheiten verbunden werden.",
    group: "Verb am Ende",
    examples: [
      "Nachdem ich gegessen hatte, ging ich spazieren.",
      "Nachdem wir gearbeitet hatten, gingen wir nach Hause.",
      "Nachdem sie gelernt hatte, machte sie eine Pause.",
    ],
  },
  {
    id: "damit",
    connector: "damit",
    translation: "para que",
    translationEn: "so that",
    formula: "Hauptsatz + damit + Subjekt + ... + Verb",
    hint: "Benutze damit, wenn die Sätze unterschiedliche Subjekte haben können.",
    group: "Verb am Ende",
    examples: [
      "Ich lerne Deutsch, damit ich die Prüfung bestehe.",
      "Er spart Geld, damit er ein Auto kaufen kann.",
      "Wir trainieren, damit wir gesund bleiben.",
    ],
  },
  {
    id: "um-zu",
    connector: "um ... zu",
    translation: "para",
    translationEn: "in order to",
    formula: "Hauptsatz + um + Infinitivobjekt + zu + Infinitiv",
    hint: "Benutze um ... zu, wenn das Subjekt gleich bleibt.",
    group: "Infinitiv mit zu",
    examples: [
      "Ich lerne Deutsch, um die TELC-Prüfung zu bestehen.",
      "Er arbeitet viel, um Geld zu sparen.",
      "Wir fahren nach Bern, um Freunde zu besuchen.",
    ],
  },
  {
    id: "wegen",
    connector: "wegen + Genitiv",
    translation: "debido a",
    translationEn: "because of / due to",
    formula: "wegen + Genitiv",
    hint: "Wegen ist eine Präposition, kein Konnektor mit Verb.",
    group: "Genitiv",
    examples: [
      "Wegen des schlechten Wetters bleiben wir zu Hause.",
      "Wegen der Prüfung lerne ich jeden Tag.",
      "Wegen eines Problems konnte ich nicht kommen.",
    ],
  },
  {
    id: "trotz",
    connector: "trotz + Genitiv",
    translation: "a pesar de",
    translationEn: "despite",
    formula: "trotz + Genitiv",
    hint: "Trotz nennt einen Gegengrund.",
    group: "Genitiv",
    examples: [
      "Trotz des Regens gehen wir spazieren.",
      "Trotz der Schwierigkeiten lernt er weiter.",
      "Trotz einer Erkältung arbeitet sie heute.",
    ],
  },
  {
    id: "seitdem",
    connector: "seitdem",
    translation: "desde entonces",
    translationEn: "since then / since",
    formula: "Seitdem + Subjekt + ... + Verb, Hauptsatz",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Seitdem ich in Zürich wohne, lerne ich Deutsch.",
      "Seitdem er arbeitet, hat er wenig Zeit.",
      "Seitdem wir uns kennen, sind wir Freunde.",
    ],
  },
  {
    id: "ob",
    connector: "ob",
    translation: "si (interrogativa indirecta)",
    translationEn: "whether / if (indirect question)",
    formula: "Hauptsatz + ob + Subjekt + ... + Verb",
    hint: "Für indirekte Ja/Nein-Fragen.",
    group: "Verb am Ende",
    examples: [
      "Ich weiß nicht, ob er kommt.",
      "Kannst du mir sagen, ob der Kurs teuer ist?",
      "Wir wissen nicht, ob die Prüfung schwierig sein wird.",
    ],
  },
  {
    id: "ausserdem",
    connector: "außerdem",
    translation: "además",
    translationEn: "in addition / besides",
    formula: "Satz 1. Außerdem + Verb + Subjekt + ...",
    hint: "Das Verb steht auf Position 2.",
    group: "Position 2",
    examples: [
      "Ich lerne Deutsch. Außerdem arbeite ich Vollzeit.",
      "Er spielt Fußball. Außerdem geht er ins Fitnessstudio.",
      "Wir fahren nach Bern. Außerdem besuchen wir Freunde.",
    ],
  },
  {
    id: "da",
    connector: "da",
    translation: "ya que",
    translationEn: "since / as",
    formula: "Da + Subjekt + ... + Verb, Hauptsatz",
    hint: "Da klingt oft etwas schriftlicher als weil.",
    group: "Verb am Ende",
    examples: [
      "Da ich krank bin, bleibe ich zu Hause.",
      "Da es spät ist, gehen wir schlafen.",
      "Da ich arbeiten muss, kann ich nicht kommen.",
    ],
  },
  {
    id: "falls",
    connector: "falls",
    translation: "en caso de que",
    translationEn: "in case / if",
    formula: "Falls + Subjekt + ... + Verb, Hauptsatz",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Falls du Hilfe brauchst, ruf mich an.",
      "Falls es regnet, bleiben wir zu Hause.",
      "Falls ich Zeit habe, komme ich vorbei.",
    ],
  },
  {
    id: "bis",
    connector: "bis",
    translation: "hasta",
    translationEn: "until",
    formula: "Hauptsatz + bis + Subjekt + ... + Verb",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Warte hier, bis ich komme.",
      "Ich lerne, bis ich alles verstehe.",
      "Bleib zu Hause, bis du gesund bist.",
    ],
  },
  {
    id: "sobald",
    connector: "sobald",
    translation: "tan pronto como",
    translationEn: "as soon as",
    formula: "Sobald + Subjekt + ... + Verb, Hauptsatz",
    hint: "Das Verb steht am Ende.",
    group: "Verb am Ende",
    examples: [
      "Sobald ich Zeit habe, rufe ich dich an.",
      "Sobald er kommt, beginnen wir.",
      "Sobald die Prüfung vorbei ist, mache ich Urlaub.",
    ],
  },
];

const goldenRules = [
  {
    title: "Verb am Ende",
    items: ["weil", "obwohl", "dass", "wenn", "als", "während", "bevor", "nachdem", "damit", "seitdem", "ob", "da", "falls", "bis", "sobald"],
  },
  {
    title: "Verb auf Position 2",
    items: ["deshalb", "deswegen", "darum", "trotzdem", "außerdem", "daher", "danach", "dann"],
  },
  {
    title: "Normale Wortstellung",
    items: ["und", "aber", "oder", "denn", "sondern", "doch"],
  },
  {
    title: "Mit Genitiv",
    items: ["wegen", "trotz", "während", "statt", "anstatt"],
  },
  {
    title: "Mit Infinitiv + zu",
    items: ["um ... zu"],
  },
];

const groupAccent: Record<TelcConnectorCard["group"], string> = {
  "Verb am Ende": "bg-[#cfeeff]",
  "Position 2": "bg-[#ffe130]",
  Genitiv: "bg-[#fff3d8]",
  "Infinitiv mit zu": "bg-[#d9f99d]",
  "Normale Wortstellung": "bg-white",
};

const verbPositionTables = [
  {
    id: "verb-end",
    label: "Nebensätze",
    title: "Conectores con verbo al final",
    marker: "bg-[#ff5c5c]",
    structure: "Conector + Subjekt + ... + Verb",
    rows: [
      ["weil", "porque"],
      ["obwohl", "aunque"],
      ["dass", "que"],
      ["wenn", "si / cuando"],
      ["als", "cuando (pasado)"],
      ["während", "mientras"],
      ["bevor", "antes de que"],
      ["nachdem", "después de que"],
      ["damit", "para que"],
      ["seitdem", "desde entonces"],
      ["ob", "si"],
      ["da", "ya que"],
      ["falls", "en caso de que"],
      ["bis", "hasta"],
      ["sobald", "tan pronto como"],
    ],
    examples: [
      "Ich lerne Deutsch, weil ich die Prüfung bestehen möchte.",
      "Ich gehe spazieren, obwohl es regnet.",
      "Ich glaube, dass Deutsch wichtig ist.",
      "Wenn ich Zeit habe, komme ich.",
    ],
  },
  {
    id: "position-two",
    label: "Hauptsatzkonnektoren",
    title: "Conectores con verbo en posición 2",
    marker: "bg-[#73d673]",
    structure: "Conector + Verb + Subjekt + ...",
    rows: [
      ["deshalb", "por eso"],
      ["deswegen", "por eso"],
      ["darum", "por eso"],
      ["trotzdem", "aun así"],
      ["außerdem", "además"],
      ["daher", "por ello"],
      ["danach", "después"],
      ["dann", "entonces"],
    ],
    examples: [
      "Ich bin müde. Deshalb gehe ich schlafen.",
      "Es regnet. Deswegen bleiben wir zu Hause.",
      "Ich habe keine Zeit. Darum komme ich nicht.",
      "Es regnet. Trotzdem gehe ich spazieren.",
      "Ich lerne Deutsch. Außerdem arbeite ich Vollzeit.",
    ],
  },
  {
    id: "normal-position",
    label: "Koordinierende Konnektoren",
    title: "Conectores con verbo en posición normal",
    marker: "bg-[#9dd9ff]",
    structure: "Subjekt + Verb + ... + Konnektor + Subjekt + Verb + ...",
    rows: [
      ["und", "y"],
      ["aber", "pero"],
      ["oder", "o"],
      ["denn", "porque"],
      ["sondern", "sino"],
      ["doch", "sin embargo"],
    ],
    examples: [
      "Ich lerne Deutsch, und ich arbeite.",
      "Ich möchte kommen, aber ich habe keine Zeit.",
      "Möchtest du Tee, oder möchtest du Kaffee?",
      "Ich lerne Deutsch, denn ich möchte die Prüfung bestehen.",
      "Er trinkt keinen Kaffee, sondern er trinkt Tee.",
    ],
  },
  {
    id: "genitive",
    label: "Genitiv",
    title: "Conectores con Genitiv",
    marker: "bg-[#c084fc]",
    structure: "Conector + Genitiv",
    rows: [
      ["wegen", "debido a"],
      ["trotz", "a pesar de"],
      ["während", "durante"],
      ["statt / anstatt", "en lugar de"],
    ],
    examples: [
      "Wegen des Regens bleiben wir zu Hause.",
      "Trotz der Schwierigkeiten lernt er weiter.",
      "Während des Kurses darf man nicht telefonieren.",
      "Statt eines Autos kauft er ein Fahrrad.",
    ],
  },
  {
    id: "infinitive",
    label: "Infinitiv + zu",
    title: "Construcción con infinitivo + zu",
    marker: "bg-[#ffb347]",
    structure: "um + Objekt + zu + Infinitiv",
    rows: [["um ... zu", "para"]],
    examples: [
      "Ich lerne Deutsch, um die Prüfung zu bestehen.",
      "Er arbeitet viel, um Geld zu sparen.",
      "Wir fahren nach Bern, um Freunde zu besuchen.",
    ],
  },
];

const doubleConnectors = [
  {
    id: "zwar-aber",
    connector: "zwar ... aber",
    meaning: "es cierto que..., pero...",
    meaningEn: "it is true that..., but...",
    formula: "Satz + zwar + ..., aber + Satz",
    examples: [
      "Ich habe zwar wenig Zeit, aber ich lerne jeden Tag Deutsch.",
      "Er ist zwar krank, aber er arbeitet weiter.",
      "Die Prüfung ist zwar schwer, aber ich habe keine Angst.",
    ],
    priority: true,
  },
  {
    id: "entweder-oder",
    connector: "entweder ... oder",
    meaning: "o ... o ...",
    meaningEn: "either ... or ...",
    formula: "entweder + Satz, oder + Satz",
    examples: [
      "Entweder kommst du heute, oder morgen.",
      "Wir fahren entweder nach Bern oder nach Zürich.",
      "Du musst entweder lernen oder arbeiten.",
    ],
    priority: true,
  },
  {
    id: "weder-noch",
    connector: "weder ... noch",
    meaning: "ni ... ni ...",
    meaningEn: "neither ... nor ...",
    formula: "weder + ..., noch + ...",
    examples: [
      "Ich trinke weder Kaffee noch Tee.",
      "Er spricht weder Deutsch noch Französisch.",
      "Wir haben weder Zeit noch Geld.",
    ],
    priority: false,
  },
  {
    id: "sowohl-als-auch",
    connector: "sowohl ... als auch",
    meaning: "tanto ... como ...",
    meaningEn: "both ... and ...",
    formula: "sowohl + ..., als auch + ...",
    examples: [
      "Ich spreche sowohl Spanisch als auch Englisch.",
      "Er arbeitet sowohl im Büro als auch zu Hause.",
      "Wir mögen sowohl Pizza als auch Pasta.",
    ],
    priority: true,
  },
  {
    id: "nicht-nur-sondern-auch",
    connector: "nicht nur ... sondern auch",
    meaning: "no solo ..., sino también ...",
    meaningEn: "not only ... but also ...",
    formula: "nicht nur + ..., sondern auch + ...",
    examples: [
      "Ich lerne nicht nur Deutsch, sondern auch Italienisch.",
      "Er ist nicht nur intelligent, sondern auch freundlich.",
      "Sie arbeitet nicht nur viel, sondern auch sehr gut.",
    ],
    priority: true,
  },
  {
    id: "je-desto",
    connector: "je ... desto",
    meaning: "cuanto más ..., más ...",
    meaningEn: "the more ..., the more ...",
    formula: "Je + Komparativ, desto + Komparativ",
    examples: [
      "Je mehr ich lerne, desto besser spreche ich Deutsch.",
      "Je älter man wird, desto mehr Erfahrung hat man.",
      "Je länger ich arbeite, desto müder werde ich.",
    ],
    priority: false,
  },
  {
    id: "einerseits-andererseits",
    connector: "einerseits ... andererseits",
    meaning: "por un lado ..., por otro lado ...",
    meaningEn: "on the one hand ..., on the other hand ...",
    formula: "einerseits + ..., andererseits + ...",
    examples: [
      "Einerseits möchte ich reisen, andererseits habe ich wenig Geld.",
      "Einerseits ist der Job interessant, andererseits ist er stressig.",
      "Einerseits lerne ich gern, andererseits brauche ich Freizeit.",
    ],
    priority: false,
  },
  {
    id: "weder-noch-sondern",
    connector: "weder ... noch ... sondern",
    meaning: "ni ... ni ..., sino ...",
    meaningEn: "neither ... nor ..., but rather ...",
    formula: "weder + ..., noch + ..., sondern + ...",
    examples: [
      "Er spricht weder Deutsch noch Englisch, sondern Spanisch.",
      "Ich trinke weder Kaffee noch Tee, sondern Wasser.",
      "Sie arbeitet weder im Büro noch zu Hause, sondern in der Schule.",
    ],
    priority: false,
  },
];

export function KonnektorenTelcGuide() {
  return (
    <section className="scroll-mt-28 border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-7" id="telc-guide">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">02 · TELC B1 Guide</p>
          <h2 className="mt-1 text-3xl font-black">Konnektoren-Spickzettel</h2>
          <p className="mt-3 max-w-3xl font-bold leading-relaxed text-[#5f4d35]">
            Formeln, Satzbau und Beispiele für die wichtigsten Konnektoren und Präpositionen auf B1-Niveau.
          </p>
        </div>
        <span className="border-2 border-[#17130c] bg-[#ff7b2f] px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_#17130c]">
          {telcConnectors.length} Formen
        </span>
      </div>

      <div className="mt-6 border-2 border-[#17130c] bg-[#f8edd6] p-4 shadow-[5px_5px_0_#17130c]">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#17130c] pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em]">Verbposition merken</p>
            <h3 className="mt-1 text-2xl font-black">Wo steht das Verb?</h3>
          </div>
          <span className="border-2 border-[#17130c] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
            TELC B1 Tabelle
          </span>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-2">
          {verbPositionTables.map((table) => (
            <article className="min-w-0 border-2 border-[#17130c] bg-white shadow-[3px_3px_0_#17130c]" key={table.id}>
              <div className="flex flex-wrap items-center gap-3 border-b-2 border-[#17130c] p-4">
                <span className={`h-4 w-4 shrink-0 border-2 border-[#17130c] ${table.marker}`} />
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#6f583b]">{table.label}</p>
                  <h4 className="break-words text-xl font-black">{table.title}</h4>
                </div>
              </div>

              <div className="border-b-2 border-[#17130c] bg-[#ffe130] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em]">Struktur</p>
                <p className="mt-1 font-black">{table.structure}</p>
              </div>

              <div className="max-w-full overflow-x-auto">
                <table className="w-full min-w-[320px] border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border-b-2 border-r border-[#17130c] bg-[#17130c] px-3 py-2 text-left font-black text-white">
                        Conector
                      </th>
                      <th className="border-b-2 border-[#17130c] bg-[#17130c] px-3 py-2 text-left font-black text-white">
                        Significado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map(([connector, meaning]) => (
                      <tr className="odd:bg-[#fffaf0] even:bg-[#fff3d8]" key={`${table.id}-${connector}`}>
                        <td className="border-r border-t border-[#17130c]/50 px-3 py-2 font-black">{connector}</td>
                        <td className="border-t border-[#17130c]/50 px-3 py-2 font-bold text-[#5f4d35]">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t-2 border-[#17130c] bg-[#fffaf0] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.14em]">Beispiele</p>
                <ul className="mt-2 space-y-2">
                  {table.examples.map((example) => (
                    <li className="border-l-4 border-[#ff7b2f] pl-3 text-sm font-bold leading-relaxed" key={example}>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 border-2 border-[#17130c] bg-[#17130c] p-4 text-white shadow-[5px_5px_0_#17130c]">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-white pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffe130]">
              Doppelkonnektoren
            </p>
            <h3 className="mt-1 text-2xl font-black">
              Paare, die du als Block lernen solltest
            </h3>
          </div>
          <span className="border-2 border-white bg-[#ff7b2f] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
            {doubleConnectors.length} Paare
          </span>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="grid gap-4 xl:grid-cols-2">
            {doubleConnectors.map((item) => (
              <article
                className="min-w-0 border-2 border-white bg-[#fffaf0] p-4 text-[#17130c] shadow-[3px_3px_0_#ffe130]"
                key={item.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xl font-black">{item.connector}</h4>
                  {item.priority && (
                    <span className="border border-[#17130c] bg-[#ffe130] px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em]">
                      TELC merken
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-black text-[#ff6d1a]">
                  ES: {item.meaning}
                </p>
                <p className="text-sm font-black text-[#5f4d35]">
                  EN: {item.meaningEn}
                </p>
                <div className="mt-3 border-2 border-[#17130c] bg-white p-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em]">
                    Formel
                  </p>
                  <p className="mt-1 text-sm font-black">{item.formula}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {item.examples.map((example) => (
                    <li
                      className="border-l-4 border-[#ff7b2f] bg-white px-3 py-2 text-sm font-bold leading-relaxed"
                      key={example}
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="h-fit border-2 border-white bg-[#ffe130] p-4 text-[#17130c] shadow-[4px_4px_0_#ff7b2f] lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[0.18em]">
              Für TELC B1 priorisieren
            </p>
            <h4 className="mt-2 text-2xl font-black">
              Diese vier zuerst:
            </h4>
            <ul className="mt-4 space-y-2">
              {doubleConnectors
                .filter((item) => item.priority)
                .map((item) => (
                  <li
                    className="border-2 border-[#17130c] bg-white px-3 py-2 text-sm font-black"
                    key={`priority-${item.id}`}
                  >
                    {item.connector}
                  </li>
                ))}
            </ul>
            <div className="mt-4 border-2 border-[#17130c] bg-white p-3">
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                Mini-Regel
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-[#5f4d35]">
                Lerne sie als feste Paare. Im Schreiben helfen sie dir, Sätze
                eleganter zu verbinden und Kontraste oder Alternativen klarer zu
                zeigen.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {telcConnectors.map((item, index) => (
            <article
              className="min-w-0 border-2 border-[#17130c] bg-white p-4 shadow-[4px_4px_0_#17130c]"
              key={item.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="border border-[#17130c] bg-[#17130c] px-2 py-1 text-[11px] font-black uppercase text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`border border-[#17130c] px-2 py-1 text-[11px] font-black uppercase ${groupAccent[item.group]}`}>
                  {item.group}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black">{item.connector}</h3>
              <p className="mt-1 text-sm font-black text-[#ff6d1a]">
                ES: {item.translation}
              </p>
              <p className="text-sm font-black text-[#5f4d35]">
                EN: {item.translationEn}
              </p>
              <div className="mt-4 border-2 border-[#17130c] bg-[#f8edd6] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em]">Formel</p>
                <p className="mt-1 text-sm font-black leading-relaxed">{item.formula}</p>
              </div>
              <p className="mt-3 text-sm font-bold text-[#5f4d35]">{item.hint}</p>
              <ul className="mt-4 space-y-2">
                {item.examples.map((example) => (
                  <li className="border-l-4 border-[#ff7b2f] bg-[#fffaf0] px-3 py-2 text-sm font-bold leading-relaxed" key={example}>
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="h-fit border-2 border-[#17130c] bg-[#ffe130] p-4 shadow-[5px_5px_0_#17130c] lg:sticky lg:top-32">
          <p className="text-xs font-black uppercase tracking-[0.18em]">Regel für TELC B1</p>
          <h3 className="mt-2 text-2xl font-black">Die Verbposition entscheidet.</h3>
          <div className="mt-4 space-y-3">
            {goldenRules.map((rule) => (
              <div className="border-2 border-[#17130c] bg-white p-3" key={rule.title}>
                <p className="text-sm font-black">{rule.title}</p>
                <p className="mt-2 text-sm font-bold leading-relaxed text-[#5f4d35]">
                  {rule.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
