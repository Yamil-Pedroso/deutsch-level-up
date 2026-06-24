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
    resources: [],
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
    resources: [],
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
