import lengArts from "./images/language-arts.png";
import quiz from "./images/prapositionen/quiz.png";
import flashCards from "./images/prapositionen/flash_card.png";

// Grammatik und Formulierungen
import zeitZeitvertrieb from "./images/grammatik_formulierungen/Zeit_und_Zeitvertreib.png";
import arbeitBeruf from "./images/grammatik_formulierungen/Arbeit_und_Beruf.png";
import medien from "./images/grammatik_formulierungen/Medien.png";
import werbungKonsum from "./images/grammatik_formulierungen/Werbung_und_Konsum.png";
import lernen from "./images/grammatik_formulierungen/Lernen.png";
import verkehr from "./images/grammatik_formulierungen/Verkehr.png";
import gefuhleEingenschaften from "./images/grammatik_formulierungen/Gefuhle_Eingeschaften.png";
import essenTrinken from "./images/grammatik_formulierungen/Essen_und_Trinken.png";
interface IAssets {
  [key: string]: string;
}

const assets: IAssets = {
  lengArts,
  quiz,
  flashCards,

  zeitZeitvertrieb,
  arbeitBeruf,
  medien,
  werbungKonsum,
  lernen,
  verkehr,
  gefuhleEingenschaften,
  essenTrinken,
};

export default assets;
