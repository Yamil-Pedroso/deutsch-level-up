import type { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  label: string;
};

const Tooltip = ({ children, label }: TooltipProps) => {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 whitespace-nowrap border-2 border-[#17130c] bg-[#17130c] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white opacity-0 shadow-[3px_3px_0_#ff7b2f] transition duration-200 group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:translate-y-1 group-focus-within:opacity-100">
        {label}
      </span>
    </span>
  );
};

export default Tooltip;
