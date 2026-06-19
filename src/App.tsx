import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Prapositionen from "./components/präpositions/Prapositionen";
import Artikel from "./components/artikel/Artikel";
import Wortschatz from "./components/wortschatz/Wortschatz";
import Graphik from "./components/graphik/Graphik";
import DaWoerter from "./components/da-woerter/DaWoerter";
import Konnectoren from "./components/konnektoren/Konnektoren";
import WoWoerter from "./components/wo-woerter/WoWoerter";
import GrammarFormulierungen from "./components/grammar-formulierungen/GrammarFormulierungen";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-[#eadcc3] px-3 py-4 text-center text-[#17130c] sm:px-4 sm:py-6">
        <h1 className="mx-auto inline-block max-w-full border-2 border-[#17130c] bg-[#ffe130] px-4 py-3 text-xl font-black leading-tight shadow-[4px_4px_0_#17130c] sm:px-6 sm:text-2xl">
          Deutsch Level Up
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Prapositionen />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/wortschatz" element={<Wortschatz />} />
        <Route path="/graphik" element={<Graphik />} />
        <Route path="/da-woerter" element={<DaWoerter />} />
        <Route path="/konnectoren" element={<Konnectoren />} />
        <Route path="/wo-woerter" element={<WoWoerter />} />
        <Route path="/grammar-formulierungen" element={<GrammarFormulierungen />} />
        <Route
          path="*"
          element={
            <h2 className="text-center text-xl">404 - Seite nicht gefunden</h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
