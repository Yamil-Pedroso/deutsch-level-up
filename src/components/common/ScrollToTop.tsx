import { useEffect, useState } from "react";

const VISIBILITY_OFFSET = 520;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <button
      aria-label="Nach oben scrollen"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center border-2 border-[#17130c] bg-[#ffe130] text-2xl font-black text-[#17130c] shadow-[4px_4px_0_#17130c] transition duration-200 hover:-translate-y-1 hover:bg-[#ff7b2f] hover:text-white hover:shadow-[7px_7px_0_#17130c] focus:outline-none focus:ring-4 focus:ring-[#ff7b2f]/40 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={scrollToTop}
      title="Nach oben"
      type="button"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
