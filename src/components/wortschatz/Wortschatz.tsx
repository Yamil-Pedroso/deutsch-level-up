import { useMemo, useState } from "react";
import {
  categoryOptions,
  vocabularyItems,
} from "./data/workschatz-data";
import type {
  CategoryOption,
  VocabularyCategory,
  VocabularyItem,
} from "./types/wortschatz-types";

type FilterId = CategoryOption["id"];

const categoryLabels: Record<VocabularyCategory, string> = {
  nomen: "Nomen",
  verben: "Verben",
  extras: "Extra cards",
};

const categoryAccent: Record<VocabularyCategory, string> = {
  nomen: "bg-[#ffe45e]",
  verben: "bg-[#ff7b2f] text-white",
  extras: "bg-[#fff3d8]",
};

const getCategoryCount = (categoryId: FilterId) => {
  if (categoryId === "alle") {
    return vocabularyItems.length;
  }

  return vocabularyItems.filter((item) => item.category === categoryId).length;
};

const getSearchContent = (item: VocabularyItem) =>
  `${item.article ?? ""} ${item.word} ${item.meaning} ${categoryLabels[item.category]}`.toLowerCase();

const Wortschatz = () => {
  const [activeCategory, setActiveCategory] = useState<FilterId>("alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWordId, setSelectedWordId] = useState(vocabularyItems[0].id);

  const filteredWords = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return vocabularyItems.filter((item) => {
      const matchesCategory =
        activeCategory === "alle" || item.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        getSearchContent(item).includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const selectedWord =
    filteredWords.find((item) => item.id === selectedWordId) ??
    filteredWords[0] ??
    vocabularyItems[0];

  const handleCategoryChange = (categoryId: FilterId) => {
    setActiveCategory(categoryId);

    const nextWord =
      categoryId === "alle"
        ? vocabularyItems[0]
        : vocabularyItems.find((item) => item.category === categoryId);

    if (nextWord) {
      setSelectedWordId(nextWord.id);
    }
  };

  const handleRandomWord = () => {
    const pool = filteredWords.length > 0 ? filteredWords : vocabularyItems;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedWordId(pool[randomIndex].id);
  };

  return (
    <main className="min-h-screen bg-[#eadcc3] px-3 py-6 text-[#17130c] sm:px-6 lg:px-10">
      <section className="w-full max-w-full overflow-hidden border-2 border-[#17130c] bg-[#f8edd6] shadow-[4px_4px_0_#17130c] sm:overflow-visible sm:shadow-[10px_10px_0_#17130c]">
        <header className="border-b-2 border-[#17130c] bg-[#ffe130] p-4 sm:p-7 lg:sticky lg:top-0 lg:z-30 lg:shadow-[0_8px_0_#17130c]">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <label className="flex min-w-0 basis-full flex-col items-start gap-2 border-2 border-[#17130c] bg-[#fffaf0] px-3 py-3 shadow-[3px_3px_0_#17130c] sm:basis-auto sm:flex-1 sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <span className="text-xs font-black uppercase tracking-[0.16em]">
                Suche
              </span>
              <input
                className="w-full bg-transparent text-sm font-bold text-[#4a3922] outline-none placeholder:text-[#8c7454]"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="buscar palabra, artículo o significado"
                type="search"
                value={searchTerm}
              />
            </label>
            <span className="max-w-full border-2 border-[#17130c] bg-[#fffaf0] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#17130c]">
              {filteredWords.length} / {vocabularyItems.length} Wörter
            </span>
          </div>

          <p className="text-xs font-black uppercase tracking-[0.22em]">
            Deutsch Studio / Wortschatz
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl sm:leading-none">
                Schnelle Wortschatzbibliothek.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#4a3922]">
                Filtere, suche und wähle ein Wort, um es direkt im Detail zu
                sehen.
              </p>
            </div>
            <button
              className="w-full border-2 border-[#17130c] bg-[#ff7b2f] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_#17130c] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#17130c] lg:w-auto"
              onClick={handleRandomWord}
              type="button"
            >
              Zufallswort
            </button>
          </div>
        </header>

        <div className="grid min-w-0 max-w-full lg:grid-cols-[220px_minmax(0,1fr)_360px]">
          <aside className="min-w-0 max-w-full overflow-hidden border-b-2 border-[#17130c] bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
              Kategorien
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {categoryOptions.map((category) => {
                const isActive = category.id === activeCategory;

                return (
                  <button
                    className={`flex max-w-[calc(100vw-4rem)] shrink-0 items-center justify-between gap-4 border border-[#17130c] px-3 py-2 text-sm font-black transition hover:bg-[#ffe130] lg:max-w-none lg:shrink ${
                      isActive ? "bg-[#ff7b2f] text-white" : "bg-[#fffaf0]"
                    }`}
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    type="button"
                  >
                    <span className="min-w-0 truncate">{category.label}</span>
                    <span>{getCategoryCount(category.id)}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0 border-b-2 border-[#17130c] bg-[#f8edd6] p-4 sm:p-5 lg:border-b-0 lg:border-r-2">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#17130c] pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Wortliste
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  Wähle ein Wort
                </h3>
              </div>
              <span className="border border-[#17130c] bg-[#ffe45e] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                Kompaktansicht
              </span>
            </div>

            <div className="max-w-full space-y-3 lg:max-h-[620px] lg:overflow-y-auto lg:pr-2">
              {filteredWords.map((item) => {
                const isSelected = item.id === selectedWord.id;

                return (
                  <button
                    className={`grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-2 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#17130c] ${
                      isSelected
                        ? "border-[#17130c] bg-[#ffe130] shadow-[4px_4px_0_#17130c]"
                        : "border-[#17130c]/70 bg-[#fffaf0]"
                    }`}
                    key={item.id}
                    onClick={() => setSelectedWordId(item.id)}
                    type="button"
                  >
                    <span
                      className={`min-w-14 border border-[#17130c] px-2 py-1 text-center text-xs font-black uppercase ${categoryAccent[item.category]}`}
                    >
                      {item.article ?? "Wort"}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-base font-black">
                        {item.word}
                      </span>
                      <span className="block truncate text-xs font-bold text-[#6f583b]">
                        {item.meaning}
                      </span>
                    </span>
                    <span className="text-lg font-black text-[#ff6d1a]">+</span>
                  </button>
                );
              })}

              {filteredWords.length === 0 && (
                <div className="border-2 border-dashed border-[#17130c] bg-[#fffaf0] p-6 text-center">
                  <p className="text-lg font-black">Keine Wörter gefunden</p>
                  <p className="mt-2 text-sm font-bold text-[#6f583b]">
                    Prueba con otro término o cambia la categoría.
                  </p>
                </div>
              )}
            </div>
          </section>

          <aside className="bg-[#fffaf0] p-4 sm:p-5 lg:sticky lg:top-[210px] lg:max-h-[calc(100vh-230px)] lg:overflow-y-auto">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Wortdetails
            </p>
            <div className="mt-4 min-w-0 border-2 border-[#17130c] bg-[#ff7b2f] p-4 text-white shadow-[3px_3px_0_#17130c] sm:p-5 sm:shadow-[5px_5px_0_#17130c]">
              <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                <span className="border border-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                  {selectedWord.article ?? categoryLabels[selectedWord.category]}
                </span>
                <span className="min-w-0 break-words text-sm font-black">
                  {categoryLabels[selectedWord.category]}
                </span>
              </div>
              <h3 className="mt-5 break-words text-3xl font-black leading-tight sm:text-4xl sm:leading-none">
                {selectedWord.word}
              </h3>
              <p className="mt-4 border-t border-white/60 pt-4 text-base font-bold leading-relaxed">
                {selectedWord.meaning}
              </p>
            </div>

            <div className="mt-5 border-2 border-[#17130c] bg-[#ffe45e] p-4 shadow-[4px_4px_0_#17130c]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Mini-Aufgabe
              </p>
              <p className="mt-3 text-sm font-bold leading-relaxed text-[#4a3922]">
                Schreibe einen kurzen Satz mit{" "}
                <span className="font-black text-[#17130c]">
                  {selectedWord.article
                    ? `${selectedWord.article} ${selectedWord.word}`
                    : selectedWord.word}
                </span>
                .
              </p>
            </div>

            <div className="mt-5 grid min-w-0 grid-cols-2 gap-3">
              <button
                className="border-2 border-[#17130c] bg-[#fffaf0] px-3 py-3 text-xs font-black uppercase tracking-[0.1em] shadow-[3px_3px_0_#17130c] transition hover:-translate-y-0.5"
                onClick={handleRandomWord}
                type="button"
              >
                Shuffle
              </button>
              <button
                className="border-2 border-[#17130c] bg-[#ffe130] px-3 py-3 text-xs font-black uppercase tracking-[0.1em] shadow-[3px_3px_0_#17130c] transition hover:-translate-y-0.5"
                onClick={() => setSearchTerm("")}
                type="button"
              >
                Leeren
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Wortschatz;
