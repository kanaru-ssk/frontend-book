"use client";

import { Children, isValidElement, useState, type ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
};
export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const labels = Children.map(children, (element) => {
    if (isValidElement(element)) {
      return element.props.label;
    }
  }) as string[];

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        {labels.map((label, index) => (
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
      {Children.toArray(children)[activeIndex]}
    </div>
  );
}

type TabProps = {
  label: string;
  children: ReactNode;
};
export function Tab({ children }: TabProps) {
  return <div className="p-4">{children}</div>;
}
