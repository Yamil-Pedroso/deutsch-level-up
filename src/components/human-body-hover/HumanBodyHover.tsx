import React, { useMemo, useState } from "react";
import {
  bodyParts,
  humanBodyViewBox,
} from "./data/human-body-hover-data";

const VB = humanBodyViewBox;

function toPercent(value: number, total: number) {
  return (value / total) * 100;
}

export default function HumanBodyHover() {
  const [activeId, setActiveId] = useState<string | null>(bodyParts[0].id);

  const activePart = useMemo(
    () => bodyParts.find((part) => part.id === activeId) || bodyParts[0],
    [activeId]
  );

  function handleBgClick(e: React.MouseEvent) {
    if ((e.target as HTMLElement).dataset.bg === "true") {
      setActiveId(bodyParts[0].id);
    }
  }

  return (
    <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_260px]">
      <div
        aria-label="Interaktiver Körper: Bewegen Sie den Mauszeiger über die Punkte, um die deutschen Namen zu sehen."
        className="relative min-w-0 select-none border-2 border-[#17130c] bg-[#f8edd6] p-2 sm:p-4"
        data-bg="true"
        onClick={handleBgClick}
      >
        <svg
          aria-labelledby="humanTitle humanDesc"
          className="h-auto w-full"
          role="img"
          viewBox={`0 0 ${VB.w} ${VB.h}`}
        >
          <title id="humanTitle">Vereinfachte menschliche Figur</title>
          <desc id="humanDesc">
            Bewegen Sie den Mauszeiger über die Markierungen, um deutsche
            Bezeichnungen zu sehen.
          </desc>

          <circle
            cx="150"
            cy="120"
            r="40"
            className="fill-[#fffaf0] stroke-[#17130c]"
            strokeWidth={4}
          />
          <rect
            x="135"
            y="160"
            width="30"
            height="30"
            className="fill-[#fffaf0] stroke-[#17130c]"
            strokeWidth={4}
          />
          <rect
            x="100"
            y="190"
            width="100"
            height="120"
            className="fill-[#ffe45e] stroke-[#17130c]"
            rx={8}
            strokeWidth={4}
          />
          <rect
            x="110"
            y="310"
            width="80"
            height="40"
            className="fill-[#ff7b2f] stroke-[#17130c]"
            rx={6}
            strokeWidth={4}
          />
          <polyline
            className="fill-none stroke-[#17130c]"
            points="100,210 80,240 90,320"
            strokeWidth={4}
          />
          <polyline
            className="fill-none stroke-[#17130c]"
            points="200,210 220,240 210,320"
            strokeWidth={4}
          />
          <polyline
            className="fill-none stroke-[#17130c]"
            points="130,350 120,430 130,520"
            strokeWidth={4}
          />
          <polyline
            className="fill-none stroke-[#17130c]"
            points="170,350 180,430 170,520"
            strokeWidth={4}
          />

          {bodyParts.map((part) => {
            const isActive = activePart.id === part.id;

            return (
              <g
                aria-label={part.label}
                className="cursor-pointer focus:outline-none"
                key={part.id}
                onBlur={() => setActiveId(bodyParts[0].id)}
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveId(part.id);
                }}
                onFocus={() => setActiveId(part.id)}
                onMouseEnter={() => setActiveId(part.id)}
                role="button"
                tabIndex={0}
              >
                <circle
                  className={`fill-[#ff7b2f] stroke-[#17130c] transition ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                  cx={part.x}
                  cy={part.y}
                  r={part.r ?? 10}
                  strokeWidth={2}
                />
                <circle
                  className="fill-transparent"
                  cx={part.x}
                  cy={part.y}
                  r={(part.r ?? 10) + 12}
                />
              </g>
            );
          })}
        </svg>

        {activePart && (
          <div
            className="pointer-events-none absolute z-20"
            style={{
              left: `${toPercent(activePart.x, VB.w)}%`,
              top: `${toPercent(activePart.y, VB.h)}%`,
              transform: "translate(-50%, -118%)",
            }}
          >
            <div className="max-w-[140px] border-2 border-[#17130c] bg-[#ff7b2f] px-2 py-2 text-xs font-black text-white shadow-[3px_3px_0_#17130c] sm:max-w-none sm:px-3 sm:text-sm sm:shadow-[4px_4px_0_#17130c]">
              {activePart.label}
              <br />
              <span className="text-xs">{activePart.trans}</span>
            </div>
          </div>
        )}
      </div>

      <aside className="min-w-0 border-2 border-[#17130c] bg-[#ffe45e] p-4 shadow-[3px_3px_0_#17130c] sm:shadow-[4px_4px_0_#17130c]">
        <p className="text-xs font-black uppercase tracking-[0.16em]">
          Aktiver Punkt
        </p>
        <h3 className="mt-3 break-words text-2xl font-black sm:text-3xl">
          {activePart.label}
        </h3>
        <p className="mt-2 border-t border-[#17130c]/50 pt-3 text-base font-bold text-[#4a3922]">
          {activePart.trans}
        </p>
        <p className="mt-4 text-sm font-bold leading-relaxed text-[#4a3922]">
          Bewege die Maus oder tippe auf einen orangenen Punkt, um das aktive
          Wort zu ändern.
        </p>
      </aside>
    </div>
  );
}
