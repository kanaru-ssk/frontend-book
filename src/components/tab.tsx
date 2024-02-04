"use client";

import { useState, type ReactNode } from "react";
import { TabLabel } from "@/components/tab-label";

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
          <TabLabel
            label={label}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
}
