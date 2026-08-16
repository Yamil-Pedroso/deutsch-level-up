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
      "Viele Korallenriffe sterben ab, weil steigende Wassertemperaturen ihr empfindliches Gleichgewicht zerstören.",
      "Die Ausstellung wirkt politisch, weil sie koloniale Erwerbsgeschichten offenlegt.",
      "Das Spiel überzeugt, weil es moralische Entscheidungen nicht künstlich vereinfacht.",
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
      "Die Restaurierung dauerte mehrere Jahre, denn die ursprünglichen Farbschichten waren stark beschädigt.",
      "Das Schutzgebiet muss erweitert werden, denn viele Tierarten verlieren ihre Wanderkorridore.",
      "Die Spielmechanik wirkt ungewöhnlich, denn sie belohnt nicht Effizienz, sondern Mitgefühl.",
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
      "Der Wald verliert zunehmend alte Bäume. Deshalb verschwinden auch viele spezialisierte Insektenarten.",
      "Die Quellenlage ist widersprüchlich. Deshalb formuliert die Historikerin ihre These sehr vorsichtig.",
      "Die virtuelle Ausstellung ist barrierefrei gestaltet. Deshalb erreicht sie ein deutlich breiteres Publikum.",
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
      "Die Spielwelt reagiert dynamisch auf jede Entscheidung. Deswegen fühlt sich moralisches Handeln konsequent bedeutsam an.",
      "Die Meerestemperaturen steigen weiter. Deswegen geraten viele Ökosysteme unter enormen Anpassungsdruck.",
      "Das Gemälde wurde mehrfach übermalt. Deswegen ist seine ursprüngliche Komposition schwer zu rekonstruieren.",
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
      "Die Debatte berührt grundlegende Freiheitsbegriffe. Darum lässt sie sich nicht auf eine technische Frage reduzieren.",
      "Der Lebensraum der Luchse ist stark fragmentiert. Darum müssen Schutzkorridore eingerichtet werden.",
      "Die Installation arbeitet mit irritierenden Geräuschen. Darum bleibt sie den Besuchern lange im Gedächtnis.",
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
      "Die Grafik des Spiels ist reduziert, aber die emotionale Wirkung der Handlung ist erstaunlich intensiv.",
      "Das Kunstwerk wirkt zunächst abstrakt, aber es verweist sehr konkret auf ökologische Zerstörung.",
      "Die Theorie ist elegant, aber sie erklärt menschliches Verhalten nur teilweise.",
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
      "Obwohl die Studie methodische Schwächen hat, liefert sie wichtige Hinweise zum Artensterben.",
      "Das Spiel bleibt spannend, obwohl es bewusst auf schnelle Belohnungssysteme verzichtet.",
      "Obwohl das Gemälde klein ist, eröffnet es einen komplexen Blick auf höfische Machtstrukturen.",
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
      "Die Datenlage ist unvollständig. Trotzdem lassen sich klare Trends im Verhalten der Tiere erkennen.",
      "Das Budget war knapp. Trotzdem entstand ein visuell und philosophisch anspruchsvolles Spiel.",
      "Die Ausstellung ist provokant. Trotzdem vermeidet sie vereinfachende moralische Urteile.",
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
      "Viele Philosophinnen argumentieren, dass Verantwortung nicht allein beim einzelnen Konsumenten beginnt.",
      "Die Kuratorin betont, dass jedes Objekt in seiner historischen Machtstruktur betrachtet werden muss.",
      "Forschende vermuten, dass Lichtverschmutzung das Verhalten nachtaktiver Tiere stärker beeinflusst als bisher angenommen.",
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
      "Wenn virtuelle Museen barrierefrei gestaltet werden, können mehr Menschen an kultureller Bildung teilhaben.",
      "Wenn Schutzgebiete nicht vernetzt werden, bleiben viele Tierpopulationen genetisch isoliert.",
      "Wenn ein Spiel echte Konsequenzen simuliert, wirkt seine moralische Botschaft glaubwürdiger.",
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
      "Als die Zentralperspektive in der Renaissance entwickelt wurde, veränderte sich das europäische Raumverständnis nachhaltig.",
      "Als die ersten erzählerischen Computerspiele erschienen, wurde Interaktivität zu einem neuen kulturellen Ausdrucksmittel.",
      "Als die industrielle Revolution begann, veränderte sich auch das philosophische Verhältnis zur Natur.",
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
      "Während die Spielfigur durch die Ruinen läuft, kommentiert der Erzähler die Zerbrechlichkeit historischer Erinnerung.",
      "Während die Restauratorin die Oberfläche reinigt, werden ältere Farbschichten sichtbar.",
      "Während der Klimakonferenz wurden die Interessen kleiner Inselstaaten besonders deutlich.",
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
      "Bevor ein Kunstwerk restituiert wird, prüfen Expertinnen seine Herkunftsgeschichte bis ins Detail.",
      "Bevor die Simulation startet, legt der Spieler seine politischen Prioritäten fest.",
      "Bevor Schutzmaßnahmen beschlossen werden, müssen lokale Ökosysteme sorgfältig untersucht werden.",
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
      "Nachdem die Forschenden die Satellitendaten ausgewertet hatten, veröffentlichten sie eine Studie zum Artenverlust.",
      "Nachdem das Museum die Provenienz des Objekts geklärt hatte, begann die Debatte über Restitution.",
      "Nachdem das Studio die Testversion veröffentlicht hatte, überarbeitete es mehrere ethisch problematische Spielentscheidungen.",
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
      "Die Ausstellung nutzt klare Audioguides, damit komplexe kunsthistorische Zusammenhänge verständlich bleiben.",
      "Die Stadt pflanzt heimische Bäume, damit Vögel und Insekten wieder geeignete Lebensräume finden.",
      "Das Spiel reduziert die Benutzeroberfläche, damit die moralische Unsicherheit stärker im Vordergrund steht.",
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
      "Die Künstlerin sammelt Plastikmüll, um die Verschmutzung der Meere sichtbar zu machen.",
      "Das Entwicklerteam verlangsamt das Spieltempo, um Reflexion statt bloßer Reaktion zu fördern.",
      "Die Forschenden markieren Wanderkorridore, um gefährdete Tierbewegungen genauer zu verstehen.",
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
      "Wegen der zunehmenden Lichtverschmutzung verlieren viele nachtaktive Tiere ihre Orientierung.",
      "Wegen unklarer Besitzverhältnisse wurde die Rückgabe des Kunstwerks jahrelang verzögert.",
      "Wegen technischer Einschränkungen musste das Studio mehrere erzählerische Ideen vereinfachen.",
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
      "Trotz erheblicher Budgetkürzungen entwickelte das Studio ein künstlerisch anspruchsvolles Spiel.",
      "Trotz politischer Widerstände wurde das Naturschutzgebiet erweitert.",
      "Trotz seiner abstrakten Form bleibt das Kunstwerk historisch präzise lesbar.",
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
      "Seitdem das Museum seine Provenienzforschung veröffentlicht, wird die Sammlung kritischer wahrgenommen.",
      "Seitdem die Stadt mehr Grünflächen vernetzt, kehren einige Vogelarten langsam zurück.",
      "Seitdem Spiele moralische Ambivalenz ernst nehmen, werden sie häufiger als Kunstform diskutiert.",
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
      "Die Kommission prüft, ob die geplanten Schutzmaßnahmen tatsächlich ausreichen.",
      "Die Kuratorin untersucht, ob das Werk während der Kolonialzeit unrechtmäßig erworben wurde.",
      "Viele Kritiker fragen sich, ob interaktive Medien philosophische Argumente überzeugend darstellen können.",
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
      "Das Spiel thematisiert Artensterben. Außerdem zeigt es, wie politische Entscheidungen ökologische Folgen verstärken.",
      "Die Ausstellung präsentiert Gemälde. Außerdem rekonstruiert sie die sozialen Bedingungen ihrer Entstehung.",
      "Der Essay analysiert Freiheit. Außerdem kritisiert er eine rein technische Vorstellung von Fortschritt.",
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
      "Da historische Bilder oft Machtverhältnisse spiegeln, müssen sie kritisch kontextualisiert werden.",
      "Da viele Tierarten grenzüberschreitend wandern, reichen nationale Schutzprogramme allein nicht aus.",
      "Da das Spiel mehrere Enden besitzt, bleibt die ethische Bewertung bewusst offen.",
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
      "Falls die Schutzgebiete nicht miteinander verbunden werden, bleiben viele Populationen genetisch isoliert.",
      "Falls die Provenienz ungeklärt bleibt, sollte das Objekt nicht ausgestellt werden.",
      "Falls die Spielmechanik moralische Folgen nur simuliert, verliert die Entscheidung an Gewicht.",
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
      "Die Simulation läuft weiter, bis alle ökologischen Wechselwirkungen sichtbar geworden sind.",
      "Die Debatte wird andauern, bis die Herkunft der Sammlung transparent geklärt ist.",
      "Das Spiel steigert den Druck, bis der Spieler seine ursprüngliche Strategie hinterfragt.",
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
      "Sobald die Daten veröffentlicht werden, können unabhängige Forschende die Ergebnisse überprüfen.",
      "Sobald das Museum die Archive öffnet, verändert sich die öffentliche Diskussion.",
      "Sobald die Spieler die Konsequenzen erkennen, wirkt die scheinbar einfache Entscheidung komplexer.",
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
      "Die Ausstellung wirkt politisch, weil sie koloniale Erwerbsgeschichten offenlegt.",
      "Obwohl die Simulation grafisch schlicht ist, erzeugt sie eine starke philosophische Wirkung.",
      "Viele Forschende vermuten, dass Lichtverschmutzung nachtaktive Tiere stark beeinflusst.",
      "Wenn virtuelle Museen barrierefrei gestaltet werden, erreicht kulturelle Bildung mehr Menschen.",
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
      "Der Wald verliert alte Bäume. Deshalb verschwinden spezialisierte Insektenarten.",
      "Die Spielwelt reagiert dynamisch. Deswegen fühlt sich jede Entscheidung bedeutsam an.",
      "Die Quellenlage ist widersprüchlich. Darum bleibt die Interpretation vorsichtig.",
      "Das Budget war knapp. Trotzdem entstand ein künstlerisch anspruchsvolles Spiel.",
      "Das Museum digitalisiert die Sammlung. Außerdem entwickelt es interaktive Vermittlungsformate.",
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
      "Das Museum digitalisiert die Sammlung, und die Kuratoren entwickeln neue Vermittlungsformate.",
      "Die Grafik wirkt schlicht, aber die moralische Wirkung der Handlung ist intensiv.",
      "Soll die Ausstellung chronologisch sein, oder soll sie thematische Konflikte zeigen?",
      "Die Restaurierung dauerte lange, denn die Farbschichten waren stark beschädigt.",
      "Die Installation kritisiert nicht Technik selbst, sondern unseren unreflektierten Umgang mit ihr.",
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
      "Wegen zunehmender Lichtverschmutzung verlieren nachtaktive Tiere ihre Orientierung.",
      "Trotz erheblicher Budgetkürzungen entwickelte das Studio ein anspruchsvolles Spiel.",
      "Während der Restaurierung wurden mehrere übermalte Symbole sichtbar.",
      "Statt einer linearen Chronologie wählt die Ausstellung eine thematische Struktur.",
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
      "Die Künstlerin sammelt Plastikmüll, um die Verschmutzung der Meere sichtbar zu machen.",
      "Das Studio reduziert die Benutzeroberfläche, um moralische Unsicherheit hervorzuheben.",
      "Die Forschenden markieren Wanderkorridore, um bedrohte Tierbewegungen besser zu verstehen.",
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
      "Das Spiel ist zwar grafisch reduziert, aber erzählerisch außergewöhnlich komplex.",
      "Die Ausstellung ist zwar provokant, aber kunsthistorisch präzise begründet.",
      "Die Maßnahme ist zwar teuer, aber ökologisch langfristig notwendig.",
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
      "Entweder schützt die Stadt die Grünflächen konsequent, oder sie verliert wichtige Lebensräume.",
      "Die Ausstellung konzentriert sich entweder auf die Provenienz der Werke oder auf ihre ästhetische Wirkung.",
      "Das Spiel zwingt die Figur entweder zum moralischen Kompromiss oder zum persönlichen Verlust.",
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
      "Die Theorie erklärt weder emotionale Bindung noch ästhetische Erfahrung vollständig.",
      "Das Spiel bietet weder einfache Helden noch eindeutige Feinde.",
      "Die Studie berücksichtigt weder lokale Traditionen noch langfristige Klimadaten ausreichend.",
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
      "Das Museum zeigt sowohl klassische Gemälde als auch interaktive Medienkunst.",
      "Das Spiel überzeugt sowohl durch seine Mechanik als auch durch seine philosophische Erzählstruktur.",
      "Der Bericht berücksichtigt sowohl ökologische Daten als auch soziale Folgen.",
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
      "Die Installation thematisiert nicht nur Umweltzerstörung, sondern auch kollektive Verantwortung.",
      "Das Spiel ist nicht nur Unterhaltung, sondern auch eine Reflexion über Freiheit.",
      "Die Ausstellung zeigt nicht nur Kunstwerke, sondern auch ihre politischen Entstehungsbedingungen.",
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
      "Je stärker der Meeresspiegel steigt, desto dringlicher werden internationale Schutzmaßnahmen.",
      "Je komplexer die Spielwelt reagiert, desto verantwortlicher fühlt sich der Spieler.",
      "Je genauer die Provenienz erforscht wird, desto schwieriger werden einfache Besitzansprüche.",
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
      "Einerseits eröffnet Digitalisierung neue Zugänge zur Kunst, andererseits verändert sie die Aura des Originals.",
      "Einerseits können Games Empathie fördern, andererseits bleiben sie Teil einer kommerziellen Unterhaltungsindustrie.",
      "Einerseits braucht Naturschutz klare Regeln, andererseits muss er lokale Lebensrealitäten berücksichtigen.",
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
      "Das Werk ist weder reine Dekoration noch bloße Provokation, sondern ein vielschichtiger Kommentar zur Gegenwart.",
      "Die Simulation zeigt weder Utopie noch Katastrophe, sondern eine fragile Zukunft voller Entscheidungen.",
      "Der Text verteidigt weder Fortschrittsoptimismus noch Kulturpessimismus, sondern eine verantwortliche Technikethik.",
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
