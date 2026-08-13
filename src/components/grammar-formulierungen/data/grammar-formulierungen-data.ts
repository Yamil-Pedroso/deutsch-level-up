import type { GrammarChapter } from "../types/grammar-formulierungen-types";
import assets from "../../../assets";

export const grammarChapters: GrammarChapter[] = [
  {
    id: "kapitel-1",
    label: "Kapitel 1",
    title: "Zeit und Zeitvertreib",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.zeitZeitvertrieb,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Sich und andere vorstellen",
          "Den Tagesablauf beschreiben",
          "Über Tätigkeiten berichten",
          "Über Zeit, Zeitverschwendung und Pünktlichkeit sprechen",
          "Sich über Museumsangebote informieren",
          "Eine Grafik beschreiben",
          "Eine Auswahl treffen",
          "Über Bilder und bildende Kunst sprechen",
          "Auf eine Einladung zu einer Veranstaltung reagieren",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Angaben zur Person",
          "Tagesablauf",
          "Tätigkeiten",
          "Zeit",
          "Museen",
          "Kunst",
        ],
      },
    ],
    resources: [
      {
        id: "kapitel-1-zeitadverbien",
        title: "Zeitadverbien: Vergangenheit, Gegenwart und Zukunft",
        type: "table",
        note: "Nützliche Zeitwörter für Erzählungen, Tagesabläufe und Zukunftspläne.",
        sections: [
          {
            title: "Zeit ausdrücken",
            prompt:
              "Diese Wörter helfen dir, Sätze zeitlich klar einzuordnen: Was war? Was ist jetzt? Was kommt später?",
            headers: ["Vergangenheit", "Gegenwart", "Zukunft"],
            rows: [
              {
                question: "gestern",
                structure: "heute",
                example: "morgen",
                cells: [
                  "gestern - ES: ayer | EN: yesterday",
                  "heute - ES: hoy | EN: today",
                  "morgen - ES: mañana | EN: tomorrow",
                ],
              },
              {
                question: "vorhin",
                structure: "momentan",
                example: "bald",
                cells: [
                  "vorhin - ES: hace un rato | EN: earlier / just now",
                  "momentan - ES: actualmente / en este momento | EN: currently / at the moment",
                  "bald - ES: pronto | EN: soon",
                ],
              },
              {
                question: "früher",
                structure: "heutzutage",
                example: "demnächst",
                cells: [
                  "früher - ES: antes / antiguamente | EN: formerly / in the past",
                  "heutzutage - ES: hoy en día | EN: nowadays",
                  "demnächst - ES: próximamente | EN: soon / shortly",
                ],
              },
              {
                question: "damals",
                structure: "jetzt",
                example: "künftig",
                cells: [
                  "damals - ES: en aquel entonces | EN: back then",
                  "jetzt - ES: ahora | EN: now",
                  "künftig - ES: en el futuro | EN: in future / from now on",
                ],
              },
              {
                question: "neulich",
                structure: "nun",
                example: "nachher",
                cells: [
                  "neulich - ES: hace poco | EN: recently / the other day",
                  "nun - ES: ahora | EN: now",
                  "nachher - ES: después / luego | EN: afterwards / later",
                ],
              },
              {
                question: "kürzlich",
                structure: "gegenwärtig",
                example: "später",
                cells: [
                  "kürzlich - ES: recientemente | EN: recently",
                  "gegenwärtig - ES: actualmente / en el presente | EN: currently / at present",
                  "später - ES: más tarde | EN: later",
                ],
              },
              {
                question: "einst",
                structure: "-",
                example: "gleich",
                cells: [
                  "einst - ES: una vez / en otro tiempo | EN: once / formerly",
                  "-",
                  "gleich - ES: enseguida / ahora mismo | EN: right away / in a moment",
                ],
              },
              {
                question: "-",
                structure: "-",
                example: "sofort",
                cells: [
                  "-",
                  "-",
                  "sofort - ES: inmediatamente | EN: immediately",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-1-temporale-praepositionen",
        title: "Temporale Präpositionen",
        type: "table",
        note: "Zeitpunkt: Wann? Zeitdauer: Wie lange?",
        sections: [
          {
            title: "Zeitpunkt: Wann?",
            prompt: "Wann treffen wir uns?",
            rows: [
              {
                question: "Wann treffen wir uns?",
                structure: "um + A",
                example: "um 8.00 Uhr",
              },
              {
                question: "",
                structure: "an + D",
                example:
                  "am Montag / am 8. Januar (Tag), am Morgen (Tageszeit), am Wochenende",
              },
              {
                question: "",
                structure: "in + D",
                example:
                  "im Januar (Monat), im Winter (Jahreszeit), im Moment / Augenblick, in zwei Wochen",
              },
              {
                question: "",
                structure: "-",
                example: "2012 (Jahr)",
              },
              {
                question: "",
                structure: "vor + D",
                example: "vor dem Essen",
              },
              {
                question: "",
                structure: "nach + D",
                example: "nach dem Essen",
              },
              {
                question: "",
                structure: "zwischen + D",
                example: "zwischen 9.00 und 10.00 Uhr",
              },
              {
                question: "",
                structure: "bei + D",
                example: "bei dem (beim) Essen",
              },
              {
                question: "",
                structure: "während + G",
                example: "während des Essens / der Konferenz",
              },
              {
                question: "",
                structure: "zu + D",
                example: "zu deiner Geburtstagsfeier",
              },
            ],
          },
          {
            title: "Zeitdauer: Wie lange?",
            prompt:
              "Wie lange haben Sie Zeit? Wie lange dauert das Seminar? Seit wann arbeiten Sie schon hier?",
            rows: [
              {
                question: "Wie lange haben Sie Zeit?",
                structure: "von + D ... bis + A ...",
                example: "von 9.00 bis 12.00 Uhr",
              },
              {
                question: "Wie lange dauert das Seminar?",
                structure: "vom ... bis zum ...",
                example: "vom 2.2. bis zum 13.5.",
              },
              {
                question: "Seit wann arbeiten Sie schon hier?",
                structure: "seit + D",
                example: "seit September",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-1-unregelmaessige-verben",
        title: "Kleines Wörterbuch der Verben",
        type: "verbs",
        note: "Unregelmäßige Verben: Formen in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "abschließen (ein Studium)",
            praesens: "er schließt ab",
            praeteritum: "er schloss ab",
            perfekt: "er hat abgeschlossen",
            translation: "terminar / concluir unos estudios",
          },
          {
            infinitiv: "anfangen",
            praesens: "er fängt an",
            praeteritum: "er fing an",
            perfekt: "er hat angefangen",
            translation: "empezar / comenzar",
          },
          {
            infinitiv: "aufwachsen",
            praesens: "er wächst auf",
            praeteritum: "er wuchs auf",
            perfekt: "er ist aufgewachsen",
            translation: "crecer / criarse",
          },
          {
            infinitiv: "beginnen",
            praesens: "er beginnt",
            praeteritum: "er begann",
            perfekt: "er hat begonnen",
            translation: "comenzar / iniciar",
          },
          {
            infinitiv: "brennen (ein Haus)",
            praesens: "es brennt",
            praeteritum: "es brannte",
            perfekt: "es hat gebrannt",
            translation: "arder / estar en llamas",
          },
          {
            infinitiv: "bringen",
            praesens: "er bringt",
            praeteritum: "er brachte",
            perfekt: "er hat gebracht",
            translation: "traer / llevar",
          },
          {
            infinitiv: "denken",
            praesens: "er denkt",
            praeteritum: "er dachte",
            perfekt: "er hat gedacht",
            translation: "pensar",
          },
          {
            infinitiv: "erhalten",
            praesens: "er erhält",
            praeteritum: "er erhielt",
            perfekt: "er hat erhalten",
            translation: "recibir / obtener",
          },
          {
            infinitiv: "essen",
            praesens: "er isst",
            praeteritum: "er aß",
            perfekt: "er hat gegessen",
            translation: "comer",
          },
          {
            infinitiv: "fahren",
            praesens: "er fährt",
            praeteritum: "er fuhr",
            perfekt: "er ist gefahren",
            translation: "ir / viajar en vehículo / conducir",
          },
          {
            infinitiv: "fernsehen",
            praesens: "er sieht fern",
            praeteritum: "er sah fern",
            perfekt: "er hat ferngesehen",
            translation: "ver televisión",
          },
          {
            infinitiv: "finden",
            praesens: "er findet",
            praeteritum: "er fand",
            perfekt: "er hat gefunden",
            translation: "encontrar",
          },
          {
            infinitiv: "geben",
            praesens: "er gibt",
            praeteritum: "er gab",
            perfekt: "er hat gegeben",
            translation: "dar",
          },
          {
            infinitiv: "gehen",
            praesens: "er geht",
            praeteritum: "er ging",
            perfekt: "er ist gegangen",
            translation: "ir / caminar",
          },
          {
            infinitiv: "heißen",
            praesens: "er heißt",
            praeteritum: "er hieß",
            perfekt: "er hat geheißen",
            translation: "llamarse / significar",
          },
          {
            infinitiv: "kennen",
            praesens: "er kennt",
            praeteritum: "er kannte",
            perfekt: "er hat gekannt",
            translation: "conocer",
          },
          {
            infinitiv: "lesen",
            praesens: "er liest",
            praeteritum: "er las",
            perfekt: "er hat gelesen",
            translation: "leer",
          },
          {
            infinitiv: "nehmen",
            praesens: "er nimmt",
            praeteritum: "er nahm",
            perfekt: "er hat genommen",
            translation: "tomar / coger",
          },
          {
            infinitiv: "nennen (einen Namen)",
            praesens: "er nennt",
            praeteritum: "er nannte",
            perfekt: "er hat genannt",
            translation: "nombrar / llamar",
          },
          {
            infinitiv: "schlafen",
            praesens: "er schläft",
            praeteritum: "er schlief",
            perfekt: "er hat geschlafen",
            translation: "dormir",
          },
          {
            infinitiv: "schreiben",
            praesens: "er schreibt",
            praeteritum: "er schrieb",
            perfekt: "er hat geschrieben",
            translation: "escribir",
          },
          {
            infinitiv: "sein",
            praesens: "er ist",
            praeteritum: "er war",
            perfekt: "er ist gewesen",
            translation: "ser / estar",
          },
          {
            infinitiv: "sitzen",
            praesens: "er sitzt",
            praeteritum: "er saß",
            perfekt: "er hat gesessen",
            translation: "estar sentado",
          },
          {
            infinitiv: "sprechen",
            praesens: "er spricht",
            praeteritum: "er sprach",
            perfekt: "er hat gesprochen",
            translation: "hablar",
          },
          {
            infinitiv: "stattfinden (die Ausstellung)",
            praesens: "sie findet statt",
            praeteritum: "sie fand statt",
            perfekt: "sie hat stattgefunden",
            translation: "tener lugar / celebrarse",
          },
          {
            infinitiv: "(auf)stehen",
            praesens: "er steht (auf)",
            praeteritum: "er stand (auf)",
            perfekt: "er hat gestanden / er ist aufgestanden",
            translation: "estar de pie / levantarse",
          },
          {
            infinitiv: "teilnehmen",
            praesens: "er nimmt teil",
            praeteritum: "er nahm teil",
            perfekt: "er hat teilgenommen",
            translation: "participar",
          },
          {
            infinitiv: "treffen",
            praesens: "er trifft",
            praeteritum: "er traf",
            perfekt: "er hat getroffen",
            translation: "encontrar / reunirse con alguien",
          },
          {
            infinitiv: "umziehen (in eine andere Stadt)",
            praesens: "er zieht um",
            praeteritum: "er zog um",
            perfekt: "er ist umgezogen",
            translation: "mudarse",
          },
          {
            infinitiv: "wissen",
            praesens: "er weiß",
            praeteritum: "er wusste",
            perfekt: "er hat gewusst",
            translation: "saber",
          },
        ],
      },
    ],
  },
  {
    id: "kapitel-2",
    label: "Kapitel 2",
    title: "Arbeit und Beruf",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.arbeitBeruf,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Berufe, berufliche Tätigkeiten, Fähigkeiten und Eigenschaften sprechen",
          "Den eigenen Beruf beschreiben, Vor- und Nachteile benennen",
          "Die eigene Meinung äußern",
          "Vorschläge unterbreiten",
          "Termine vereinbaren und absagen",
          "Telefonisch Informationen erfragen und geben",
          "Informationen weiterleiten",
          "Über Umgangsformen im Beruf berichten",
          "Smalltalk führen",
          "Einen kurzen Text über die Arbeit schreiben",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Berufe",
          "Berufliche Tätigkeiten",
          "Meinungsäußerung",
          "Termine",
          "Telefonieren",
          "Berufliche Umgangsformen",
        ],
      },
    ],
    resources: [
      {
        id: "kapitel-2-hoefliche-bitte-konjunktiv-ii",
        title: "Die höfliche Bitte im Konjunktiv II",
        type: "table",
        note: "Diese Form ist vor allem im Geschäftsleben üblich.",
        sections: [
          {
            title: "Wiederholung",
            prompt: "Höfliche Bitten mit Konjunktiv II formulieren",
            headers: ["Formulierung", "Konjunktiv II", "Erklärung"],
            rows: [
              {
                question: "Wie wäre es um 11.30 Uhr?",
                structure: "wäre",
                example: "Konjunktiv II von sein",
              },
              {
                question: "Ich hätte noch eine Frage.",
                structure: "hätte",
                example: "Konjunktiv II von haben",
              },
              {
                question: "Könnte ich bitte Herrn Schulze sprechen?",
                structure: "könnte",
                example: "Konjunktiv II von können",
              },
              {
                question: "Würde es Ihnen am Donnerstag passen?",
                structure: "würde + passen",
                example: "Konjunktiv II von passen",
              },
            ],
          },
          {
            title: "Regel",
            prompt:
              "Wenn Sie den Konjunktiv II verwenden, klingt die Bitte sehr höflich.",
            headers: ["Regel", "Form", "Verwendung"],
            rows: [
              {
                question:
                  "Die meisten Verben bilden den Konjunktiv II mit würde + Infinitiv.",
                structure: "würde + Infinitiv",
                example: "Besonders üblich im Geschäftsleben.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-2-nicht-muessen-nicht-brauchen",
        title: "nicht müssen / nicht brauchen",
        type: "table",
        sections: [
          {
            title: "Bedeutung und Beispiele",
            prompt: "Pflicht, Negation und Einschränkung unterscheiden",
            headers: ["Form", "Beispiele", "Bedeutung"],
            rows: [
              {
                question: "müssen",
                structure:
                  "Du musst noch die Rechnung bezahlen. Ich muss die Tabletten nehmen.",
                example: "positiv",
              },
              {
                question: "nicht müssen",
                structure:
                  "Du musst die Rechnung nicht bezahlen. Ich muss keine Tabletten nehmen.",
                example: "negativ",
              },
              {
                question: "nicht brauchen + zu",
                structure:
                  "Du brauchst die Rechnung nicht zu bezahlen. Ich brauche keine Tabletten zu nehmen.",
                example: "negativ",
              },
              {
                question: "nur + müssen / nur + brauchen + zu",
                structure:
                  "Du musst nur eine Seite schreiben. Du brauchst nur eine Seite zu schreiben.",
                example: "Einschränkung",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-2-muessen-sollen",
        title: "müssen / sollen",
        type: "table",
        sections: [
          {
            title: "Modalverben im Gebrauch",
            prompt: "Pflicht, Auftrag, Weiterleitung und Empfehlung",
            headers: ["Modalverb", "Beispiele", "Bedeutung"],
            rows: [
              {
                question: "müssen",
                structure:
                  "Mein Auto stand im Parkverbot. Ich muss 50 Euro Strafe zahlen. Ich muss heute länger arbeiten.",
                example: "Pflicht / Notwendigkeit",
              },
              {
                question: "sollen",
                structure:
                  "Ich soll heute länger arbeiten. (Herr Weber hat das gesagt.)",
                example: "Auftrag",
              },
              {
                question: "sollen",
                structure:
                  "Frau Körner hat angerufen. Du sollst sie zurückrufen.",
                example: "Weiterleitung eines Auftrages",
              },
              {
                question: "sollen",
                structure: "Soll ich das Dokument kopieren?",
                example: "Frage nach dem Wunsch einer anderen Person",
              },
              {
                question: "sollen",
                structure: "Du solltest mal einen Sprachkurs besuchen.",
                example: "Empfehlung (im Konjunktiv II)",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-2-modalverben-wiederholung",
        title: "können / dürfen / wollen / mögen / möchte(n)",
        type: "table",
        note: "Wiederholung der Modalverben und ihrer typischen Bedeutungen.",
        sections: [
          {
            title: "Modalverben: Wiederholung",
            prompt: "Fähigkeit, Erlaubnis, Absicht, Vorliebe und Wunsch",
            headers: ["Modalverb", "Beispiele", "Bedeutung"],
            rows: [
              {
                question: "können",
                structure:
                  "Ich kann sehr gut Tennis spielen. Du kannst jetzt duschen.",
                example: "Fähigkeit / Gelegenheit",
              },
              {
                question: "dürfen",
                structure:
                  "Man darf nur in der Raucherecke rauchen. Darf ich hier mal telefonieren?",
                example: "Erlaubnis / höfliche Frage",
              },
              {
                question: "wollen",
                structure: "Ich will mir ein neues Auto kaufen.",
                example: "Absicht",
              },
              {
                question: "mögen",
                structure:
                  "Ich mag Vanilleeis mit heißen Himbeeren. Ich mag meinen neuen Chef nicht.",
                example: "Vorliebe / Antipathie",
              },
              {
                question: "möchte(n)",
                structure: "Ich möchte gern ein Doppelzimmer reservieren.",
                example: "Wunsch",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-2-verbtabellen-modalverben",
        title: "Kleines Wörterbuch der Verben: Modalverben",
        type: "verbs",
        note: "Modalverben in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "dürfen",
            praesens: "sie darf",
            praeteritum: "sie durfte",
            perfekt: "sie hat gedurft",
            translation: "poder / tener permiso",
          },
          {
            infinitiv: "können",
            praesens: "sie kann",
            praeteritum: "sie konnte",
            perfekt: "sie hat gekonnt",
            translation: "poder / saber hacer",
          },
          {
            infinitiv: "mögen",
            praesens: "sie mag",
            praeteritum: "sie mochte",
            perfekt: "sie hat gemocht",
            translation: "gustar / querer",
          },
          {
            infinitiv: "müssen",
            praesens: "sie muss",
            praeteritum: "sie musste",
            perfekt: "sie hat gemusst",
            translation: "tener que / deber",
          },
          {
            infinitiv: "sollen",
            praesens: "sie soll",
            praeteritum: "sie sollte",
            perfekt: "sie hat gesollt",
            translation: "deber / tener que por encargo",
          },
          {
            infinitiv: "wollen",
            praesens: "sie will",
            praeteritum: "sie wollte",
            perfekt: "sie hat gewollt",
            translation: "querer",
          },
        ],
      },
      {
        id: "kapitel-2-verbtabellen-unregelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Unregelmäßige Verben",
        type: "verbs",
        note: "Unregelmäßige Verben in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "anbieten (Hilfe)",
            praesens: "sie bietet an",
            praeteritum: "sie bot an",
            perfekt: "sie hat angeboten",
            translation: "ofrecer ayuda",
          },
          {
            infinitiv: "anrufen",
            praesens: "sie ruft an",
            praeteritum: "sie rief an",
            perfekt: "sie hat angerufen",
            translation: "llamar por teléfono",
          },
          {
            infinitiv: "bewerben (sich um eine Stelle)",
            praesens: "sie bewirbt sich",
            praeteritum: "sie bewarb sich",
            perfekt: "sie hat sich beworben",
            translation: "postularse / solicitar un puesto",
          },
          {
            infinitiv: "bleiben (zu Hause)",
            praesens: "sie bleibt",
            praeteritum: "sie blieb",
            perfekt: "sie ist geblieben",
            translation: "quedarse",
          },
          {
            infinitiv: "einladen (jemanden)",
            praesens: "sie lädt ein",
            praeteritum: "sie lud ein",
            perfekt: "sie hat eingeladen",
            translation: "invitar a alguien",
          },
          {
            infinitiv: "empfehlen (einen Kurs)",
            praesens: "sie empfiehlt",
            praeteritum: "sie empfahl",
            perfekt: "sie hat empfohlen",
            translation: "recomendar un curso",
          },
          {
            infinitiv: "empfinden",
            praesens: "sie empfindet",
            praeteritum: "sie empfand",
            perfekt: "sie hat empfunden",
            translation: "sentir / percibir",
          },
          {
            infinitiv: "gelten (eine Regel)",
            praesens: "sie gilt",
            praeteritum: "sie galt",
            perfekt: "sie hat gegolten",
            translation: "ser válido / aplicarse una regla",
          },
          {
            infinitiv: "helfen",
            praesens: "sie hilft",
            praeteritum: "sie half",
            perfekt: "sie hat geholfen",
            translation: "ayudar",
          },
          {
            infinitiv: "hinterlassen (eine Nachricht)",
            praesens: "sie hinterlässt",
            praeteritum: "sie hinterließ",
            perfekt: "sie hat hinterlassen",
            translation: "dejar un mensaje",
          },
          {
            infinitiv: "kommen",
            praesens: "sie kommt",
            praeteritum: "sie kam",
            perfekt: "sie ist gekommen",
            translation: "venir / llegar",
          },
          {
            infinitiv: "leihen (einen Stift)",
            praesens: "sie leiht",
            praeteritum: "sie lieh",
            perfekt: "sie hat geliehen",
            translation: "prestar / tomar prestado un bolígrafo",
          },
          {
            infinitiv: "meiden (ein Gesprächsthema)",
            praesens: "sie meidet",
            praeteritum: "sie mied",
            perfekt: "sie hat gemieden",
            translation: "evitar un tema de conversación",
          },
          {
            infinitiv: "tragen (Kleidung)",
            praesens: "sie trägt",
            praeteritum: "sie trug",
            perfekt: "sie hat getragen",
            translation: "llevar / vestir ropa",
          },
          {
            infinitiv: "verbieten (private E-Mails)",
            praesens: "sie verbietet",
            praeteritum: "sie verbot",
            perfekt: "sie hat verboten",
            translation: "prohibir correos privados",
          },
          {
            infinitiv: "verbinden (jemanden am Telefon)",
            praesens: "sie verbindet",
            praeteritum: "sie verband",
            perfekt: "sie hat verbunden",
            translation: "comunicar / conectar a alguien por teléfono",
          },
          {
            infinitiv: "vertreten (eine Meinung)",
            praesens: "sie vertritt",
            praeteritum: "sie vertrat",
            perfekt: "sie hat vertreten",
            translation: "representar / defender una opinión",
          },
          {
            infinitiv: "verlieren (den Reisepass)",
            praesens: "sie verliert",
            praeteritum: "sie verlor",
            perfekt: "sie hat verloren",
            translation: "perder el pasaporte",
          },
          {
            infinitiv: "verschieben (einen Termin)",
            praesens: "sie verschiebt",
            praeteritum: "sie verschob",
            perfekt: "sie hat verschoben",
            translation: "aplazar / cambiar una cita",
          },
          {
            infinitiv: "werden (krank / Direktorin)",
            praesens: "sie wird",
            praeteritum: "sie wurde",
            perfekt: "sie ist geworden",
            translation: "volverse / llegar a ser / enfermarse",
          },
        ],
      },
      {
        id: "kapitel-2-verbtabellen-regelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Einige regelmäßige Verben",
        type: "verbs",
        note: "Regelmäßige Verben in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "absagen (einen Termin)",
            praesens: "sie sagt ab",
            praeteritum: "sie sagte ab",
            perfekt: "sie hat abgesagt",
            translation: "cancelar una cita",
          },
          {
            infinitiv: "ausrichten (jemandem etwas)",
            praesens: "sie richtet aus",
            praeteritum: "sie richtete aus",
            perfekt: "sie hat ausgerichtet",
            translation: "dar / transmitir un recado a alguien",
          },
          {
            infinitiv: "buchstabieren (den Namen)",
            praesens: "sie buchstabiert",
            praeteritum: "sie buchstabierte",
            perfekt: "sie hat buchstabiert",
            translation: "deletrear el nombre",
          },
          {
            infinitiv: "duzen (jemanden)",
            praesens: "sie duzt",
            praeteritum: "sie duzte",
            perfekt: "sie hat geduzt",
            translation: "tutear a alguien",
          },
          {
            infinitiv: "irren (sich)",
            praesens: "sie irrt sich",
            praeteritum: "sie irrte sich",
            perfekt: "sie hat sich geirrt",
            translation: "equivocarse",
          },
          {
            infinitiv: "siezen (jemanden)",
            praesens: "sie siezt",
            praeteritum: "sie siezte",
            perfekt: "sie hat gesiezt",
            translation: "tratar de usted a alguien",
          },
          {
            infinitiv: "überreichen (eine Visitenkarte)",
            praesens: "sie überreicht",
            praeteritum: "sie überreichte",
            perfekt: "sie hat überreicht",
            translation: "entregar una tarjeta de visita",
          },
          {
            infinitiv: "umsetzen (Pläne)",
            praesens: "sie setzt um",
            praeteritum: "sie setzte um",
            perfekt: "sie hat umgesetzt",
            translation: "poner en práctica planes",
          },
          {
            infinitiv: "verdienen (Geld)",
            praesens: "sie verdient",
            praeteritum: "sie verdiente",
            perfekt: "sie hat verdient",
            translation: "ganar dinero",
          },
          {
            infinitiv: "verhandeln",
            praesens: "sie verhandelt",
            praeteritum: "sie verhandelte",
            perfekt: "sie hat verhandelt",
            translation: "negociar",
          },
          {
            infinitiv: "vereinbaren (einen Termin)",
            praesens: "sie vereinbart",
            praeteritum: "sie vereinbarte",
            perfekt: "sie hat vereinbart",
            translation: "acordar / concertar una cita",
          },
        ],
      },
      {
        id: "kapitel-2-deklination-maskuline-nomen",
        title: "Deklination der maskulinen Nomen",
        type: "table",
        note: "Nach demselben Prinzip wie Kunde werden viele maskuline Nomen dekliniert.",
        sections: [
          {
            title: "Singular und Plural",
            prompt: "Normale Deklination und n-Deklination vergleichen",
            headers: [
              "Kasus",
              "Singular: normale Deklination",
              "Singular: n-Deklination",
              "Plural: normale Deklination",
              "Plural: n-Deklination",
            ],
            rows: [
              {
                question: "Nominativ",
                structure: "der Mann / der Kunde",
                example: "die Männer / die Kunden",
                cells: [
                  "Nominativ",
                  "der Mann",
                  "der Kunde",
                  "die Männer",
                  "die Kunden",
                ],
              },
              {
                question: "Akkusativ",
                structure: "den Mann / den Kunden",
                example: "die Männer / die Kunden",
                cells: [
                  "Akkusativ",
                  "den Mann",
                  "den Kunden",
                  "die Männer",
                  "die Kunden",
                ],
              },
              {
                question: "Dativ",
                structure: "dem Mann / dem Kunden",
                example: "den Männern / den Kunden",
                cells: [
                  "Dativ",
                  "dem Mann",
                  "dem Kunden",
                  "den Männern",
                  "den Kunden",
                ],
              },
              {
                question: "Genitiv",
                structure: "des Mannes / des Kunden",
                example: "der Männer / der Kunden",
                cells: [
                  "Genitiv",
                  "des Mannes",
                  "des Kunden",
                  "der Männer",
                  "der Kunden",
                ],
              },
            ],
          },
          {
            title: "Nomen mit n-Deklination",
            prompt:
              "Folgende maskuline Nomen werden nach dem Prinzip von Kunde dekliniert.",
            headers: ["Gruppe", "Beispiele", "Hinweis"],
            rows: [
              {
                question: "männliche Personen und Tiere auf -e",
                structure:
                  "der Experte, der Junge, der Kollege, der Kunde, der Laie, der Neffe, der Riese, der Zeuge",
                example: "Personen",
                cells: [
                  "männliche Personen auf -e",
                  "der Experte, der Junge, der Kollege, der Kunde, der Laie, der Neffe, der Riese, der Zeuge",
                  "Personen",
                ],
              },
              {
                question: "Nationalitäten auf -e",
                structure:
                  "der Brite, der Bulgare, der Däne, der Franzose, der Grieche, der Ire",
                example: "Nationalitäten",
                cells: [
                  "Nationalitäten auf -e",
                  "der Brite, der Bulgare, der Däne, der Franzose, der Grieche, der Ire",
                  "Nationalitäten",
                ],
              },
              {
                question: "Tiere auf -e",
                structure: "der Affe, der Hase, der Löwe",
                example: "Tiere",
                cells: [
                  "Tiere auf -e",
                  "der Affe, der Hase, der Löwe",
                  "Tiere",
                ],
              },
              {
                question: "weitere männliche Personen",
                structure:
                  "der Held, der Kamerad, der Prinz, der Herr, der Bauer, der Nachbar",
                example: "Plural: der Herr -> die Herren; der Nachbar -> die Nachbarn",
                cells: [
                  "weitere männliche Personen",
                  "der Held, der Kamerad, der Prinz, der Herr, der Bauer, der Nachbar",
                  "Plural: Herr -> Herren; Nachbar -> Nachbarn",
                ],
              },
              {
                question: "Nomen auf -and, -ant, -ent, -ist",
                structure:
                  "der Doktorand, der Elefant, der Lieferant, der Demonstrant, der Student, der Präsident, der Produzent, der Patient, der Polizist, der Kommunist, der Terrorist, der Journalist",
                example: "Endungen: -and, -ant, -ent, -ist",
                cells: [
                  "Nomen auf -and, -ant, -ent, -ist",
                  "der Doktorand, der Elefant, der Lieferant, der Demonstrant, der Student, der Präsident, der Produzent, der Patient, der Polizist, der Kommunist, der Terrorist, der Journalist",
                  "typische n-Deklination",
                ],
              },
              {
                question: "einige Nomen aus dem Griechischen",
                structure: "der Fotograf, der Architekt, der Diplomat, der Automat",
                example: "griechische Herkunft",
                cells: [
                  "einige Nomen aus dem Griechischen",
                  "der Fotograf, der Architekt, der Diplomat, der Automat",
                  "maskuline Nomen",
                ],
              },
              {
                question: "einige abstrakte Nomen",
                structure:
                  "der Name, der Gedanke, der Glaube, der Buchstabe, der Wille, der Friede",
                example: "Genitiv zusätzlich mit -s: des Namens",
                cells: [
                  "einige abstrakte Nomen",
                  "der Name, der Gedanke, der Glaube, der Buchstabe, der Wille, der Friede",
                  "Genitiv zusätzlich mit -s: des Namens",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kapitel-3",
    label: "Kapitel 3",
    title: "Medien",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.medien,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über das eigene Leseverhalten berichten",
          "Eine Buchauswahl treffen und begründen",
          "Sich über Lesestrategien austauschen",
          "Über ein geschichtliches Ereignis sprechen",
          "Hypothesen formulieren",
          "Über verschiedene Medien reden",
          "Über das Fernsehprogramm und das Fernsehverhalten diskutieren",
          "Grafiken beschreiben",
          "Eine E-Mail schreiben",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Lesen",
          "Bücher und Buchdruck",
          "Medien und Zubehör",
          "Fernsehen",
        ],
      },
    ],
    resources: [
      {
        id: "kapitel-3-konjunktiv-ii",
        title: "Konjunktiv II",
        type: "table",
        sections: [
          {
            title: "Gegenwart (Wiederholung)",
            prompt: "Reale Aussagen und irreale Wünsche vergleichen",
            headers: ["Bereich", "Indikativ (real)", "Konjunktiv (irreal)"],
            rows: [
              {
                question: "Hilfsverben",
                structure: "Ich habe kein Geld. Ich bin krank.",
                example:
                  "hätte / wäre: Ich hätte gern Geld. Ich wäre gern gesund.",
                cells: [
                  "Hilfsverben",
                  "Ich habe kein Geld. Ich bin krank.",
                  "hätte / wäre: Ich hätte gern Geld. Ich wäre gern gesund.",
                ],
              },
              {
                question: "andere Verben",
                structure:
                  "Ich fahre nicht in den Urlaub. Ich arbeite jeden Tag. Ich kaufe mir keinen Porsche.",
                example:
                  "würde + Infinitiv: Ich würde gern in den Urlaub fahren. Ich würde gern weniger arbeiten. Ich würde mir gern einen Porsche kaufen.",
                cells: [
                  "andere Verben",
                  "Ich fahre nicht in den Urlaub. Ich arbeite jeden Tag. Ich kaufe mir keinen Porsche.",
                  "würde + Infinitiv: Ich würde gern in den Urlaub fahren. Ich würde gern weniger arbeiten. Ich würde mir gern einen Porsche kaufen.",
                ],
              },
              {
                question: "Modalverben",
                structure:
                  "Ich kann nicht gut kochen. Ich muss jeden Tag so weit fahren. Darf ich hier mal telefonieren?",
                example:
                  "könnte / müsste / dürfte: Könnte ich doch besser kochen! Müsste ich doch nicht jeden Tag so weit fahren! Dürfte ich hier mal telefonieren?",
                cells: [
                  "Modalverben",
                  "Ich kann nicht gut kochen. Ich muss jeden Tag so weit fahren. Darf ich hier mal telefonieren?",
                  "könnte / müsste / dürfte: Könnte ich doch besser kochen! Müsste ich doch nicht jeden Tag so weit fahren! Dürfte ich hier mal telefonieren?",
                ],
              },
            ],
          },
          {
            title: "Vergangenheit",
            prompt: "Irreale Wünsche in der Vergangenheit formulieren",
            headers: ["Bereich", "Indikativ (real)", "Konjunktiv (irreal)"],
            rows: [
              {
                question: "Hilfsverben",
                structure: "Ich hatte kein Geld. Ich war krank.",
                example:
                  "hätte gehabt / wäre gewesen: Ich hätte gern Geld gehabt. Ich wäre gern gesund gewesen.",
                cells: [
                  "Hilfsverben",
                  "Ich hatte kein Geld. Ich war krank.",
                  "hätte gehabt / wäre gewesen: Ich hätte gern Geld gehabt. Ich wäre gern gesund gewesen.",
                ],
              },
              {
                question: "andere Verben",
                structure:
                  "Ich bin nicht in den Urlaub gefahren. Ich habe jeden Tag gearbeitet. Ich habe mir keinen Porsche gekauft.",
                example:
                  "wäre / hätte + Partizip II: Ich wäre gern in den Urlaub gefahren. Ich hätte gern weniger gearbeitet. Ich hätte mir gern einen Porsche gekauft.",
                cells: [
                  "andere Verben",
                  "Ich bin nicht in den Urlaub gefahren. Ich habe jeden Tag gearbeitet. Ich habe mir keinen Porsche gekauft.",
                  "wäre / hätte + Partizip II: Ich wäre gern in den Urlaub gefahren. Ich hätte gern weniger gearbeitet. Ich hätte mir gern einen Porsche gekauft.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-3-passiv",
        title: "Das Passiv",
        type: "table",
        note: "Bei einem Passivsatz steht die Handlung im Vordergrund, nicht die Person.",
        sections: [
          {
            title: "Bildung und Bedeutung",
            prompt: "Passiv mit werden + Partizip II bilden",
            headers: ["Thema", "Beispiel", "Regel / Hinweis"],
            rows: [
              {
                question: "Aktiv / Passiv",
                structure:
                  "Aktiv: Mönche schreiben die Bücher ab. Passiv: Die Bücher werden abgeschrieben.",
                example: "werden + Partizip II",
                cells: [
                  "Aktiv / Passiv",
                  "Aktiv: Mönche schreiben die Bücher ab. Passiv: Die Bücher werden abgeschrieben.",
                  "werden + Partizip II",
                ],
              },
              {
                question: "werden als Hilfsverb",
                structure:
                  "Ich werde eingeladen. Ich bin eingeladen worden.",
                example: "Passiv Präsens / Perfekt",
                cells: [
                  "werden als Hilfsverb",
                  "Ich werde eingeladen. Ich bin eingeladen worden.",
                  "Passiv Präsens / Perfekt",
                ],
              },
              {
                question: "werden als Vollverb",
                structure: "Ich werde 18. Ich bin 18 geworden.",
                example: "werden = llegar a ser / cumplir",
                cells: [
                  "werden als Vollverb",
                  "Ich werde 18. Ich bin 18 geworden.",
                  "werden = llegar a ser / cumplir",
                ],
              },
            ],
          },
          {
            title: "Konjugation mit gefragt",
            prompt: "Passivformen im Präsens, Präteritum und Perfekt",
            headers: ["Person", "Präsens", "Präteritum", "Perfekt"],
            rows: [
              {
                question: "ich",
                structure: "werde gefragt",
                example: "wurde gefragt / bin gefragt worden",
                cells: [
                  "ich",
                  "werde gefragt",
                  "wurde gefragt",
                  "bin gefragt worden",
                ],
              },
              {
                question: "du",
                structure: "wirst gefragt",
                example: "wurdest gefragt / bist gefragt worden",
                cells: [
                  "du",
                  "wirst gefragt",
                  "wurdest gefragt",
                  "bist gefragt worden",
                ],
              },
              {
                question: "er/sie/es",
                structure: "wird gefragt",
                example: "wurde gefragt / ist gefragt worden",
                cells: [
                  "er/sie/es",
                  "wird gefragt",
                  "wurde gefragt",
                  "ist gefragt worden",
                ],
              },
              {
                question: "wir",
                structure: "werden gefragt",
                example: "wurden gefragt / sind gefragt worden",
                cells: [
                  "wir",
                  "werden gefragt",
                  "wurden gefragt",
                  "sind gefragt worden",
                ],
              },
              {
                question: "ihr",
                structure: "werdet gefragt",
                example: "wurdet gefragt / seid gefragt worden",
                cells: [
                  "ihr",
                  "werdet gefragt",
                  "wurdet gefragt",
                  "seid gefragt worden",
                ],
              },
              {
                question: "sie/Sie",
                structure: "werden gefragt",
                example: "wurden gefragt / sind gefragt worden",
                cells: [
                  "sie/Sie",
                  "werden gefragt",
                  "wurden gefragt",
                  "sind gefragt worden",
                ],
              },
            ],
          },
          {
            title: "Passiv im Nebensatz und mit Modalverben",
            prompt: "Satzstellung und Modalverben im Passiv",
            headers: ["Form", "Beispiel", "Zeit"],
            rows: [
              {
                question: "Passiv im Nebensatz",
                structure:
                  "Ich weiß nicht, wann der Kühlschrank repariert wird.",
                example: "Präsens",
                cells: [
                  "Passiv im Nebensatz",
                  "Ich weiß nicht, wann der Kühlschrank repariert wird.",
                  "Präsens",
                ],
              },
              {
                question: "Passiv im Nebensatz",
                structure:
                  "Ich weiß nicht, wann der Kühlschrank repariert wurde.",
                example: "Präteritum",
                cells: [
                  "Passiv im Nebensatz",
                  "Ich weiß nicht, wann der Kühlschrank repariert wurde.",
                  "Präteritum",
                ],
              },
              {
                question: "Passiv im Nebensatz",
                structure:
                  "Ich weiß nicht, wann der Kühlschrank repariert worden ist.",
                example: "Perfekt",
                cells: [
                  "Passiv im Nebensatz",
                  "Ich weiß nicht, wann der Kühlschrank repariert worden ist.",
                  "Perfekt",
                ],
              },
              {
                question: "Passiv mit Modalverben",
                structure: "Der Kühlschrank muss repariert werden.",
                example: "Präsens",
                cells: [
                  "Passiv mit Modalverben",
                  "Der Kühlschrank muss repariert werden.",
                  "Präsens",
                ],
              },
              {
                question: "Passiv mit Modalverben",
                structure: "Der Kühlschrank musste repariert werden.",
                example: "Präteritum",
                cells: [
                  "Passiv mit Modalverben",
                  "Der Kühlschrank musste repariert werden.",
                  "Präteritum",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-3-sinngerichtete-infinitivkonstruktionen",
        title: "Sinngerichtete Infinitivkonstruktionen",
        type: "table",
        note: "Infinitivkonstruktionen mit statt/anstatt ... zu, ohne ... zu und um ... zu hängen nicht von einem Verb ab. Sie haben keinen eigenen Subjektbezug, sondern beziehen sich auf das Subjekt im Hauptsatz.",
        sections: [
          {
            title: "Infinitivkonstruktionen mit zu",
            prompt: "Bedeutung und Gebrauch von statt/anstatt, ohne und um",
            headers: ["Konstruktion", "Beispiel", "Bedeutung"],
            rows: [
              {
                question: "statt / anstatt ... zu",
                structure:
                  "Statt Bücher zu lesen, greifen die Totalverweigerer lieber zur TV-Fernbedienung.",
                example:
                  "Drückt aus, dass anstelle einer erwarteten Handlung eine nicht erwartete Handlung realisiert wird.",
                cells: [
                  "statt / anstatt ... zu",
                  "Statt Bücher zu lesen, greifen die Totalverweigerer lieber zur TV-Fernbedienung.",
                  "En vez de una acción esperada, ocurre otra acción no esperada.",
                ],
              },
              {
                question: "ohne ... zu",
                structure:
                  "Er besuchte die Buchmesse, ohne sich ein einziges Buch anzusehen.",
                example:
                  "Beschreibt, dass man etwas nicht tut, was erwartet wird.",
                cells: [
                  "ohne ... zu",
                  "Er besuchte die Buchmesse, ohne sich ein einziges Buch anzusehen.",
                  "Indica que no se hace algo que normalmente se espera.",
                ],
              },
              {
                question: "um ... zu",
                structure:
                  "Ich lese, um mich zu entspannen. Ich bin hier, um einen Überblick über neue Bücher zu bekommen.",
                example: "Drückt eine Absicht oder ein Ziel aus.",
                cells: [
                  "um ... zu",
                  "Ich lese, um mich zu entspannen. Ich bin hier, um einen Überblick über neue Bücher zu bekommen.",
                  "Expresa una intención o una finalidad.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-3-wichtige-redemittel",
        title: "Wichtige Redemittel",
        type: "table",
        note: "Redemittel des Kapitels Medien.",
        sections: [
          {
            title: "Lesen",
            prompt: "Über Leseverhalten und Bücher sprechen",
            headers: ["Bereich", "Redemittel", "Spanisch / uso"],
            rows: [
              {
                question: "Lesen",
                structure:
                  "der Wenigleser, der Normalleser, die Leseratte, der Bücherwurm",
                example: "Tipos de lectores",
                cells: [
                  "Lesen",
                  "der Wenigleser, der Normalleser, die Leseratte, der Bücherwurm",
                  "persona que lee poco, lector normal, lectora empedernida, ratón de biblioteca",
                ],
              },
              {
                question: "Lesen",
                structure:
                  "ohne Bücher nicht auskommen / nicht leben können; keine Bücher zum Leben brauchen",
                example: "Hablar de la importancia de los libros",
                cells: [
                  "Lesen",
                  "ohne Bücher nicht auskommen / nicht leben können; keine Bücher zum Leben brauchen",
                  "no poder vivir sin libros; no necesitar libros para vivir",
                ],
              },
              {
                question: "Lesen",
                structure:
                  "Bücher verschlingen, kaufen, lesen, konsumieren, ausleihen, verschenken, auswählen, beurteilen",
                example: "Acciones con libros",
                cells: [
                  "Lesen",
                  "Bücher verschlingen, kaufen, lesen, konsumieren, ausleihen, verschenken, auswählen, beurteilen",
                  "devorar, comprar, leer, consumir, prestar, regalar, elegir y valorar libros",
                ],
              },
              {
                question: "Lesen",
                structure:
                  "ein Totalverweigerer oder „buchresistent“ sein",
                example: "Rechazo de la lectura",
                cells: [
                  "Lesen",
                  "ein Totalverweigerer oder „buchresistent“ sein",
                  "ser totalmente reacio o resistente a los libros",
                ],
              },
            ],
          },
          {
            title: "Über ein Jahrhundert / ein geschichtliches Ereignis sprechen",
            prompt: "Ereignisse und geschichtliche Entwicklungen beschreiben",
            headers: ["Bereich", "Redemittel", "Spanisch / uso"],
            rows: [
              {
                question: "Geschichte",
                structure:
                  "eine große Rolle in der Geschichte spielen; einen Übergang kennzeichnen",
                example: "Importancia histórica",
                cells: [
                  "Geschichte",
                  "eine große Rolle in der Geschichte spielen; einen Übergang kennzeichnen",
                  "desempeñar un gran papel en la historia; marcar una transición",
                ],
              },
              {
                question: "Geschichte",
                structure:
                  "Es vollzogen sich politische Veränderungen. Es wurden Entdeckungen gemacht. Es gab viele Widersprüche.",
                example: "Cambios y descubrimientos",
                cells: [
                  "Geschichte",
                  "Es vollzogen sich politische Veränderungen. Es wurden Entdeckungen gemacht. Es gab viele Widersprüche.",
                  "se produjeron cambios políticos; se hicieron descubrimientos; hubo contradicciones",
                ],
              },
              {
                question: "Geschichte",
                structure:
                  "Es fanden schreckliche Kriege statt. Die Menschen konnten nicht lesen und schreiben.",
                example: "Situaciones históricas",
                cells: [
                  "Geschichte",
                  "Es fanden schreckliche Kriege statt. Die Menschen konnten nicht lesen und schreiben.",
                  "tuvieron lugar guerras terribles; la gente no sabía leer ni escribir",
                ],
              },
              {
                question: "Geschichte",
                structure:
                  "Sie wohnten in ... Sie aßen ... und tranken ... Sie übten Berufe wie Handwerker aus.",
                example: "Vida cotidiana",
                cells: [
                  "Geschichte",
                  "Sie wohnten in ... Sie aßen ... und tranken ... Sie übten Berufe wie Handwerker aus.",
                  "vivían en..., comían y bebían..., ejercían oficios como artesanos",
                ],
              },
            ],
          },
          {
            title: "Hypothesen in der Vergangenheit formulieren",
            prompt: "Irreale Hypothesen mit hätte/wäre formulieren",
            headers: ["Bereich", "Redemittel", "Spanisch / uso"],
            rows: [
              {
                question: "Hypothesen",
                structure:
                  "Wenn ich im 15. Jahrhundert gelebt hätte, ...",
                example: "Einleitung einer irrealen Hypothese",
                cells: [
                  "Hypothesen",
                  "Wenn ich im 15. Jahrhundert gelebt hätte, ...",
                  "si hubiera vivido en el siglo XV...",
                ],
              },
              {
                question: "Hypothesen",
                structure:
                  "hätte ich in einem kleinen Haus gewohnt; hätte ich viel Fleisch gegessen und Wein getrunken",
                example: "Hypothesen mit hätte",
                cells: [
                  "Hypothesen",
                  "hätte ich in einem kleinen Haus gewohnt; hätte ich viel Fleisch gegessen und Wein getrunken",
                  "habría vivido en una casa pequeña; habría comido mucha carne y bebido vino",
                ],
              },
              {
                question: "Hypothesen",
                structure:
                  "wäre ich bestimmt ein Handwerker gewesen; wäre ich um 5.00 Uhr aufgestanden; wäre ich zu Fuß zur Arbeit gegangen",
                example: "Hypothesen mit wäre",
                cells: [
                  "Hypothesen",
                  "wäre ich bestimmt ein Handwerker gewesen; wäre ich um 5.00 Uhr aufgestanden; wäre ich zu Fuß zur Arbeit gegangen",
                  "seguramente habría sido artesano; me habría levantado a las 5; habría ido caminando al trabajo",
                ],
              },
            ],
          },
          {
            title: "Medien und Zubehör",
            prompt: "Geräte und Zubehör benennen",
            headers: ["Bereich", "Redemittel", "Spanisch / uso"],
            rows: [
              {
                question: "Medien und Zubehör",
                structure:
                  "die Tastatur, der Bildschirm, das Smartphone, das Radio, das Tablet, der Fernseher, die Spielkonsole, die Foto-/Videokamera",
                example: "Geräte",
                cells: [
                  "Medien und Zubehör",
                  "die Tastatur, der Bildschirm, das Smartphone, das Radio, das Tablet, der Fernseher, die Spielkonsole, die Foto-/Videokamera",
                  "teclado, pantalla, smartphone, radio, tablet, televisor, consola, cámara",
                ],
              },
              {
                question: "Medien und Zubehör",
                structure:
                  "der Kopfhörer, der Lautsprecher, das Fitnessarmband, die Steckdose, das Verbindungskabel, die Fernbedienung, die Ladestation",
                example: "Zubehör",
                cells: [
                  "Medien und Zubehör",
                  "der Kopfhörer, der Lautsprecher, das Fitnessarmband, die Steckdose, das Verbindungskabel, die Fernbedienung, die Ladestation",
                  "auriculares, altavoz, pulsera fitness, enchufe, cable de conexión, control remoto, estación de carga",
                ],
              },
            ],
          },
          {
            title: "Fernsehen",
            prompt: "Über Fernsehen und Fernsehgewohnheiten sprechen",
            headers: ["Bereich", "Redemittel", "Spanisch / uso"],
            rows: [
              {
                question: "Fernsehen",
                structure:
                  "private und öffentlich-rechtliche Fernsehsender; das Fernsehprogramm; die Sendezeit; die Fernsehsendung",
                example: "Grundwortschatz",
                cells: [
                  "Fernsehen",
                  "private und öffentlich-rechtliche Fernsehsender; das Fernsehprogramm; die Sendezeit; die Fernsehsendung",
                  "canales privados y públicos, programación, horario de emisión, programa de televisión",
                ],
              },
              {
                question: "Fernsehen",
                structure:
                  "Filme werden synchronisiert / laufen mit Untertiteln.",
                example: "Filme",
                cells: [
                  "Fernsehen",
                  "Filme werden synchronisiert / laufen mit Untertiteln.",
                  "las películas se doblan / se emiten con subtítulos",
                ],
              },
              {
                question: "Fernsehen",
                structure:
                  "Fernsehsender und Sendungen haben Marktanteile und Einschaltquoten. Die Einschaltquote steigt/sinkt.",
                example: "Quoten",
                cells: [
                  "Fernsehen",
                  "Fernsehsender und Sendungen haben Marktanteile und Einschaltquoten. Die Einschaltquote steigt/sinkt.",
                  "los canales y programas tienen cuota de mercado y audiencia; la audiencia sube/baja",
                ],
              },
              {
                question: "Fernsehen",
                structure:
                  "Das Fernsehprogramm orientiert sich an bestimmten Zielgruppen / wird auf bestimmte Zielgruppen abgestimmt.",
                example: "Zielgruppen",
                cells: [
                  "Fernsehen",
                  "Das Fernsehprogramm orientiert sich an bestimmten Zielgruppen / wird auf bestimmte Zielgruppen abgestimmt.",
                  "la programación se orienta / se ajusta a determinados grupos objetivo",
                ],
              },
              {
                question: "Fernsehen",
                structure:
                  "Programme richten sich an Jugendliche / Erwachsene. Experten wissen alles über die Sehgewohnheiten der Deutschen.",
                example: "Zielgruppen und Gewohnheiten",
                cells: [
                  "Fernsehen",
                  "Programme richten sich an Jugendliche / Erwachsene. Experten wissen alles über die Sehgewohnheiten der Deutschen.",
                  "los programas se dirigen a jóvenes/adultos; los expertos conocen los hábitos televisivos",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-3-verbtabellen-unregelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Unregelmäßige Verben",
        type: "verbs",
        note: "Unregelmäßige Verben in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "befinden (sich)",
            praesens: "er befindet sich",
            praeteritum: "er befand sich",
            perfekt: "er hat sich befunden",
            translation: "encontrarse / estar situado",
          },
          {
            infinitiv: "bestehen (eine Prüfung)",
            praesens: "er besteht",
            praeteritum: "er bestand",
            perfekt: "er hat bestanden",
            translation: "aprobar un examen / consistir en",
          },
          {
            infinitiv: "bitten (um Hilfe)",
            praesens: "er bittet",
            praeteritum: "er bat",
            perfekt: "er hat gebeten",
            translation: "pedir ayuda",
          },
          {
            infinitiv: "entstehen",
            praesens: "es entsteht",
            praeteritum: "es entstand",
            perfekt: "es ist entstanden",
            translation: "surgir / originarse",
          },
          {
            infinitiv: "erfinden (den Buchdruck)",
            praesens: "er erfindet",
            praeteritum: "er erfand",
            perfekt: "er hat erfunden",
            translation: "inventar la imprenta",
          },
          {
            infinitiv: "gewinnen (einen Überblick)",
            praesens: "er gewinnt",
            praeteritum: "er gewann",
            perfekt: "er hat gewonnen",
            translation: "obtener una visión general / ganar",
          },
          {
            infinitiv: "gießen (Blei)",
            praesens: "er gießt",
            praeteritum: "er goss",
            perfekt: "er hat gegossen",
            translation: "verter / fundir plomo",
          },
          {
            infinitiv: "greifen (zur Fernbedienung)",
            praesens: "er greift",
            praeteritum: "er griff",
            perfekt: "er hat gegriffen",
            translation: "agarrar / recurrir al control remoto",
          },
          {
            infinitiv: "laufen",
            praesens: "er läuft",
            praeteritum: "er lief",
            perfekt: "er ist gelaufen",
            translation: "correr / caminar",
          },
          {
            infinitiv: "(an)sehen",
            praesens: "er sieht (an)",
            praeteritum: "er sah (an)",
            perfekt: "er hat (an)gesehen",
            translation: "mirar / ver",
          },
          {
            infinitiv: "sinken",
            praesens: "er sinkt",
            praeteritum: "er sank",
            perfekt: "er ist gesunken",
            translation: "bajar / hundirse",
          },
          {
            infinitiv: "steigen",
            praesens: "er steigt",
            praeteritum: "er stieg",
            perfekt: "er ist gestiegen",
            translation: "subir / aumentar",
          },
          {
            infinitiv: "streiten (sich)",
            praesens: "er streitet sich",
            praeteritum: "er stritt sich",
            perfekt: "er hat sich gestritten",
            translation: "discutir / pelearse",
          },
          {
            infinitiv: "überbieten (einen Preis)",
            praesens: "er überbietet",
            praeteritum: "er überbot",
            perfekt: "er hat überboten",
            translation: "superar una oferta / pujar más alto",
          },
          {
            infinitiv: "unterhalten (sich)",
            praesens: "er unterhält sich",
            praeteritum: "er unterhielt sich",
            perfekt: "er hat sich unterhalten",
            translation: "conversar / entretenerse",
          },
          {
            infinitiv: "verschlingen (Bücher)",
            praesens: "er verschlingt",
            praeteritum: "er verschlang",
            perfekt: "er hat verschlungen",
            translation: "devorar libros",
          },
          {
            infinitiv: "vollziehen (sich, Veränderung)",
            praesens: "sie vollzieht sich",
            praeteritum: "sie vollzog sich",
            perfekt: "sie hat sich vollzogen",
            translation: "producirse / llevarse a cabo un cambio",
          },
          {
            infinitiv: "waschen",
            praesens: "er wäscht",
            praeteritum: "er wusch",
            perfekt: "er hat gewaschen",
            translation: "lavar",
          },
        ],
      },
      {
        id: "kapitel-3-verbtabellen-regelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Einige regelmäßige Verben",
        type: "verbs",
        note: "Regelmäßige Verben in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "beeilen (sich)",
            praesens: "er beeilt sich",
            praeteritum: "er beeilte sich",
            perfekt: "er hat sich beeilt",
            translation: "apurarse / darse prisa",
          },
          {
            infinitiv: "beschweren (sich)",
            praesens: "er beschwert sich",
            praeteritum: "er beschwerte sich",
            perfekt: "er hat sich beschwert",
            translation: "quejarse",
          },
          {
            infinitiv: "synchronisieren (einen Film)",
            praesens: "er synchronisiert",
            praeteritum: "er synchronisierte",
            perfekt: "er hat synchronisiert",
            translation: "doblar una película",
          },
          {
            infinitiv: "verfügen (über viele Bücher)",
            praesens: "er verfügt",
            praeteritum: "er verfügte",
            perfekt: "er hat verfügt",
            translation: "disponer de muchos libros",
          },
        ],
      },
    ],
  },
  {
    id: "kapitel-4",
    label: "Kapitel 4",
    title: "Werbung und Konsum",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.werbungKonsum,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Werbung sprechen",
          "Informationen aus Werbeanzeigen entnehmen",
          "Produkte und ihre Eigenschaften beschreiben",
          "Werbetexte verfassen",
          "Ein längeres Verkaufsgespräch führen",
          "Sich nach Einzelheiten erkundigen",
          "Sich über Ware und Lieferverzögerungen mündlich und schriftlich beschweren",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Werbung",
          "Produkteigenschaften",
          "Einkaufen",
          "Beschwerde",
        ],
      },
    ],
    resources: [
      {
        id: "kapitel-4-relativsaetze",
        title: "Beschreibungen mit Relativsätzen",
        type: "table",
        note:
          "Relativsätze beschreiben ein Bezugswort genauer. Das Relativpronomen richtet sich in Genus und Numerus nach dem Bezugswort, im Kasus nach seiner Funktion im Relativsatz.",
        sections: [
          {
            title: "Was ist ein Relativsatz?",
            prompt:
              "Mit Relativsätzen kann man Produkte, Personen, Bilder oder Videos genauer beschreiben. Sie sind Nebensätze und werden mit einem Relativpronomen eingeleitet.",
            headers: ["Bezugswort", "Relativsatz", "Ganzer Satz"],
            rows: [
              {
                question: "einen Werbespot",
                structure: "der in einer bestimmten Sendung gezeigt wird",
                example:
                  "Man produziert einen Werbespot, der in einer bestimmten Sendung gezeigt wird.",
              },
              {
                question: "eine bekannte Person",
                structure: "die im Netz viele Fans hat",
                example:
                  "Eine bekannte Person, die im Netz viele Fans hat, macht auf ein Produkt aufmerksam.",
              },
              {
                question: "Bilder und Videos",
                structure: "die zum Profil des Nutzers passen",
                example:
                  "Man lässt Bilder und Videos auf Websites einblenden, die zum Profil des Nutzers passen.",
              },
            ],
          },
          {
            title: "So wählt man das Relativpronomen",
            prompt:
              "Genus und Numerus kommen vom Bezugswort. Der Kasus kommt aus der Rolle im Relativsatz.",
            headers: [
              "Bezugswort",
              "Genus / Numerus",
              "Kasus im Relativsatz",
              "Relativpronomen",
              "Beispiel",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der Werbespot",
                  "maskulin / Singular",
                  "Nominativ",
                  "der",
                  "Der Werbespot, der im Fernsehen läuft, ist sehr bekannt.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "die Person",
                  "feminin / Singular",
                  "Nominativ",
                  "die",
                  "Die Person, die viele Fans hat, empfiehlt ein neues Produkt.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "das Produkt",
                  "neutral / Singular",
                  "Akkusativ",
                  "das",
                  "Das Produkt, das ich online gekauft habe, war reduziert.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "die Videos",
                  "Plural",
                  "Nominativ",
                  "die",
                  "Die Videos, die zum Profil des Nutzers passen, werden automatisch angezeigt.",
                ],
              },
            ],
          },
          {
            title: "Relativpronomen: schnelle Übersicht",
            prompt:
              "Diese Formen helfen dir, Beschreibungen in Werbetexten korrekt zu bauen.",
            headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: ["Nominativ", "der", "die", "das", "die"],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: ["Akkusativ", "den", "die", "das", "die"],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: ["Dativ", "dem", "der", "dem", "denen"],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: ["Genitiv", "dessen", "deren", "dessen", "deren"],
              },
            ],
          },
          {
            title: "Ein Bezugswort, verschiedene Kasus",
            prompt:
              "Das Relativpronomen passt in Genus und Numerus zum Bezugswort. Der Kasus hängt aber von seiner Aufgabe im Relativsatz ab.",
            headers: [
              "Bezugswort",
              "Kasus",
              "Relativpronomen",
              "Relativsatz",
              "Ganzer Satz",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der Kaffeevollautomat",
                  "Nominativ",
                  "der",
                  "der den besten Kaffee macht",
                  "Das ist der Kaffeevollautomat, der den besten Kaffee macht.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der Kaffeevollautomat",
                  "Akkusativ",
                  "den",
                  "den ich jeden Tag benutze",
                  "Das ist der Kaffeevollautomat, den ich jeden Tag benutze.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der Kaffeevollautomat",
                  "Dativ",
                  "dem",
                  "dem ich erst mal treu bleibe",
                  "Das ist der Kaffeevollautomat, dem ich erst mal treu bleibe.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der Kaffeevollautomat",
                  "Genitiv",
                  "dessen",
                  "dessen Betriebsanleitung ich nicht genau gelesen habe",
                  "Das ist der Kaffeevollautomat, dessen Betriebsanleitung ich nicht genau gelesen habe.",
                ],
              },
            ],
          },
          {
            title: "Relativsätze mit Präpositionen",
            prompt:
              "Bei Relativsätzen mit präpositionalen Ausdrücken steht die Präposition vor dem Relativpronomen. Der Kasus richtet sich nach der Präposition.",
            headers: [
              "Bezugswort",
              "Präposition + Kasus",
              "Relativpronomen",
              "Beispiel",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "die neuen Kaffeevollautomaten",
                  "für + Akkusativ",
                  "für die",
                  "Das sind die neuen Kaffeevollautomaten, für die Interessenten viel Geld ausgeben.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "die neuen Kaffeevollautomaten",
                  "mit + Dativ",
                  "mit denen",
                  "Das sind die neuen Kaffeevollautomaten, mit denen die Firma die Konkurrenz besiegen will.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "die App",
                  "mit + Dativ",
                  "mit der",
                  "Das ist die App, mit der man Preise vergleichen kann.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "das Angebot",
                  "auf + Akkusativ",
                  "auf das",
                  "Das ist ein Angebot, auf das viele Kunden gewartet haben.",
                ],
              },
            ],
          },
          {
            title: "Werbung und Konsum: eigene Sätze",
            prompt:
              "Typische Formulierungen, wenn man Produkte, Anzeigen und Zielgruppen beschreibt.",
            headers: ["Thema", "Relativsatz", "Beispiel"],
            rows: [
              {
                question: "Produkt",
                structure: "das im Angebot ist",
                example:
                  "Ich suche ein Produkt, das im Angebot ist und gute Bewertungen hat.",
              },
              {
                question: "Kunde",
                structure: "der online einkauft",
                example:
                  "Ein Kunde, der online einkauft, achtet oft auf Lieferkosten.",
              },
              {
                question: "Anzeige",
                structure: "die sofort auffällt",
                example:
                  "Eine Anzeige, die sofort auffällt, hat meistens starke Farben.",
              },
              {
                question: "Website",
                structure: "auf der man Produkte vergleichen kann",
                example:
                  "Das ist eine Website, auf der man Produkte vergleichen kann.",
              },
              {
                question: "Marke",
                structure: "deren Werbung sehr kreativ ist",
                example:
                  "Ich mag Marken, deren Werbung sehr kreativ ist.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-komparation-adjektive",
        title: "Komparation der Adjektive",
        type: "table",
        note:
          "Werbung arbeitet oft mit gesteigerten Adjektiven und besonders positiv wirkenden Wörtern. So klingen Produkte stärker, moderner und attraktiver.",
        sections: [
          {
            title: "Werbesprache",
            prompt:
              "In Anzeigen werden Adjektive benutzt, um Produkte besonders positiv darzustellen.",
            headers: ["Strategie", "Form", "Beispiele aus der Werbung"],
            rows: [
              {
                question: "Gesteigerte Adjektive",
                structure: "Komparativ / Superlativ",
                example: "modernste Technik, neuestes Modell, bester Preis",
              },
              {
                question: "Positiv wirkende Adjektive",
                structure: "starke Beschreibung ohne Steigerung",
                example: "einzigartig, innovativ, intelligent, hochwertig",
              },
            ],
          },
          {
            title: "Bildung der Steigerung",
            prompt:
              "Der Komparativ endet meistens auf -er. Beim Superlativ benutzt man oft am ... -sten oder der/die/das ... -ste.",
            headers: ["Positiv", "Komparativ", "Superlativ", "Werbe-Beispiel"],
            rows: [
              {
                question: "einfach",
                structure: "einfacher",
                example:
                  "am einfachsten / der einfachste: Das ist die einfachste Lösung für deinen Alltag.",
              },
              {
                question: "gut",
                structure: "besser",
                example:
                  "am besten / der beste: Mit diesem Angebot kaufst du am besten.",
              },
              {
                question: "viel",
                structure: "mehr",
                example:
                  "am meisten / der meiste: Dieses Paket bietet dir am meisten Leistung.",
              },
              {
                question: "hoch",
                structure: "höher",
                example:
                  "am höchsten / der höchste: Unsere Qualität erfüllt die höchsten Ansprüche.",
              },
            ],
          },
          {
            title: "Vergleich",
            prompt:
              "Beim Vergleich benutzt man im Komparativ als. Im Positiv benutzt man genauso ... wie.",
            headers: ["Vergleich", "Signalwort", "Beispiel"],
            rows: [
              {
                question: "Komparativ",
                structure: "als",
                example:
                  "Deine Tasche ist schöner als meine Tasche.",
              },
              {
                question: "Positiv",
                structure: "genauso ... wie",
                example:
                  "Deine Tasche ist genauso schön wie meine Tasche.",
              },
              {
                question: "Komparativ in der Werbung",
                structure: "besser / schneller / günstiger + als",
                example:
                  "Unser neues Modell ist schneller als das alte Modell.",
              },
              {
                question: "Positiv in der Werbung",
                structure: "genauso + Adjektiv + wie",
                example:
                  "Diese Marke ist genauso zuverlässig wie die bekannte Konkurrenz.",
              },
            ],
          },
          {
            title: "Doppelter Komparativ",
            prompt:
              "Mit je ... desto oder je ... umso beschreibt man, dass zwei Entwicklungen zusammenhängen.",
            headers: ["Struktur", "Funktion", "Beispiel"],
            rows: [
              {
                question: "je + Komparativ, desto + Komparativ",
                structure: "Zusammenhang zwischen zwei Entwicklungen",
                example:
                  "Je älter der Käse ist, desto besser schmeckt er.",
              },
              {
                question: "je + Komparativ, umso + Komparativ",
                structure: "gleiche Bedeutung wie je ... desto",
                example:
                  "Je länger man vergleicht, umso besser findet man das passende Angebot.",
              },
              {
                question: "Werbung und Konsum",
                structure: "je mehr ..., desto mehr ...",
                example:
                  "Je mehr Produkte man kauft, desto mehr Rabatt bekommt man.",
              },
              {
                question: "Produktbeschreibung",
                structure: "je einfacher ..., desto attraktiver ...",
                example:
                  "Je einfacher die Bedienung ist, desto attraktiver wirkt das Produkt.",
              },
            ],
          },
          {
            title: "Nützliche Formulierungen für Werbung",
            prompt:
              "Mit diesen Mustern kannst du Werbetexte oder Produktbeschreibungen formulieren.",
            headers: ["Muster", "Funktion", "Beispiel"],
            rows: [
              {
                question: "immer + Komparativ",
                structure: "Entwicklung betonen",
                example:
                  "Unsere Geräte werden immer schneller, leiser und energiesparender.",
              },
              {
                question: "noch + Komparativ",
                structure: "Verbesserung betonen",
                example:
                  "Das neue Modell ist noch leichter und noch praktischer.",
              },
              {
                question: "der/die/das + Superlativ",
                structure: "ein Produkt hervorheben",
                example:
                  "Das ist der günstigste Tarif für junge Leute.",
              },
              {
                question: "besonders + Adjektiv",
                structure: "positive Wirkung verstärken",
                example:
                  "Die App ist besonders intuitiv und einfach zu bedienen.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-werden-futur-intention",
        title: "werden (Übersicht)",
        type: "table",
        note:
          "werden kann Vollverb oder Hilfsverb sein. Als Hilfsverb bildet es Passiv mit Partizip II und Futur I mit Infinitiv. Für Handlungen in der Zukunft benutzt man im Deutschen aber oft einfach Präsens.",
        sections: [
          {
            title: "Die drei wichtigsten Verwendungen",
            prompt:
              "werden hat je nach Struktur eine andere Funktion: Veränderung, Passiv oder Futur I.",
            headers: ["Verwendung", "Struktur", "Beispiel"],
            rows: [
              {
                question: "werden als Vollverb",
                structure: "werden + Adjektiv / Nomen",
                example: "Ich werde gesund. / Paul wird Abteilungsleiter.",
              },
              {
                question: "werden als Hilfsverb: Passiv",
                structure: "werden + Partizip II",
                example: "Der Motor wird eingebaut.",
              },
              {
                question: "werden als Hilfsverb: Futur I",
                structure: "werden + Infinitiv",
                example: "Ich werde mich darum kümmern.",
              },
            ],
          },
          {
            title: "Präsens und Futur I",
            prompt:
              "Mit werden + Infinitiv kann man ankündigen, was man tun wird. Der Infinitiv steht am Satzende.",
            headers: ["Präsens", "Futur I", "Struktur"],
            rows: [
              {
                question: "Ich kümmere mich persönlich darum.",
                structure:
                  "Ich werde mich persönlich darum kümmern.",
                example: "werden + Infinitiv: werde ... kümmern",
              },
              {
                question: "Wir überprüfen das.",
                structure: "Wir werden das überprüfen.",
                example: "werden + Infinitiv: werden ... überprüfen",
              },
              {
                question: "Morgen regnet es.",
                structure: "Morgen wird es regnen.",
                example: "werden + Infinitiv: wird ... regnen",
              },
            ],
          },
          {
            title: "Bedeutungen von Futur I",
            prompt:
              "Futur I kann eine Absicht, ein Versprechen, eine Erwartung oder eine Vermutung ausdrücken.",
            headers: ["Bedeutung", "Situation", "Beispiel"],
            rows: [
              {
                question: "Absicht",
                structure: "Beschwerde",
                example:
                  "Ich werde mich schriftlich über die Lieferverzögerung beschweren.",
              },
              {
                question: "Versprechen",
                structure: "Kundenservice",
                example:
                  "Wir werden Ihre Reklamation sofort bearbeiten.",
              },
              {
                question: "Erwartung",
                structure: "Lieferung",
                example:
                  "Der Händler wird die Ware morgen verschicken.",
              },
              {
                question: "Vermutung",
                structure: "Alltag",
                example:
                  "Wo ist Ines? Sie wird noch im Stau stehen.",
              },
              {
                question: "Zusage",
                structure: "Rückgabe",
                example:
                  "Wir werden Ihnen den Kaufpreis zurückerstatten.",
              },
              {
                question: "Ankündigung",
                structure: "Verkaufsgespräch",
                example:
                  "Ich werde Ihnen zuerst die wichtigsten Funktionen zeigen.",
              },
            ],
          },
          {
            title: "Satzbau",
            prompt:
              "werden steht auf Position 2. Der Infinitiv steht am Ende des Satzes.",
            headers: ["Position 1", "Position 2", "Mittelfeld", "Satzende"],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Ich",
                  "werde",
                  "mich persönlich darum",
                  "kümmern.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Wir",
                  "werden",
                  "das Problem heute noch",
                  "überprüfen.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Der Händler",
                  "wird",
                  "die Ware kostenlos",
                  "ersetzen.",
                ],
              },
            ],
          },
          {
            title: "Achtung: Zukunft oft mit Präsens",
            prompt:
              "Für Handlungen in der Zukunft benutzt man im Deutschen normalerweise die Präsensform, besonders wenn ein Zeitwort die Zukunft schon klar macht.",
            headers: ["Zeitangabe", "Präsensform", "Bedeutung"],
            rows: [
              {
                question: "im Sommer",
                structure: "Im Sommer fahre ich nach Italien.",
                example: "Zukunft ist durch im Sommer klar.",
              },
              {
                question: "am Freitag",
                structure: "Die nächste Sitzung ist am Freitag.",
                example: "Der Satz meint ein zukünftiges Ereignis.",
              },
              {
                question: "morgen",
                structure: "Morgen liefern wir die Bestellung.",
                example:
                  "In Alltag, Werbung und Kundenservice klingt Präsens oft natürlicher.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-partizip-ii-als-adjektiv",
        title: "Partizipien als Adjektive",
        type: "table",
        note:
          "Partizip I beschreibt meistens eine laufende Handlung. Partizip II beschreibt meistens ein Ergebnis oder eine abgeschlossene Handlung. Beide bekommen wie normale Adjektive eine Endung.",
        sections: [
          {
            title: "Grundidee",
            prompt:
              "Partizipien können wie Adjektive vor einem Nomen stehen. Sie beschreiben eine Handlung, einen Zustand oder ein Ergebnis.",
            headers: ["Satz", "Verb", "Partizip + Endung"],
            rows: [
              {
                question: "Der einfahrende Zug kommt auf Gleis 3 an.",
                structure: "einfahren",
                example: "einfahrend + -e = einfahrende",
              },
              {
                question:
                  "Der Kühlschrank hat ein eingebautes Gefrierfach.",
                structure: "einbauen",
                example: "eingebaut + -es = eingebautes",
              },
              {
                question:
                  "Das Adjektiv eingebautes kommt vom Verb einbauen.",
                structure: "einbauen",
                example: "eingebaut = Partizip II",
              },
            ],
          },
          {
            title: "Partizip I oder Partizip II?",
            prompt:
              "Partizip I zeigt: Die Handlung dauert an. Partizip II zeigt oft: Die Handlung ist abgeschlossen.",
            headers: [
              "Form",
              "Beispiel",
              "Bildung",
              "Grundsatz",
              "Bedeutung",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Partizip I",
                  "der einfahrende Zug",
                  "einfahrend + Adjektivendung",
                  "Der Zug fährt ein.",
                  "Die Handlung dauert an.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Partizip II",
                  "der eingefahrene Zug",
                  "eingefahren + Adjektivendung",
                  "Aktiv: Der Zug ist eingefahren.",
                  "Die Handlung ist abgeschlossen.",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "Partizip II",
                  "der eingebaute Motor",
                  "eingebaut + Adjektivendung",
                  "Passiv: Der Motor wurde eingebaut.",
                  "Das Ergebnis ist sichtbar.",
                ],
              },
            ],
          },
          {
            title: "Bildung",
            prompt:
              "Partizip I oder Partizip II + Adjektivendung. Die Endung hängt vom Artikel, Genus, Numerus und Kasus ab.",
            headers: ["Formel", "Bedeutung", "Beispiel"],
            rows: [
              {
                question: "Partizip I + Adjektivendung",
                structure: "laufende Handlung",
                example: "ein laufendes Angebot",
              },
              {
                question: "Partizip II + Adjektivendung",
                structure: "abgeschlossene Handlung",
                example: "ein eingebautes Gefrierfach",
              },
              {
                question: "Partizip II + -e",
                structure: "feminin / Nominativ oder Akkusativ",
                example: "eine reduzierte Ware",
              },
              {
                question: "Partizip II + -er",
                structure: "maskulin / Nominativ",
                example: "ein gebrauchter Laptop",
              },
              {
                question: "Partizip II + -en",
                structure: "nach bestimmtem Artikel oft -en",
                example: "der beschädigte Artikel / den beschädigten Artikel",
              },
            ],
          },
          {
            title: "Kein Partizip II als Adjektiv",
            prompt:
              "Einige Verben bilden normalerweise kein sinnvolles Partizip II als Adjektiv.",
            headers: ["Verbgruppe", "Beispiele", "Hinweis"],
            rows: [
              {
                question: "sein / haben",
                structure: "sein, haben",
                example:
                  "Man sagt nicht: der gewesene Kunde oder das gehabte Produkt im normalen Gebrauch.",
              },
              {
                question: "Zustand oder einfache Tätigkeit",
                structure:
                  "arbeiten, antworten, danken, gefallen, nützen, schlafen, sitzen, stehen",
                example:
                  "Diese Verben beschreiben oft keinen klar abgeschlossenen Vorgang mit Ergebnis.",
              },
            ],
          },
          {
            title: "Werbung und Konsum: typische Beispiele",
            prompt:
              "Diese Formen sind sehr praktisch, wenn man Produkte, Angebote oder Reklamationen beschreibt.",
            headers: ["Partizip als Adjektiv", "Verb", "Beispielsatz"],
            rows: [
              {
                question: "laufende Aktion",
                structure: "laufen",
                example:
                  "Die laufende Aktion gilt nur bis Freitag.",
              },
              {
                question: "steigende Preise",
                structure: "steigen",
                example:
                  "Steigende Preise beeinflussen das Kaufverhalten.",
              },
              {
                question: "reduzierte Preise",
                structure: "reduzieren",
                example:
                  "Im Online-Shop gibt es heute viele reduzierte Preise.",
              },
              {
                question: "gelieferte Ware",
                structure: "liefern",
                example:
                  "Die gelieferte Ware entspricht nicht der Beschreibung.",
              },
              {
                question: "beschädigtes Paket",
                structure: "beschädigen",
                example:
                  "Ich möchte ein beschädigtes Paket reklamieren.",
              },
              {
                question: "geöffnete Verpackung",
                structure: "öffnen",
                example:
                  "Eine geöffnete Verpackung kann man nicht immer zurückgeben.",
              },
              {
                question: "beworbene Produkte",
                structure: "bewerben",
                example:
                  "Beworbene Produkte wirken oft attraktiver als normale Produkte.",
              },
              {
                question: "ausverkaufter Artikel",
                structure: "ausverkaufen",
                example:
                  "Der ausverkaufte Artikel ist nächste Woche wieder verfügbar.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-deklination-adjektive",
        title: "Deklination der Adjektive",
        type: "table",
        note:
          "Die Adjektivendung hängt vom Kasus, Genus, Numerus und von der Artikelart ab. Nach der/dieser stehen meistens schwache Endungen (-e, -en). Nach ein/mein und ohne Artikel muss das Adjektiv mehr grammatische Information tragen.",
        sections: [
          {
            title: "Nominativ",
            prompt:
              "Wer oder was? Im Nominativ beschreibt das Adjektiv das Subjekt oder eine Nomen-Ergänzung mit sein/werden/bleiben.",
            headers: [
              "Artikelart",
              "Maskulin",
              "Feminin",
              "Neutral",
              "Plural",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der / dieser",
                  "der große Tisch",
                  "die helle Lampe",
                  "das kalte Zimmer",
                  "die alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ein / mein",
                  "ein großer Tisch",
                  "eine helle Lampe",
                  "ein kaltes Zimmer",
                  "meine alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ohne Artikel",
                  "großer Tisch",
                  "helle Lampe",
                  "kaltes Zimmer",
                  "alte Bücher",
                ],
              },
            ],
          },
          {
            title: "Akkusativ",
            prompt:
              "Wen oder was? Wichtig: Nur maskulin Singular verändert sich stark: der große Tisch wird den großen Tisch.",
            headers: [
              "Artikelart",
              "Maskulin",
              "Feminin",
              "Neutral",
              "Plural",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der / dieser",
                  "den großen Tisch",
                  "die helle Lampe",
                  "das kalte Zimmer",
                  "die alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ein / mein",
                  "einen großen Tisch",
                  "eine helle Lampe",
                  "ein kaltes Zimmer",
                  "meine alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ohne Artikel",
                  "großen Tisch",
                  "helle Lampe",
                  "kaltes Zimmer",
                  "alte Bücher",
                ],
              },
            ],
          },
          {
            title: "Dativ",
            prompt:
              "Wem? Im Dativ bekommt das Adjektiv fast immer -en. Im Plural bekommt das Nomen zusätzlich oft -n.",
            headers: [
              "Artikelart",
              "Maskulin",
              "Feminin",
              "Neutral",
              "Plural",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der / dieser",
                  "dem großen Tisch",
                  "der hellen Lampe",
                  "dem kalten Zimmer",
                  "den alten Büchern",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ein / mein",
                  "einem großen Tisch",
                  "einer hellen Lampe",
                  "einem kalten Zimmer",
                  "meinen alten Büchern",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ohne Artikel",
                  "großem Tisch",
                  "heller Lampe",
                  "kaltem Zimmer",
                  "alten Büchern",
                ],
              },
            ],
          },
          {
            title: "Genitiv",
            prompt:
              "Wessen? Im Genitiv steht bei maskulin und neutral oft -s oder -es am Nomen.",
            headers: [
              "Artikelart",
              "Maskulin",
              "Feminin",
              "Neutral",
              "Plural",
            ],
            rows: [
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "der / dieser",
                  "des großen Tisches",
                  "der hellen Lampe",
                  "des kalten Zimmers",
                  "der alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ein / mein",
                  "eines großen Tisches",
                  "einer hellen Lampe",
                  "eines kalten Zimmers",
                  "meiner alten Bücher",
                ],
              },
              {
                question: "",
                structure: "",
                example: "",
                cells: [
                  "ohne Artikel",
                  "großen Tisches",
                  "heller Lampe",
                  "kalten Zimmers",
                  "alter Bücher",
                ],
              },
            ],
          },
          {
            title: "Werbung und Konsum: Mini-Beispiele",
            prompt:
              "Adjektivendungen tauchen ständig in Produktbeschreibungen, Anzeigen und Beschwerden auf.",
            headers: ["Kasus", "Beispiel", "Warum?"],
            rows: [
              {
                question: "Nominativ",
                structure: "Ein neuer Laptop ist im Angebot.",
                example: "ein + maskulin + Nominativ: neuer",
              },
              {
                question: "Akkusativ",
                structure: "Ich suche einen günstigen Tarif.",
                example: "einen + maskulin + Akkusativ: günstigen",
              },
              {
                question: "Dativ",
                structure: "Mit dem neuen Gutschein spart man Geld.",
                example: "dem + maskulin + Dativ: neuen",
              },
              {
                question: "Genitiv",
                structure:
                  "Die Qualität des teuren Produkts überzeugt viele Kunden.",
                example: "des + neutral + Genitiv: teuren",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-wichtige-redemittel",
        title: "Wichtige Redemittel",
        type: "table",
        note:
          "Diese Redemittel helfen beim Sprechen und Schreiben über Werbung, Produktkauf und Beschwerden.",
        sections: [
          {
            title: "Werbung",
            prompt:
              "Formen, Geschichte und typische Begriffe rund um Werbung.",
            headers: ["Bereich", "Redemittel / Wortschatz", "Beispiel"],
            rows: [
              {
                question: "Werbeformen",
                structure:
                  "E-Mail-Werbung, Influencer-Werbung, Social-Media-Marketing, Suchmaschinenwerbung, Werbefilm/Werbespot, Printwerbung, Sponsoring",
                example:
                  "Viele Firmen setzen heute auf Social-Media-Marketing und Influencer-Werbung.",
              },
              {
                question: "Printwerbung",
                structure: "Plakate, Flyer, Zeitungsannoncen",
                example:
                  "Für lokale Angebote sind Plakate und Flyer immer noch nützlich.",
              },
              {
                question: "Digitale Werbung",
                structure: "personalisierte Display-Werbung",
                example:
                  "Personalisierte Display-Werbung passt oft zum Profil des Nutzers.",
              },
              {
                question: "Geschichte der Werbung",
                structure:
                  "Werbetafeln aus Stein, Marktschreier, Werbezeitungen, Pressefreiheit, Zielgruppenwerbung",
                example:
                  "Früher machten Marktschreier auf Produkte aufmerksam.",
              },
              {
                question: "Ziele der Werbung",
                structure:
                  "bekannte Markennamen, Konsumenten wecken, Wünsche erfüllen, Scheinwelten etablieren",
                example:
                  "Werbung versucht, Wünsche bei Konsumenten zu wecken.",
              },
            ],
          },
          {
            title: "Produkteigenschaften",
            prompt:
              "Wichtige Adjektive, die in Werbetexten häufig vorkommen.",
            headers: ["Kategorie", "Adjektive", "Beispiel"],
            rows: [
              {
                question: "Positive Wirkung",
                structure:
                  "einzigartig, fantastisch, erstklassig, hochwertig",
                example:
                  "Das Unternehmen wirbt mit einem einzigartigen und erstklassigen Service.",
              },
              {
                question: "Preis",
                structure: "günstig, supergünstig, preiswert",
                example:
                  "Der neue Tarif ist preiswert und trotzdem leistungsstark.",
              },
              {
                question: "Modernität",
                structure: "topmodern, hochaktuell, brandneu, innovativ",
                example:
                  "Das brandneue Modell hat eine topmoderne Kamera.",
              },
              {
                question: "Wirkung",
                structure: "riesig, superschnell, bildschön",
                example:
                  "Die Werbung verspricht ein superschnelles und bildschönes Gerät.",
              },
            ],
          },
          {
            title: "Produktkauf",
            prompt:
              "Fragen und Formulierungen für Einkauf, Bezahlung, Lieferung und Garantie.",
            headers: ["Situation", "Redemittel", "Beispiel"],
            rows: [
              {
                question: "Wunsch äußern",
                structure: "Ich hätte gern ... / Ich brauche ...",
                example: "Ich hätte gern dieses Modell in Schwarz.",
              },
              {
                question: "Preis",
                structure: "Was kostet ...?",
                example: "Was kostet die Lieferung?",
              },
              {
                question: "Bezahlung",
                structure: "Kann ich mit ... bezahlen?",
                example: "Kann ich mit Karte bezahlen?",
              },
              {
                question: "Material",
                structure: "Aus welchem Material ...?",
                example: "Aus welchem Material ist die Tasche?",
              },
              {
                question: "Größe und Farbe",
                structure: "In welchen Größen ...? / In welchen Farben ...?",
                example: "In welchen Farben gibt es dieses Produkt?",
              },
              {
                question: "Umtausch und Garantie",
                structure:
                  "Kann ich ... umtauschen? / Wie lange hat ... Garantie?",
                example:
                  "Kann ich den Artikel umtauschen, wenn er nicht passt?",
              },
              {
                question: "Lieferung",
                structure: "Wann können Sie ... liefern?",
                example: "Wann können Sie die Bestellung liefern?",
              },
            ],
          },
          {
            title: "Beschwerde",
            prompt:
              "Formulierungen, um sich zu beschweren oder auf eine Beschwerde zu reagieren.",
            headers: ["Situation", "Redemittel", "Beispiel"],
            rows: [
              {
                question: "Sich beschweren",
                structure: "Ich möchte mich über ... beschweren.",
                example:
                  "Ich möchte mich über die verspätete Lieferung beschweren.",
              },
              {
                question: "Vereinbarung",
                structure: "Es war abgesprochen / vereinbart, dass ...",
                example:
                  "Es war vereinbart, dass die Ware bis Montag geliefert wird.",
              },
              {
                question: "Erwartung",
                structure: "Ich habe erwartet, dass ...",
                example:
                  "Ich habe erwartet, dass das Produkt pünktlich ankommt.",
              },
              {
                question: "Frist setzen",
                structure:
                  "Wenn Sie nicht bis zum Wochenende liefern, dann ...",
                example:
                  "Wenn Sie nicht bis zum Wochenende liefern, dann möchte ich mein Geld zurück.",
              },
              {
                question: "Unzufriedenheit",
                structure: "Ich bin nicht zufrieden mit ...",
                example: "Ich bin nicht zufrieden mit dem Kundenservice.",
              },
              {
                question: "Forderung",
                structure:
                  "Ich fordere mein Geld in voller Höhe zurück.",
                example:
                  "Wegen der beschädigten Ware fordere ich mein Geld in voller Höhe zurück.",
              },
              {
                question: "Reagieren",
                structure:
                  "Ich kann Ihren Ärger verstehen. / Das tut mir leid.",
                example:
                  "Das tut mir leid. Ich werde mich persönlich darum kümmern.",
              },
              {
                question: "Lösung anbieten",
                structure:
                  "Ich werde dafür sorgen, dass ... / Wir werden das prüfen.",
                example:
                  "Wir werden das überprüfen und Ihnen schnell antworten.",
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-4-verbtabellen-unregelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Unregelmäßige Verben",
        type: "verbs",
        note:
          "Unregelmäßige Verben aus Kapitel 4. Formen in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "eintragen (sich in eine Liste)",
            praesens: "sie trägt sich ein",
            praeteritum: "sie trug sich ein",
            perfekt: "sie hat sich eingetragen",
            translation: "inscribirse / apuntarse en una lista",
          },
          {
            infinitiv: "gefallen (jemandem)",
            praesens: "sie gefällt",
            praeteritum: "sie gefiel",
            perfekt: "sie hat gefallen",
            translation: "gustar a alguien",
          },
          {
            infinitiv: "unterbrechen (einen Film)",
            praesens: "sie unterbricht",
            praeteritum: "sie unterbrach",
            perfekt: "sie hat unterbrochen",
            translation: "interrumpir una película",
          },
          {
            infinitiv: "verbinden",
            praesens: "sie verbindet",
            praeteritum: "sie verband",
            perfekt: "sie hat verbunden",
            translation: "conectar / unir",
          },
          {
            infinitiv: "verfahren (sich)",
            praesens: "sie verfährt sich",
            praeteritum: "sie verfuhr sich",
            perfekt: "sie hat sich verfahren",
            translation: "perderse en ruta / equivocarse de camino",
          },
          {
            infinitiv: "verlaufen (sich)",
            praesens: "sie verläuft sich",
            praeteritum: "sie verlief sich",
            perfekt: "sie hat sich verlaufen",
            translation: "perderse caminando",
          },
          {
            infinitiv: "verschreiben (sich)",
            praesens: "sie verschreibt sich",
            praeteritum: "sie verschrieb sich",
            perfekt: "sie hat sich verschrieben",
            translation: "equivocarse al escribir",
          },
        ],
      },
      {
        id: "kapitel-4-verbtabellen-regelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Einige regelmäßige Verben",
        type: "verbs",
        note:
          "Regelmäßige Verben aus Kapitel 4. Formen in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "entspannen (sich)",
            praesens: "sie entspannt sich",
            praeteritum: "sie entspannte sich",
            perfekt: "sie hat sich entspannt",
            translation: "relajarse",
          },
          {
            infinitiv: "entwickeln (sich / etwas)",
            praesens: "sie entwickelt",
            praeteritum: "sie entwickelte",
            perfekt: "sie hat entwickelt",
            translation: "desarrollar / desarrollarse",
          },
          {
            infinitiv: "herstellen (ein Produkt)",
            praesens: "sie stellt her",
            praeteritum: "sie stellte her",
            perfekt: "sie hat hergestellt",
            translation: "fabricar / producir un producto",
          },
          {
            infinitiv: "kümmern (sich um etwas)",
            praesens: "sie kümmert sich",
            praeteritum: "sie kümmerte sich",
            perfekt: "sie hat sich gekümmert",
            translation: "ocuparse de algo",
          },
          {
            infinitiv: "liefern (eine Ware)",
            praesens: "sie liefert",
            praeteritum: "sie lieferte",
            perfekt: "sie hat geliefert",
            translation: "entregar / suministrar mercancía",
          },
          {
            infinitiv: "prüfen (etwas)",
            praesens: "sie prüft",
            praeteritum: "sie prüfte",
            perfekt: "sie hat geprüft",
            translation: "revisar / comprobar algo",
          },
          {
            infinitiv: "überprüfen (etwas)",
            praesens: "sie überprüft",
            praeteritum: "sie überprüfte",
            perfekt: "sie hat überprüft",
            translation: "verificar / revisar algo",
          },
          {
            infinitiv: "richten (sich an eine Zielgruppe)",
            praesens: "sie richtet sich",
            praeteritum: "sie richtete sich",
            perfekt: "sie hat sich gerichtet",
            translation: "dirigirse a un grupo objetivo",
          },
          {
            infinitiv: "verändern (sich / etwas)",
            praesens: "sie verändert",
            praeteritum: "sie veränderte",
            perfekt: "sie hat verändert",
            translation: "cambiar / modificar",
          },
          {
            infinitiv: "verhören (sich)",
            praesens: "sie verhört sich",
            praeteritum: "sie verhörte sich",
            perfekt: "sie hat sich verhört",
            translation: "oír mal / entender mal",
          },
          {
            infinitiv: "verrechnen (sich)",
            praesens: "sie verrechnet sich",
            praeteritum: "sie verrechnete sich",
            perfekt: "sie hat sich verrechnet",
            translation: "equivocarse al calcular",
          },
          {
            infinitiv: "verspäten (sich)",
            praesens: "sie verspätet sich",
            praeteritum: "sie verspätete sich",
            perfekt: "sie hat sich verspätet",
            translation: "retrasarse",
          },
        ],
      },
    ],
  },
  {
    id: "kapitel-5",
    label: "Kapitel 5",
    title: "Lernen, lernen und nochmals lernen",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.lernen,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Erfahrungen und Strategien beim Sprachenlernen berichten",
          "Tipps zum Sprachenlernen geben",
          "Über die physischen Vorgänge beim Sprachenlernen und Lerntypen diskutieren",
          "Sich über Weiterbildungsangebote in Anzeigen und schriftlich informieren",
          "Über lebenslanges Lernen sprechen",
          "Über die Schulzeit reden",
          "Über Noten und Leistungsbeurteilung diskutieren",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Sprachen lernen",
          "Lebenslanges Lernen und Weiterbildung",
          "Lerntipps",
          "Schule, Zeugnisse und Noten",
        ],
      },
    ],
    resources: [
      {
        id: "kapitel-5-finalangaben",
        title: "Finalangaben",
        type: "table",
        note: "Finalangaben drücken ein Ziel oder einen Zweck aus: Warum? Wozu? Mit welchem Ziel?",
        sections: [
          {
            title: "um ... zu / damit",
            prompt:
              "Mit um ... zu bildet man einen Infinitivsatz. Mit damit bildet man einen Nebensatz mit eigenem Subjekt.",
            headers: ["Form", "Beispiel", "Satztyp", "ES", "EN"],
            rows: [
              {
                question: "um ... zu + Infinitiv",
                structure:
                  "Susanne möchte einen Kurs besuchen, um später Romane schreiben zu können.",
                example: "Infinitivsatz",
                cells: [
                  "um ... zu + Infinitiv",
                  "Susanne möchte einen Kurs besuchen, um später Romane schreiben zu können.",
                  "Infinitivsatz",
                  "Susanne quiere asistir a un curso para poder escribir novelas más tarde.",
                  "Susanne wants to attend a course in order to be able to write novels later.",
                ],
              },
              {
                question: "damit + Nebensatz",
                structure:
                  "Susanne möchte Romane schreiben, damit ihr Freund beeindruckt ist.",
                example: "Nebensatz",
                cells: [
                  "damit + Nebensatz",
                  "Susanne möchte Romane schreiben, damit ihr Freund beeindruckt ist.",
                  "Nebensatz",
                  "Susanne quiere escribir novelas para que su amigo esté impresionado.",
                  "Susanne wants to write novels so that her friend is impressed.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-nomen-verb-verbindungen",
        title: "Offizieller Sprachgebrauch: Nomen-Verb-Verbindungen",
        type: "table",
        note: "Im Geschäftsleben, in der Politik oder auf Ämtern werden oft feste Verbindungen aus einem Nomen und einem Verb verwendet. Sie verleihen der Sprache einen offiziellen Charakter.",
        sections: [
          {
            title: "Nomen-Verb-Verbindungen erkennen",
            prompt:
              "Nomen-Verb-Verbindungen klingen formeller als einfache Verben oder Adjektive.",
            headers: [
              "Nomen-Verb-Verbindung",
              "Einfachere Form",
              "Bedeutung",
              "ES",
              "EN",
            ],
            rows: [
              {
                question: "eine wichtige Rolle spielen",
                structure:
                  "Bei der Globalisierung spielen Fremdsprachen eine wichtige Rolle.",
                example:
                  "Bei der Globalisierung sind Fremdsprachen wichtig.",
                cells: [
                  "eine wichtige Rolle spielen",
                  "Bei der Globalisierung spielen Fremdsprachen eine wichtige Rolle.",
                  "Bei der Globalisierung sind Fremdsprachen wichtig.",
                  "En la globalización, los idiomas extranjeros desempeñan un papel importante.",
                  "In globalization, foreign languages play an important role.",
                ],
              },
              {
                question: "Verantwortung übernehmen",
                structure: "Man muss plötzlich Verantwortung übernehmen.",
                example: "Man ist plötzlich verantwortlich.",
                cells: [
                  "Verantwortung übernehmen",
                  "Man muss plötzlich Verantwortung übernehmen.",
                  "Man ist plötzlich verantwortlich.",
                  "De repente hay que asumir responsabilidad.",
                  "Suddenly, one has to take responsibility.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-demonstrativpronomen-derselbe",
        title: "Demonstrativpronomen: derselbe / dieselbe / dasselbe",
        type: "table",
        note: "Die Demonstrativpronomen derselbe, dieselbe, dasselbe machen deutlich, dass Personen oder Sachen identisch sind.",
        sections: [
          {
            title: "Identität ausdrücken",
            prompt:
              "Man benutzt derselbe/dieselbe/dasselbe, wenn genau dieselbe Person oder Sache gemeint ist.",
            headers: ["Form", "Beispiel", "Bedeutung", "ES", "EN"],
            rows: [
              {
                question: "derselbe",
                structure:
                  "In einer deutschlandweiten Studie wurde ein und derselbe Aufsatz von mehr als tausend Lehrern bewertet.",
                example: "maskulin: genau derselbe Aufsatz",
                cells: [
                  "derselbe",
                  "In einer deutschlandweiten Studie wurde ein und derselbe Aufsatz von mehr als tausend Lehrern bewertet.",
                  "genau derselbe Aufsatz, nicht nur ein ähnlicher",
                  "En un estudio en toda Alemania, uno y el mismo ensayo fue evaluado por más de mil profesores.",
                  "In a Germany-wide study, one and the same essay was graded by more than a thousand teachers.",
                ],
              },
              {
                question: "dieselbe",
                structure:
                  "In der Studie wurde ein und dieselbe Mathematikarbeit von vielen Lehrern bewertet.",
                example: "feminin: genau dieselbe Arbeit",
                cells: [
                  "dieselbe",
                  "In der Studie wurde ein und dieselbe Mathematikarbeit von vielen Lehrern bewertet.",
                  "genau dieselbe Arbeit, nicht nur eine ähnliche",
                  "En el estudio, uno y el mismo examen de matemáticas fue evaluado por muchos profesores.",
                  "In the study, one and the same math test was graded by many teachers.",
                ],
              },
              {
                question: "dasselbe",
                structure: "Wir haben dasselbe Problem.",
                example: "neutral: genau dasselbe Problem",
                cells: [
                  "dasselbe",
                  "Wir haben dasselbe Problem.",
                  "identische Sache / identisches Problem",
                  "Tenemos el mismo problema.",
                  "We have the same problem.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-demonstrativpronomen-derselbe-deklination",
        title: "Deklination: derselbe / dieselbe / dasselbe",
        type: "table",
        note: "Die Pronomen werden im ersten Wortteil (der-, die-, das-) wie ein bestimmter Artikel dekliniert. Die Endung von -selb entspricht der Adjektivdeklination. Die Ergänzung ein und derselbe/dieselbe/dasselbe verstärkt die Aussage, dass Personen oder Sachen identisch sind.",
        sections: [
          {
            title: "Singular und Plural",
            prompt:
              "derselbe/dieselbe/dasselbe richtet sich nach Genus, Numerus und Kasus des Nomens.",
            headers: [
              "Kasus",
              "maskulin",
              "feminin",
              "neutral",
              "Plural",
            ],
            rows: [
              {
                question: "Nominativ",
                structure: "derselbe Aufsatz",
                example: "dieselbe Arbeit / dasselbe Zeugnis / dieselben Bücher",
                cells: [
                  "Nominativ",
                  "derselbe Aufsatz",
                  "dieselbe Arbeit",
                  "dasselbe Zeugnis",
                  "dieselben Bücher",
                ],
              },
              {
                question: "Akkusativ",
                structure: "denselben Aufsatz",
                example: "dieselbe Arbeit / dasselbe Zeugnis / dieselben Bücher",
                cells: [
                  "Akkusativ",
                  "denselben Aufsatz",
                  "dieselbe Arbeit",
                  "dasselbe Zeugnis",
                  "dieselben Bücher",
                ],
              },
              {
                question: "Dativ",
                structure: "demselben Aufsatz",
                example: "derselben Arbeit / demselben Zeugnis / denselben Büchern",
                cells: [
                  "Dativ",
                  "demselben Aufsatz",
                  "derselben Arbeit",
                  "demselben Zeugnis",
                  "denselben Büchern",
                ],
              },
              {
                question: "Genitiv",
                structure: "desselben Aufsatzes",
                example: "derselben Arbeit / desselben Zeugnisses / derselben Bücher",
                cells: [
                  "Genitiv",
                  "desselben Aufsatzes",
                  "derselben Arbeit",
                  "desselben Zeugnisses",
                  "derselben Bücher",
                ],
              },
            ],
          },
          {
            title: "Merksätze",
            prompt:
              "So erkennst du die Form schneller.",
            headers: ["Regel", "Deutsch", "ES", "EN"],
            rows: [
              {
                question: "Artikelteil",
                structure:
                  "der-, die-, das- wird wie der bestimmte Artikel dekliniert.",
                example: "artículo definido",
                cells: [
                  "Artikelteil",
                  "der-, die-, das- wird wie der bestimmte Artikel dekliniert.",
                  "La primera parte se declina como el artículo definido.",
                  "The first part is declined like the definite article.",
                ],
              },
              {
                question: "Verstärkung",
                structure:
                  "ein und derselbe / dieselbe / dasselbe verstärkt die Identität.",
                example: "identisch",
                cells: [
                  "Verstärkung",
                  "ein und derselbe / dieselbe / dasselbe verstärkt die Identität.",
                  "La expresión refuerza que se trata exactamente de la misma persona o cosa.",
                  "The expression emphasizes that it is exactly the same person or thing.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-konditional-konsekutivangaben",
        title: "Konditional- und Konsekutivangaben",
        type: "table",
        note: "Konditionalangaben nennen eine Bedingung. Konsekutivangaben nennen eine Folge.",
        sections: [
          {
            title: "Bedingung und Folge",
            prompt:
              "wenn leitet einen Nebensatz ein. sonst/andernfalls leitet einen Hauptsatz ein und steht immer im zweiten Satz.",
            headers: ["Angabe", "Konnektor", "Beispiel", "Regel", "ES", "EN"],
            rows: [
              {
                question: "Bedingung",
                structure: "wenn",
                example: "Wenn man Wörter wiederholt, vergisst man sie nicht.",
                cells: [
                  "Bedingung (Konditionalangabe)",
                  "wenn",
                  "Wenn man Wörter wiederholt, vergisst man sie nicht.",
                  "wenn leitet einen Nebensatz ein; der Nebensatz kann im ersten oder zweiten Satz stehen.",
                  "Si uno repite palabras, no las olvida.",
                  "If you repeat words, you do not forget them.",
                ],
              },
              {
                question: "Bedingung",
                structure: "wenn",
                example: "Wenn man Wörter nicht wiederholt, vergisst man sie.",
                cells: [
                  "Bedingung (Konditionalangabe)",
                  "wenn",
                  "Wenn man Wörter nicht wiederholt, vergisst man sie.",
                  "Im Nebensatz mit wenn steht das konjugierte Verb am Ende.",
                  "Si uno no repite palabras, las olvida.",
                  "If you do not repeat words, you forget them.",
                ],
              },
              {
                question: "Folge",
                structure: "sonst / andernfalls",
                example:
                  "Man muss Wörter wiederholen, sonst vergisst man sie.",
                cells: [
                  "Folge (Konsekutivangabe)",
                  "sonst / andernfalls",
                  "Man muss Wörter wiederholen, sonst vergisst man sie.",
                  "sonst/andernfalls leitet einen Hauptsatz ein; das Verb steht auf Position 2.",
                  "Hay que repetir palabras, de lo contrario se olvidan.",
                  "You have to repeat words, otherwise you forget them.",
                ],
              },
              {
                question: "Folge",
                structure: "sonst / andernfalls",
                example:
                  "Man muss Wörter wiederholen, man vergisst sie sonst.",
                cells: [
                  "Folge (Konsekutivangabe)",
                  "sonst / andernfalls",
                  "Man muss Wörter wiederholen, man vergisst sie sonst.",
                  "sonst/andernfalls kann vor oder hinter dem konjugierten Verb stehen.",
                  "Hay que repetir palabras; si no, uno las olvida.",
                  "You have to repeat words; otherwise, you forget them.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-nomen-verb-verbindungen-uebersicht",
        title: "Nomen-Verb-Verbindungen: Übersicht",
        type: "table",
        note: "Diese festen Verbindungen sind typisch für offiziellen und formellen Sprachgebrauch.",
        sections: [
          {
            title: "Verb und Nomen-Verb-Verbindung",
            prompt:
              "Viele einfache Verben können in formellere Nomen-Verb-Verbindungen umgewandelt werden.",
            headers: ["Verb", "Nomen-Verb-Verbindung", "ES", "EN"],
            rows: [
              {
                question: "abschließen",
                structure: "etwas zum Abschluss bringen",
                example: "terminar algo",
                cells: [
                  "abschließen",
                  "etwas zum Abschluss bringen",
                  "llevar algo a término / concluir algo",
                  "to bring something to a conclusion",
                ],
              },
              {
                question: "beantragen",
                structure: "einen Antrag stellen",
                example: "solicitar",
                cells: [
                  "beantragen",
                  "einen Antrag stellen",
                  "presentar una solicitud",
                  "to submit an application",
                ],
              },
              {
                question: "beenden",
                structure: "etwas zu Ende bringen/führen",
                example: "finalizar",
                cells: [
                  "beenden",
                  "etwas zu Ende bringen/führen",
                  "llevar algo a su fin / finalizar algo",
                  "to bring something to an end",
                ],
              },
              {
                question: "sich entscheiden",
                structure:
                  "eine Entscheidung treffen / zu einer Entscheidung kommen",
                example: "decidirse",
                cells: [
                  "sich entscheiden",
                  "eine Entscheidung treffen / zu einer Entscheidung kommen",
                  "tomar una decisión / llegar a una decisión",
                  "to make a decision / to come to a decision",
                ],
              },
              {
                question: "helfen",
                structure: "Hilfe leisten",
                example: "ayudar",
                cells: [
                  "helfen",
                  "Hilfe leisten",
                  "prestar ayuda",
                  "to provide help",
                ],
              },
              {
                question: "hoffen",
                structure: "Hoffnung haben",
                example: "esperar",
                cells: [
                  "hoffen",
                  "Hoffnung haben",
                  "tener esperanza",
                  "to have hope",
                ],
              },
              {
                question: "sich interessieren für",
                structure: "Interesse zeigen an",
                example: "interesarse por",
                cells: [
                  "sich interessieren für",
                  "Interesse zeigen an",
                  "mostrar interés por algo",
                  "to show interest in something",
                ],
              },
              {
                question: "kritisieren",
                structure: "Kritik üben an",
                example: "criticar",
                cells: [
                  "kritisieren",
                  "Kritik üben an",
                  "ejercer crítica sobre algo",
                  "to criticize / to voice criticism of something",
                ],
              },
              {
                question: "lösen",
                structure: "eine Lösung finden",
                example: "resolver",
                cells: [
                  "lösen",
                  "eine Lösung finden",
                  "encontrar una solución",
                  "to find a solution",
                ],
              },
              {
                question: "(etwas) beruflich machen",
                structure: "einen Beruf ausüben",
                example: "ejercer una profesión",
                cells: [
                  "(etwas) beruflich machen",
                  "einen Beruf ausüben",
                  "ejercer una profesión",
                  "to practice / pursue a profession",
                ],
              },
              {
                question: "meinen",
                structure: "eine Meinung vertreten",
                example: "opinar",
                cells: [
                  "meinen",
                  "eine Meinung vertreten",
                  "defender / expresar una opinión",
                  "to hold / represent an opinion",
                ],
              },
              {
                question: "(etwas) tun",
                structure: "Maßnahmen treffen/ergreifen",
                example: "tomar medidas",
                cells: [
                  "(etwas) tun",
                  "Maßnahmen treffen/ergreifen",
                  "tomar medidas",
                  "to take measures",
                ],
              },
              {
                question: "sprechen",
                structure: "ein Gespräch führen",
                example: "hablar / conversar",
                cells: [
                  "sprechen",
                  "ein Gespräch führen",
                  "mantener una conversación",
                  "to have / conduct a conversation",
                ],
              },
              {
                question: "sich verabschieden",
                structure: "Abschied nehmen",
                example: "despedirse",
                cells: [
                  "sich verabschieden",
                  "Abschied nehmen",
                  "despedirse",
                  "to say goodbye / to take leave",
                ],
              },
              {
                question: "wichtig sein",
                structure: "eine Rolle spielen",
                example: "ser importante",
                cells: [
                  "wichtig sein",
                  "eine Rolle spielen",
                  "desempeñar un papel",
                  "to play a role",
                ],
              },
              {
                question: "verantwortlich sein",
                structure: "Verantwortung übernehmen",
                example: "ser responsable",
                cells: [
                  "verantwortlich sein",
                  "Verantwortung übernehmen",
                  "asumir responsabilidad",
                  "to take responsibility",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-veraenderungen-ver-praefix",
        title: "Veränderungen mit dem Präfix ver-",
        type: "table",
        note: "Verben mit dem Präfix ver- drücken im Deutschen neben Fehlhandlungen oft auch Veränderungen aus.",
        sections: [
          {
            title: "ver- als Veränderung",
            prompt:
              "Mit ver- kann man ausdrücken, dass sich eine Eigenschaft verändert.",
            headers: ["Ausgangsform", "Verb mit ver-", "Bedeutung", "ES", "EN"],
            rows: [
              {
                question: "besser werden",
                structure: "sich/etwas verbessern",
                example: "eine positive Veränderung",
                cells: [
                  "besser werden",
                  "sich/etwas verbessern",
                  "etwas wird besser",
                  "mejorar / mejorarse",
                  "to improve / to get better",
                ],
              },
              {
                question: "größer werden",
                structure: "sich/etwas vergrößern",
                example: "eine Veränderung der Größe",
                cells: [
                  "größer werden",
                  "sich/etwas vergrößern",
                  "etwas wird größer",
                  "agrandar / ampliarse",
                  "to enlarge / to become larger",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "kapitel-5-verbtabellen-unregelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Unregelmäßige Verben",
        type: "verbs",
        note: "Unregelmäßige Verben aus Kapitel 5 in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "durchfallen (bei einer Prüfung)",
            praesens: "er fällt durch",
            praeteritum: "er fiel durch",
            perfekt: "er ist durchgefallen",
            translation: "suspender / reprobar un examen",
            translationEn: "to fail an exam",
          },
          {
            infinitiv: "entscheiden (sich)",
            praesens: "er entscheidet sich",
            praeteritum: "er entschied sich",
            perfekt: "er hat sich entschieden",
            translation: "decidirse",
            translationEn: "to decide",
          },
          {
            infinitiv: "ergreifen (Maßnahmen)",
            praesens: "er ergreift",
            praeteritum: "er ergriff",
            perfekt: "er hat ergriffen",
            translation: "tomar medidas",
            translationEn: "to take measures",
          },
          {
            infinitiv: "nachschlagen (ein Wort)",
            praesens: "er schlägt nach",
            praeteritum: "er schlug nach",
            perfekt: "er hat nachgeschlagen",
            translation: "consultar / buscar una palabra",
            translationEn: "to look up a word",
          },
          {
            infinitiv: "nachweisen (etwas)",
            praesens: "er weist nach",
            praeteritum: "er wies nach",
            perfekt: "er hat nachgewiesen",
            translation: "demostrar / probar algo",
            translationEn: "to prove / to demonstrate something",
          },
          {
            infinitiv: "vergessen (Wörter)",
            praesens: "er vergisst",
            praeteritum: "er vergaß",
            perfekt: "er hat vergessen",
            translation: "olvidar palabras",
            translationEn: "to forget words",
          },
          {
            infinitiv: "verschwinden (aus dem Gedächtnis)",
            praesens: "er verschwindet",
            praeteritum: "er verschwand",
            perfekt: "er ist verschwunden",
            translation: "desaparecer de la memoria",
            translationEn: "to disappear from memory",
          },
          {
            infinitiv: "versinken (im Langzeitspeicher)",
            praesens: "er versinkt",
            praeteritum: "er versank",
            perfekt: "er ist versunken",
            translation: "hundirse / perderse en la memoria a largo plazo",
            translationEn: "to sink into long-term memory",
          },
        ],
      },
      {
        id: "kapitel-5-verbtabellen-regelmaessige-verben",
        title: "Kleines Wörterbuch der Verben: Einige regelmäßige Verben",
        type: "verbs",
        note: "Regelmäßige Verben aus Kapitel 5 in der 3. Person Singular.",
        entries: [
          {
            infinitiv: "ablegen (eine Prüfung)",
            praesens: "er legt ab",
            praeteritum: "er legte ab",
            perfekt: "er hat abgelegt",
            translation: "presentar / hacer un examen",
            translationEn: "to take an exam",
          },
          {
            infinitiv: "ausüben (einen Beruf)",
            praesens: "er übt aus",
            praeteritum: "er übte aus",
            perfekt: "er hat ausgeübt",
            translation: "ejercer una profesión",
            translationEn: "to practice / pursue a profession",
          },
          {
            infinitiv: "beantragen (ein Visum)",
            praesens: "er beantragt",
            praeteritum: "er beantragte",
            perfekt: "er hat beantragt",
            translation: "solicitar una visa",
            translationEn: "to apply for a visa",
          },
          {
            infinitiv: "beeinflussen (etwas)",
            praesens: "er beeinflusst",
            praeteritum: "er beeinflusste",
            perfekt: "er hat beeinflusst",
            translation: "influir en algo",
            translationEn: "to influence something",
          },
          {
            infinitiv: "beherrschen (eine Sprache)",
            praesens: "er beherrscht",
            praeteritum: "er beherrschte",
            perfekt: "er hat beherrscht",
            translation: "dominar un idioma",
            translationEn: "to master / command a language",
          },
          {
            infinitiv: "einprägen (sich etwas)",
            praesens: "er prägt sich ein",
            praeteritum: "er prägte sich ein",
            perfekt: "er hat sich eingeprägt",
            translation: "memorizar algo",
            translationEn: "to memorize something",
          },
          {
            infinitiv: "erzielen (ein gutes Resultat)",
            praesens: "er erzielt",
            praeteritum: "er erzielte",
            perfekt: "er hat erzielt",
            translation: "lograr un buen resultado",
            translationEn: "to achieve a good result",
          },
          {
            infinitiv: "konzentrieren (sich)",
            praesens: "er konzentriert sich",
            praeteritum: "er konzentrierte sich",
            perfekt: "er hat sich konzentriert",
            translation: "concentrarse",
            translationEn: "to concentrate",
          },
          {
            infinitiv: "merken (sich etwas)",
            praesens: "er merkt sich",
            praeteritum: "er merkte sich",
            perfekt: "er hat sich gemerkt",
            translation: "recordar / aprenderse algo",
            translationEn: "to remember / to memorize something",
          },
          {
            infinitiv: "speichern (etwas)",
            praesens: "er speichert",
            praeteritum: "er speicherte",
            perfekt: "er hat gespeichert",
            translation: "guardar / almacenar algo",
            translationEn: "to save / to store something",
          },
          {
            infinitiv: "steigern (die Leistungsfähigkeit)",
            praesens: "er steigert",
            praeteritum: "er steigerte",
            perfekt: "er hat gesteigert",
            translation: "aumentar el rendimiento",
            translationEn: "to increase performance",
          },
          {
            infinitiv: "wiederholen (Wörter)",
            praesens: "er wiederholt",
            praeteritum: "er wiederholte",
            perfekt: "er hat wiederholt",
            translation: "repetir palabras",
            translationEn: "to repeat words",
          },
          {
            infinitiv: "weiterbilden (sich)",
            praesens: "er bildet sich weiter",
            praeteritum: "er bildete sich weiter",
            perfekt: "er hat sich weitergebildet",
            translation: "seguir formándose / capacitarse",
            translationEn: "to continue training / education",
          },
          {
            infinitiv: "verbessern (sich)",
            praesens: "er verbessert sich",
            praeteritum: "er verbesserte sich",
            perfekt: "er hat sich verbessert",
            translation: "mejorar",
            translationEn: "to improve",
          },
          {
            infinitiv: "verschlechtern (sich)",
            praesens: "er verschlechtert sich",
            praeteritum: "er verschlechterte sich",
            perfekt: "er hat sich verschlechtert",
            translation: "empeorar",
            translationEn: "to get worse / to deteriorate",
          },
        ],
      },
    ],
  },
  {
    id: "kapitel-6",
    label: "Kapitel 6",
    title: "Verkehr und Mobilität",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.verkehr,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Verkehrsmittel, den täglichen Verkehr und Verkehrsprobleme berichten",
          "Sich über Autos und Autofahren unterhalten",
          "Verkehrsdurchsagen verstehen",
          "Sich über verschiedene Verkehrs- und Reisesituationen verständigen",
          "Über den Urlaub sprechen",
          "Eine Diskussion über Wünsche und Probleme im Urlaub führen",
          "Eine Beschwerdemail über den Urlaub schreiben",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Probleme im Straßenverkehr",
          "Verkehrsmittel",
          "Die Berliner U-Bahn und das Auto",
          "Urlaub",
        ],
      },
    ],
    resources: [],
  },
  {
    id: "kapitel-7",
    label: "Kapitel 7",
    title: "Gefühle und Eigenschaften",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.gefuhleEingenschaften,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Gefühle sprechen",
          "Über Glückssymbole berichten",
          "Ratschläge und Tipps zu den Themen Glück und Stress geben",
          "Vermutungen ausdrücken",
          "Personen und ihre Charaktere beschreiben",
          "Über Stress, Ärger und Freude reden",
          "Gründe und Folgen nennen",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Gefühle",
          "Vermutungen",
          "Eigenschaften",
          "Stress, Ärger und Freude",
        ],
      },
    ],
    resources: [],
  },
  {
    id: "kapitel-8",
    label: "Kapitel 8",
    title: "Essen und Trinken",
    description: "Platzhalter für Formeln, Satzstrukturen und Beispiele.",
    image: assets.essenTrinken,
    topicGroups: [
      {
        title: "Kommunikation",
        items: [
          "Über Frühstücksgewohnheiten und andere Mahlzeiten reden",
          "Sich über Nahrungsmittel und typische Gewürze des Heimatlandes unterhalten",
          "Über die Zubereitung von Gerichten sprechen",
          "Berichte im Restaurantführer verstehen",
          "Berichte über Restaurantbesuche schreiben",
          "Eine Einladung zum Essen formulieren und darauf reagieren",
          "E-Mails schreiben: Standardformulierungen",
          "Gute Wünsche formulieren",
        ],
      },
      {
        title: "Wortschatz",
        items: [
          "Mahlzeiten",
          "Nahrungsmittel und Gewürze",
          "Rezepte",
          "Restaurants",
          "Gute Wünsche",
          "Standardformulierungen in Briefen",
        ],
      },
    ],
    resources: [],
  },
];
