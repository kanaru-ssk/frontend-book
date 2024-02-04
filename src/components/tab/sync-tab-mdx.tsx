import { Children, isValidElement, type ReactNode } from "react";
import { SyncTab } from "./sync-tab";

type Props = {
  children: ReactNode;
};

export function SyncTabMdx({ children }: Props) {
  const elements = Children.toArray(children);

  const windows = elements.find(
    (element) =>
      isValidElement(element) && element.props["data-label"] === "windows",
  );
  const mac = elements.find(
    (element) =>
      isValidElement(element) && element.props["data-label"] === "mac",
  );

  if (!windows || !mac) return null;

  return <SyncTab contents={{ windows, mac }} />;
}
