import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const GROUPS = [
  {
    title: "MINUTES",
    items: [
      { value: "1m", label: "1 minute" },
      { value: "2m", label: "2 minutes" },
      { value: "3m", label: "3 minutes" },
      { value: "5m", label: "5 minutes" },
      { value: "10m", label: "10 minutes" },
      { value: "15m", label: "15 minutes" },
      { value: "30m", label: "30 minutes" },
    ],
  },
  {
    title: "HOURS",
    items: [
      { value: "1h", label: "1 hour" },
      { value: "4h", label: "4 hours" },
    ],
  },
  {
    title: "DAYS",
    items: [
      { value: "1D", label: "1 day" },
      { value: "1W", label: "1 week" },
      { value: "1M", label: "1 month" },
    ],
  },
];

export default function TimeFrameDropDown({
  value = "5m",
  onChange = () => {},
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const rootRef = useRef(null);

  useEffect(() => setSelected(value), [value]);

  // Close on outside click / Esc
  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleSelect = (v) => {
    setSelected(v);
    onChange(v);
    setOpen(false);
  };

  const currentLabel =
    GROUPS.flatMap((g) => g.items).find((i) => i.value === selected)?.value ??
    "5m";

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#2A2E35] text-white border border-gray-600 hover:bg-[#333842] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="font-medium">{currentLabel}</span>
        {/* <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} /> */}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute left-0 mt-2 w-56 rounded-md border border-gray-700 bg-[#1F232A] shadow-xl z-50"
          role="menu"
        >
          {GROUPS.map((group, gi) => (
            <div key={group.title}>
              {/* Group header */}
              <div className="flex items-center justify-between px-3 py-2 text-[11px] tracking-wider uppercase text-gray-400">
                <span>{group.title}</span>
              </div>

              {/* Items */}
              <ul className="px-1 pb-1">
                {group.items.map((it) => {
                  const active = it.value === selected;
                  return (
                    <li key={it.value}>
                      <button
                        onClick={() => handleSelect(it.value)}
                        className={`group w-full flex items-center justify-between px-2 py-2 rounded text-left
                          ${active ? "bg-[#2E333B] text-white" : "text-gray-200 hover:bg-[#2C3138]"}`}
                        role="menuitem"
                      >
                        <span className="text-sm font-medium">{it.label}</span>
                        {/* Favorite star (just UI) */}
                        <span
                          className={`opacity-0 group-hover:opacity-100 transition-opacity`}
                          title="Add to favorites"
                        >
                          <Star className="h-4 w-4 text-gray-400" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Divider between groups */}
              {gi < GROUPS.length - 1 && (
                <div className="h-px bg-gray-700 mx-2 my-1" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
