import { useMemo, useState } from "react";
import { konnektorenData } from "./data/konnektoren-data";
import type { KonnektorCategory } from "./types/konnektoren-types";

type CategoryFilter = KonnektorCategory | "Alle";

const categories: CategoryFilter[] = [
  "Alle",
  "Addition",
  "Gegensatz",
  "Kausal",
  "Konditional",
  "Konsekutiv",
  "Final",
  "Temporal",
];

const Konnektoren = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Alle");
  const [selectedKonnektor, setSelectedKonnektor] = useState(konnektorenData[0]);

  const filteredKonnektoren = useMemo(() => {
    if (activeCategory === "Alle") {
      return konnektorenData;
    }

    return konnektorenData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);

    const nextKonnektor =
      category === "Alle"
        ? konnektorenData[0]
        : konnektorenData.find((item) => item.category === category);

    if (nextKonnektor) {
      setSelectedKonnektor(nextKonnektor);
    }
  };

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Konnektoren
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
            Konnektoren nach Funktion.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
            Wähle, ob du ergänzen, widersprechen, begründen oder zeitlich
            ordnen möchtest.
          </p>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[240px_minmax(0,1fr)_360px]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Kategorien
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                const count =
                  category === "Alle"
                    ? konnektorenData.length
                    : konnektorenData.filter(
                        (item) => item.category === category
                      ).length;

                return (
                  <button
                    className={`flex max-w-[calc(100vw-4rem)] shrink-0 items-center justify-between gap-4 border border-[#17130c] px-3 py-2 text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                      isActive ? "bg-[#ff7b2f] text-white" : "bg-[#fffaf0]"
                    }`}
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    type="button"
                  >
                    <span className="min-w-0 truncate">{category}</span>
                    <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0 border-b-2 border-[#17130c] p-4 sm:p-7 lg:border-b-0 lg:border-r-2">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#17130c] pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Liste
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  {activeCategory} Konnektoren
                </h3>
              </div>
              <span className="border border-[#17130c] bg-[#ffe45e] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                {filteredKonnektoren.length} Einträge
              </span>
            </div>

            <div className="grid min-w-0 gap-3 xl:grid-cols-2">
              {filteredKonnektoren.map((item) => {
                const isSelected = selectedKonnektor.wort === item.wort;

                return (
                  <button
                    className={`min-w-0 border-2 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#17130c] ${
                      isSelected
                        ? "border-[#17130c] bg-[#ffe130] shadow-[3px_3px_0_#17130c] sm:shadow-[5px_5px_0_#17130c]"
                        : "border-[#17130c]/80 bg-[#fffaf0]"
                    }`}
                    key={item.wort}
                    onClick={() => setSelectedKonnektor(item)}
                    type="button"
                  >
                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <span className="border border-[#17130c] bg-[#fff3d8] px-2 py-1 text-[11px] font-black uppercase tracking-[0.12em]">
                        {item.category}
                      </span>
                      <span className="text-lg font-black text-[#ff6d1a]">
                        +
                      </span>
                    </div>
                    <h4 className="mt-3 break-words text-2xl font-black">{item.wort}</h4>
                    <p className="mt-2 text-sm font-bold text-[#6f583b]">
                      {item.literal}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="bg-[#fffaf0] p-4 sm:p-7 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Beispiel
            </p>
            <div className="mt-4 min-w-0 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[3px_3px_0_#17130c] sm:p-5 sm:shadow-[5px_5px_0_#17130c]">
              <span className="border border-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                {selectedKonnektor.category}
              </span>
              <h3 className="mt-5 break-words text-3xl font-black leading-tight sm:text-4xl sm:leading-none">
                {selectedKonnektor.wort}
              </h3>
              <p className="mt-3 text-base font-bold">
                {selectedKonnektor.literal}
              </p>
              <p className="mt-4 border-t border-white/60 pt-4 text-sm font-bold leading-relaxed">
                {selectedKonnektor.bedeutung}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Konnektoren;
