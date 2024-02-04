import type { ReactNode } from "react";

export type AsyncTabProps = {
  labels: ReactNode;
  children: ReactNode;
};

export function TabLayout({ labels, children }: AsyncTabProps) {
  return (
    <div className="shadow">
      <div className="space-x-2 border-b-2 border-neutral-300 px-3">
        {labels}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
