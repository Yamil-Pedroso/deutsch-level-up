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
      { de: "In zeitgenössischen Museen verbindet digitale Kunst klassische Bildkomposition mit interaktiven Spielerfahrungen.", es: "En los museos contemporáneos, el arte digital combina la composición visual clásica con experiencias interactivas propias de los videojuegos.", en: "In contemporary museums, digital art combines classical visual composition with interactive gaming experiences." },
      { de: "Viele Open-World-Spiele erzählen ökologische Konflikte, indem sie zerstörte Landschaften als moralische Warnung inszenieren.", es: "Muchos juegos de mundo abierto narran conflictos ecológicos al presentar paisajes destruidos como una advertencia moral.", en: "Many open-world games narrate ecological conflicts by staging destroyed landscapes as a moral warning." },
      { de: "Heute diskutieren Kunsthistoriker, ob künstliche Intelligenz lediglich Werkzeuge bereitstellt oder bereits eigenständige ästhetische Entscheidungen trifft.", es: "Hoy los historiadores del arte discuten si la inteligencia artificial solo proporciona herramientas o si ya toma decisiones estéticas propias.", en: "Today, art historians debate whether artificial intelligence merely provides tools or already makes independent aesthetic decisions." },
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
      { de: "Die Restauratorin hat die übermalten Farbschichten eines barocken Gemäldes mit mikroskopischer Genauigkeit freigelegt.", es: "La restauradora ha descubierto con precisión microscópica las capas de pintura sobrepintadas de un cuadro barroco.", en: "The restorer has uncovered the overpainted layers of a Baroque painting with microscopic precision." },
      { de: "Mehrere Indie-Studios haben Spielmechaniken entwickelt, die Empathie gegenüber bedrohten Tierarten fördern.", es: "Varios estudios independientes han desarrollado mecánicas de juego que fomentan la empatía hacia especies animales amenazadas.", en: "Several indie studios have developed game mechanics that encourage empathy toward endangered animal species." },
      { de: "Durch die Klimakrise sind viele Korallenriffe so stark beschädigt worden, dass ganze Ökosysteme ihr Gleichgewicht verloren haben.", es: "Debido a la crisis climática, muchos arrecifes de coral han sido dañados tan gravemente que ecosistemas enteros han perdido su equilibrio.", en: "Due to the climate crisis, many coral reefs have been damaged so severely that entire ecosystems have lost their balance." },
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
      { de: "Während der Renaissance veränderte die Zentralperspektive das europäische Verständnis von Raum, Wirklichkeit und menschlicher Wahrnehmung grundlegend.", es: "Durante el Renacimiento, la perspectiva central transformó profundamente la comprensión europea del espacio, la realidad y la percepción humana.", en: "During the Renaissance, linear perspective fundamentally changed the European understanding of space, reality, and human perception." },
      { de: "In den frühen Konsolenspielen entstanden bereits komplexe Welten, obwohl die technischen Mittel äußerst begrenzt waren.", es: "En los primeros videojuegos de consola ya surgieron mundos complejos, aunque los medios técnicos eran extremadamente limitados.", en: "In early console games, complex worlds already emerged, although the technical means were extremely limited." },
      { de: "Viele Philosophen der Aufklärung betrachteten Bildung als Voraussetzung dafür, dass Menschen politisch selbstständig urteilen konnten.", es: "Muchos filósofos de la Ilustración consideraban la educación como condición para que las personas pudieran juzgar políticamente de forma autónoma.", en: "Many Enlightenment philosophers regarded education as a prerequisite for people to judge politically on their own." },
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
      { de: "Nachdem der Biologe die Wanderwege der Wölfe jahrelang dokumentiert hatte, erkannte die Gemeinde den Wert zusammenhängender Schutzgebiete.", es: "Después de que el biólogo había documentado durante años las rutas migratorias de los lobos, la comunidad reconoció el valor de las áreas protegidas conectadas.", en: "After the biologist had documented the wolves' migration routes for years, the community recognized the value of connected protected areas." },
      { de: "Bevor das Museum die Ausstellung eröffnete, hatte das Kuratorenteam die Beziehung zwischen Surrealismus und Traumforschung neu interpretiert.", es: "Antes de que el museo inaugurara la exposición, el equipo curatorial había reinterpretado la relación entre el surrealismo y la investigación de los sueños.", en: "Before the museum opened the exhibition, the curatorial team had reinterpreted the relationship between Surrealism and dream research." },
      { de: "Als das Spiel veröffentlicht wurde, hatten die Entwickler bereits mehrere philosophische Enden eingebaut, die den freien Willen infrage stellten.", es: "Cuando el juego fue publicado, los desarrolladores ya habían incorporado varios finales filosóficos que cuestionaban el libre albedrío.", en: "When the game was released, the developers had already included several philosophical endings that questioned free will." },
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
      { de: "Künftige Ausstellungen werden vermutlich virtuelle Räume nutzen, in denen Besucher verlorene Bauwerke der Antike rekonstruieren können.", es: "Las exposiciones futuras probablemente utilizarán espacios virtuales en los que los visitantes podrán reconstruir edificios perdidos de la Antigüedad.", en: "Future exhibitions will probably use virtual spaces in which visitors can reconstruct lost buildings from antiquity." },
      { de: "Viele Städte werden ihre Umweltpolitik nur dann glaubwürdig verbessern, wenn sie Lebensräume für Tiere in die Stadtplanung integrieren.", es: "Muchas ciudades solo mejorarán su política ambiental de forma creíble si integran hábitats para animales en la planificación urbana.", en: "Many cities will improve their environmental policy credibly only if they integrate animal habitats into urban planning." },
      { de: "Narrative Videospiele werden zunehmend philosophische Fragen behandeln, ohne dabei auf spielerische Freiheit verzichten zu müssen.", es: "Los videojuegos narrativos abordarán cada vez más cuestiones filosóficas sin tener que renunciar a la libertad lúdica.", en: "Narrative video games will increasingly address philosophical questions without having to give up playful freedom." },
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
      { de: "Bis zum Ende des Jahrhunderts werden zahlreiche Küstenstädte ihre Museen gegen Überschwemmungen geschützt haben müssen.", es: "Para finales de siglo, numerosas ciudades costeras habrán tenido que proteger sus museos contra inundaciones.", en: "By the end of the century, numerous coastal cities will have had to protect their museums against flooding." },
      { de: "Wenn die nächste Konsolengeneration erscheint, werden viele Spieler bereits erlebt haben, wie künstliche Intelligenz Nebenfiguren glaubwürdiger macht.", es: "Cuando aparezca la próxima generación de consolas, muchos jugadores ya habrán experimentado cómo la inteligencia artificial vuelve más creíbles a los personajes secundarios.", en: "When the next console generation appears, many players will already have experienced how artificial intelligence makes supporting characters more believable." },
      { de: "In einigen Jahrzehnten werden Forschende hoffentlich nachgewiesen haben, welche Schutzmaßnahmen das Artensterben tatsächlich verlangsamt haben.", es: "Dentro de algunas décadas, los investigadores habrán demostrado, con suerte, qué medidas de protección han ralentizado realmente la extinción de especies.", en: "In a few decades, researchers will hopefully have proven which protective measures have actually slowed species extinction." },
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
      { de: "Die Kuratorin erklärte, das Gemälde sei nicht nur ein Porträt, sondern auch ein Kommentar zur politischen Macht seiner Zeit.", es: "La curadora explicó que el cuadro no era solo un retrato, sino también un comentario sobre el poder político de su época.", en: "The curator explained that the painting was not only a portrait but also a commentary on the political power of its time." },
      { de: "Der Entwickler betonte, das Spiel habe bewusst auf Gewalt verzichtet, um moralische Entscheidungen stärker in den Vordergrund zu rücken.", es: "El desarrollador subrayó que el juego había renunciado conscientemente a la violencia para destacar más las decisiones morales.", en: "The developer emphasized that the game had deliberately avoided violence in order to bring moral decisions more strongly to the foreground." },
      { de: "Die Biologin berichtete, die Population der Luchse nehme langsam zu, sofern die Schutzkorridore erhalten blieben.", es: "La bióloga informó que la población de linces aumentaba lentamente siempre que se conservaran los corredores de protección.", en: "The biologist reported that the lynx population was slowly increasing, provided that the protection corridors were preserved." },
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
      { de: "Wenn Museen ihre Sammlungen vollständig digitalisieren würden, könnten auch Menschen in abgelegenen Regionen an kunsthistorischer Bildung teilhaben.", es: "Si los museos digitalizaran completamente sus colecciones, también las personas en regiones remotas podrían participar en la educación de historia del arte.", en: "If museums fully digitized their collections, people in remote regions could also take part in art-historical education." },
      { de: "Wäre der Schutz der Meere politisch verbindlicher, hätten viele Tierarten bessere Chancen, sich langfristig zu erholen.", es: "Si la protección de los mares fuera políticamente más vinculante, muchas especies animales tendrían mejores oportunidades de recuperarse a largo plazo.", en: "If ocean protection were more politically binding, many animal species would have better chances of recovering in the long term." },
      { de: "Könnten narrative Spiele philosophische Dilemmata noch feiner darstellen, würden sie vermutlich stärker als ernsthafte Kunstform anerkannt.", es: "Si los juegos narrativos pudieran representar dilemas filosóficos con más sutileza, probablemente serían reconocidos más como una forma de arte seria.", en: "If narrative games could portray philosophical dilemmas even more subtly, they would probably be recognized more strongly as a serious art form." },
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
      { de: "Analysiere die Lichtführung dieses Gemäldes, bevor du seine symbolische Wirkung beurteilst!", es: "¡Analiza la dirección de la luz de este cuadro antes de evaluar su efecto simbólico!", en: "Analyze the lighting of this painting before judging its symbolic effect!" },
      { de: "Vergleichen Sie die Spielmechanik mit der moralischen Aussage der Handlung!", es: "¡Compare la mecánica del juego con el mensaje moral de la trama!", en: "Compare the game mechanics with the moral message of the plot!" },
      { de: "Schützt die Lebensräume der Tiere, statt nur über Nachhaltigkeit zu sprechen!", es: "¡Proteged los hábitats de los animales en lugar de limitaros a hablar de sostenibilidad!", en: "Protect animal habitats instead of merely talking about sustainability!" },
      { de: "Denken wir genauer darüber nach, was Freiheit in einer technisch gesteuerten Welt bedeutet!", es: "¡Pensemos con más precisión qué significa la libertad en un mundo controlado por la tecnología!", en: "Let us think more carefully about what freedom means in a technologically controlled world!" },
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
      { de: "Die Kunsthistorikerin vergleicht mittelalterliche Tierdarstellungen mit modernen Umweltinstallationen.", es: "La historiadora del arte compara representaciones medievales de animales con instalaciones ambientales modernas.", en: "The art historian compares medieval animal depictions with modern environmental installations." },
      { de: "Das Entwicklerteam entwirft eine Spielwelt, in der jede ökologische Entscheidung langfristige Folgen hat.", es: "El equipo de desarrollo diseña un mundo de juego en el que cada decisión ecológica tiene consecuencias a largo plazo.", en: "The development team designs a game world in which every ecological decision has long-term consequences." },
      { de: "Der Philosoph hinterfragt die Vorstellung, dass technischer Fortschritt automatisch zu menschlicher Freiheit führt.", es: "El filósofo cuestiona la idea de que el progreso técnico conduzca automáticamente a la libertad humana.", en: "The philosopher questions the idea that technological progress automatically leads to human freedom." },
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
      { de: "Die Höhlenmalereien werden mit neuen Bildverfahren untersucht, damit ihre ursprünglichen Pigmente genauer bestimmt werden können.", es: "Las pinturas rupestres son investigadas con nuevos métodos de imagen para que sus pigmentos originales puedan determinarse con mayor precisión.", en: "The cave paintings are being examined with new imaging methods so that their original pigments can be identified more precisely." },
      { de: "Das Naturschutzgebiet wurde erweitert, nachdem mehrere seltene Vogelarten dort wieder nachgewiesen worden waren.", es: "La reserva natural fue ampliada después de que se hubieran detectado allí nuevamente varias especies raras de aves.", en: "The nature reserve was expanded after several rare bird species had been documented there again." },
      { de: "Die Spielmechanik ist von Kritikern gelobt worden, weil sie ethische Entscheidungen nicht vereinfacht, sondern bewusst offenhält.", es: "La mecánica del juego ha sido elogiada por la crítica porque no simplifica las decisiones éticas, sino que las mantiene deliberadamente abiertas.", en: "The game mechanics have been praised by critics because they do not simplify ethical decisions but deliberately keep them open." },
      { de: "Viele bedrohte Lebensräume werden künftig strenger überwacht werden, wenn internationale Abkommen tatsächlich umgesetzt werden.", es: "Muchos hábitats amenazados serán vigilados con mayor rigor en el futuro si los acuerdos internacionales se implementan realmente.", en: "Many endangered habitats will be monitored more strictly in the future if international agreements are actually implemented." },
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
      { de: "Der virtuelle Ausstellungsraum ist so gestaltet, dass Besucher zwischen Renaissance, Impressionismus und digitaler Kunst wechseln können.", es: "La sala de exposición virtual está diseñada de tal manera que los visitantes pueden alternar entre Renacimiento, impresionismo y arte digital.", en: "The virtual exhibition space is designed so that visitors can switch between the Renaissance, Impressionism, and digital art." },
      { de: "Das Schutzgebiet ist inzwischen erweitert, doch viele Wanderwege der Tiere sind weiterhin unterbrochen.", es: "La zona protegida ya está ampliada, pero muchas rutas migratorias de los animales siguen interrumpidas.", en: "The protected area has now been expanded, but many animal migration routes are still interrupted." },
      { de: "Die philosophische Frage nach Verantwortung ist im Spiel nicht gelöst, sondern bewusst in mehrere widersprüchliche Enden eingebettet.", es: "La cuestión filosófica de la responsabilidad no está resuelta en el juego, sino integrada deliberadamente en varios finales contradictorios.", en: "The philosophical question of responsibility is not resolved in the game but deliberately embedded in several contradictory endings." },
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
      { de: "Ein Museum kann historische Gewalt sichtbar machen, ohne sie ästhetisch zu verherrlichen.", es: "Un museo puede hacer visible la violencia histórica sin glorificarla estéticamente.", en: "A museum can make historical violence visible without aesthetically glorifying it." },
      { de: "Entwickler müssen entscheiden, ob ein Spiel bloß unterhalten oder auch ökologische Verantwortung erfahrbar machen soll.", es: "Los desarrolladores deben decidir si un juego solo debe entretener o también hacer experimentable la responsabilidad ecológica.", en: "Developers must decide whether a game should merely entertain or also make ecological responsibility tangible." },
      { de: "Philosophische Debatten dürfen komplex bleiben, solange ihre zentralen Begriffe klar erklärt werden.", es: "Los debates filosóficos pueden seguir siendo complejos siempre que sus conceptos centrales se expliquen con claridad.", en: "Philosophical debates may remain complex as long as their central concepts are clearly explained." },
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
      { de: "Die Forschenden haben die Wanderungen der Meeresschildkröten über mehrere Jahre hinweg dokumentieren müssen.", es: "Los investigadores tuvieron que documentar durante varios años las migraciones de las tortugas marinas.", en: "The researchers had to document the migrations of sea turtles over several years." },
      { de: "Das Studio hat die philosophischen Dialoge kürzen müssen, damit der Spielfluss nicht völlig unterbrochen wurde.", es: "El estudio tuvo que acortar los diálogos filosóficos para que el flujo del juego no se interrumpiera por completo.", en: "The studio had to shorten the philosophical dialogues so that the flow of the game was not completely interrupted." },
      { de: "Die Restauratoren haben einzelne Pigmente erst nach chemischen Analysen eindeutig zuordnen können.", es: "Los restauradores solo pudieron identificar con claridad ciertos pigmentos después de análisis químicos.", en: "The restorers were able to identify certain pigments clearly only after chemical analyses." },
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
      { de: "Die Künstlerin nutzt recycelte Materialien, um die Zerbrechlichkeit mariner Ökosysteme sichtbar zu machen.", es: "La artista utiliza materiales reciclados para hacer visible la fragilidad de los ecosistemas marinos.", en: "The artist uses recycled materials in order to make the fragility of marine ecosystems visible." },
      { de: "Das Spiel führt die Spieler durch eine zerstörte Stadt, ohne eindeutige moralische Antworten vorzugeben.", es: "El juego guía a los jugadores por una ciudad destruida sin imponer respuestas morales claras.", en: "The game leads players through a destroyed city without prescribing clear moral answers." },
      { de: "Statt Geschichte nur chronologisch zu erzählen, verknüpft die Ausstellung Kunstwerke mit politischen Umbrüchen und philosophischen Ideen.", es: "En lugar de contar la historia solo de forma cronológica, la exposición vincula obras de arte con cambios políticos e ideas filosóficas.", en: "Instead of telling history only chronologically, the exhibition connects artworks with political upheavals and philosophical ideas." },
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
      { de: "die durch Klimawandel bedrohten Tierarten", es: "las especies animales amenazadas por el cambio climático", en: "the animal species threatened by climate change" },
      { de: "die in Licht und Schatten aufgelöste Figur des Barockgemäldes", es: "la figura del cuadro barroco disuelta en luz y sombra", en: "the figure of the Baroque painting dissolved in light and shadow" },
      { de: "eine moralisch herausfordernde Spielentscheidung", es: "una decisión de juego moralmente desafiante", en: "a morally challenging game decision" },
      { de: "die von Philosophen immer wieder gestellte Frage nach Wahrheit", es: "la pregunta por la verdad planteada una y otra vez por filósofos", en: "the question of truth repeatedly posed by philosophers" },
    ],
  },
];

