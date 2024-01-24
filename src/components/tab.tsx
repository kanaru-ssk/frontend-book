"use client";

import { type ReactNode, useState } from "react";

type Props = {
  tabs: { label: string; content: ReactNode }[];
};

export function Tab({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`m-2 -mb-0.5 w-36 border-b-2 px-9 py-3 text-lg ${index === activeTab ? " border-neutral-950 text-neutral-900" : "border-neutral-300 text-neutral-400 hover:border-neutral-400"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
}
