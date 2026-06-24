type ArtikelSpeakButtonProps = {
  text: string;
};

export function ArtikelSpeakButton({ text }: ArtikelSpeakButtonProps) {
  const speak = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      aria-label={`${text} anhören`}
      className="border-2 border-[#17130c] bg-white px-3 py-2 text-xs font-black uppercase transition hover:bg-[#ffe130]"
      onClick={speak}
      title="Aussprache anhören"
      type="button"
    >
      ▶ Anhören
    </button>
  );
}
