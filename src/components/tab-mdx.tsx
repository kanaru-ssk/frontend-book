import { Children, isValidElement, type ReactNode } from "react";
import { Tab, type TabProps } from "@/components/tab";

type TabMdxProps = {
  children: ReactNode;
};

export function TabMdx({ children }: TabMdxProps) {
  const tabs = Children.toArray(children).reduce<TabProps["tabs"]>(
    (acc, content) => {
      if (isValidElement(content)) {
        const label = content.props["data-label"];
        if (typeof label === "string") return [...acc, { label, content }];
      }
      return acc;
    },
    [],
  );

  return <Tab tabs={tabs} />;
}
