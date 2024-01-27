"use client";

import { Children, isValidElement, useState, type ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
};

export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = Children.toArray(children);
  const labels = tabs.map((element) => {
    return isValidElement(element) ? String(element.props["data-label"]) : "";
  });

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        {labels?.map((label, index) => (
          <button
            key={index}
            type="button"
            className={`${
              index === activeIndex
                ? "border-black text-black"
                : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
            } m-2 -mb-0.5 w-36 border-b-2 px-9 py-3 text-lg`}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex]}</div>
    </div>
  );
}
