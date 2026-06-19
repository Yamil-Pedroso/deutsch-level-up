import { graphikContent } from "./data/graphik-data";
import HumanBodyHover from "../human-body-hover/HumanBodyHover";

const Graphik = () => {
  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Körper
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
            {graphikContent.title}: visueller Körperwortschatz.
          </h1>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Lerne Körperteile mit Bild, interaktiven Punkten, Artikeln und
            Übersetzung.
          </p>
        </header>

        <div className="grid min-w-0 gap-5 p-4 sm:gap-6 sm:p-7 lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)]">
          <aside className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[5px_5px_0_#17130c] lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto">
            <span className="border border-[#17130c] bg-[#ffe45e] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
              Referenz
            </span>
            <img
              src={graphikContent.imageSrc}
              alt={graphikContent.imageAlt}
              className="mt-4 w-full border-2 border-[#17130c] object-cover"
            />
          </aside>

          <section className="min-w-0 border-2 border-[#17130c] bg-[#fffaf0] p-3 shadow-[4px_4px_0_#17130c] sm:p-4 sm:shadow-[5px_5px_0_#17130c]">
            <HumanBodyHover />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Graphik;
