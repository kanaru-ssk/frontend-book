"use client";

import { useState, type ReactNode } from "react";
import { TabLabel } from "./tab-label";
import { TabLayout } from "./tab-layout";

export type AsyncTabProps = {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
};

export function AsyncTab({ tabs }: AsyncTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabLayout
      labels={tabs.map(({ label }, index) => (
        <TabLabel
          label={label}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    >
      {tabs[activeIndex].content}
    </TabLayout>
  );
}