const comparisonTables = [
  {
    title: "All tenses",
    headers: ["Form", "Formula", "Example"],
    rows: [
      ["Präsens", "konjugiertes Verb", "Das Spiel hinterfragt die Grenze zwischen Freiheit und Manipulation."],
      ["Perfekt", "haben/sein + Partizip II", "Die Restauratorin hat die ursprünglichen Farbschichten freigelegt."],
      ["Präteritum", "Verb im Präteritum", "Die Renaissance veränderte den Blick auf Raum und Wirklichkeit."],
      ["Plusquamperfekt", "hatte/war + Partizip II", "Das Museum hatte die Sammlung digitalisiert, bevor die Ausstellung eröffnet wurde."],
      ["Futur I", "werden + Infinitiv", "Künftige Spiele werden ökologische Folgen stärker erfahrbar machen."],
      ["Futur II", "werden + Partizip II + haben/sein", "Bis dahin werden Forschende viele Tierwanderungen genauer dokumentiert haben."],
    ],
  },
  {
    title: "Passive forms",
    headers: ["Form", "Formula", "Example"],
    rows: [
      ["Präsens Passiv", "wird + Partizip II", "Die Höhlenmalerei wird mit Lasertechnik untersucht."],
      ["Präteritum Passiv", "wurde + Partizip II", "Das Schutzgebiet wurde nach langen Debatten erweitert."],
      ["Perfekt Passiv", "ist + Partizip II + worden", "Die Spielmechanik ist von Kritikern ausführlich analysiert worden."],
      ["Plusquamperfekt Passiv", "war + Partizip II + worden", "Die Skulptur war vor der Auktion mehrfach restauriert worden."],
      ["Futur I Passiv", "wird + Partizip II + werden", "Der Lebensraum seltener Arten wird künftig strenger geschützt werden."],
      ["Futur II Passiv", "wird + Partizip II + worden sein", "Das Archiv wird bis 2030 vollständig digitalisiert worden sein."],
    ],
  },
  {
    title: "Konjunktiv I vs Konjunktiv II",
    headers: ["Mood", "Use", "Example"],
    rows: [
      ["Konjunktiv I", "indirect speech", "Die Kuratorin sagte, das Werk sei politisch unterschätzt worden."],
      ["Konjunktiv II", "wishes, politeness, hypothetical situations", "Wenn Spiele ernster genommen würden, könnten sie stärker als Kunstform gelten."],
    ],
  },
  {
    title: "Aktiv vs Passiv",
    headers: ["Voice", "Focus", "Example"],
    rows: [
      ["Aktiv", "person doing the action", "Die Forscher dokumentieren das Verhalten der Wölfe."],
      ["Passiv", "action / result", "Das Verhalten der Wölfe wird dokumentiert."],
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
    task: "Die Kuratorin ___ die Symbolik des Gemäldes bereits vor der Eröffnung neu interpretiert.",
    answer: "hatte",
  },
  {
    title: "Convert Präsens to Perfekt",
    task: "Das Studio entwickelt ein philosophisch komplexes Spiel. →",
    answer: "Das Studio hat ein philosophisch komplexes Spiel entwickelt.",
  },
  {
    title: "Transform Aktiv to Passiv",
    task: "Die Biologen schützen die Wanderwege bedrohter Tiere. →",
    answer: "Die Wanderwege bedrohter Tiere werden geschützt.",
  },
  {
    title: "Build Konjunktiv II",
    task: "Wenn Museen mehr digitale Archive hätten, ...",
    answer: "würden mehr Menschen Zugang zu Kunstgeschichte bekommen.",
  },
  {
    title: "Complete Futur I / Futur II",
    task: "Bis 2040 ___ viele Städte ihre Grünflächen vernetzt haben.",
    answer: "werden",
  },
  {
    title: "Use modal verbs",
    task: "Narrative Spiele ___ moralische Konflikte sichtbar machen.",
    answer: "können",
  },
  {
    title: "Infinitive constructions",
    task: "Die Künstlerin sammelt Plastik, ___ die Verschmutzung der Meere sichtbar zu machen.",
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
