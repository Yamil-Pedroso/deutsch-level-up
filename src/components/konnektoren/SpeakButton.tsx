type SpeakButtonProps = {
  text: string;
  compact?: boolean;
};

export function SpeakButton({ text, compact = false }: SpeakButtonProps) {
  const speak = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.86;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      aria-label={`Beispiel anhören: ${text}`}
      className="inline-flex items-center justify-center border-2 border-[#17130c] bg-[#fffaf0] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#17130c] transition hover:-translate-y-0.5 hover:bg-[#ffe130]"
      onClick={speak}
      title="Beispiel anhören"
      type="button"
    >
      <span aria-hidden="true">▶</span>
      {!compact && <span className="ml-2">Anhören</span>}
    </button>
  );
}
