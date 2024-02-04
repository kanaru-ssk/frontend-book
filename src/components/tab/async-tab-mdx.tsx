import { Children, isValidElement, type ReactNode } from "react";
import { AsyncTab, type AsyncTabProps } from "./async-tab";

type TabMdxProps = {
  children: ReactNode;
};

export function AsyncTabMdx({ children }: TabMdxProps) {
  const tabs = Children.toArray(children).reduce<AsyncTabProps["tabs"]>(
    (acc, content) => {
      if (isValidElement(content)) {
        const label = content.props["data-label"];
        if (typeof label === "string") return [...acc, { label, content }];
      }
      return acc;
    },
    [],
  );

  return <AsyncTab tabs={tabs} />;
}
