"use client";

import { useState, type ReactNode } from "react";

export type TabProps = {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
};

export function Tab({ tabs }: TabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        {tabs.map(({ label }, index) => (
          <button
            key={label}
            type="button"
            className={`${
              index === activeIndex
                ? "border-black text-black"
                : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
            } m-2 -mb-0.5 min-w-36 border-b-2 px-8 py-3 text-lg`}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
}
