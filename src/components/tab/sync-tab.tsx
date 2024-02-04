"use client";

import { useState, useContext, createContext, type ReactNode } from "react";
import { TabLabel } from "./tab-label";
import { TabLayout } from "./tab-layout";

const allOs = ["windows", "mac"] as const;
type Os = (typeof allOs)[number];

type ContextValue = {
  target: Os;
  setTarget: (os: Os) => void;
};

const SyncTabContext = createContext({} as ContextValue);

type SyncTabProviderProps = {
  children: ReactNode;
};

export function SyncTabProvider({ children }: SyncTabProviderProps) {
  const [target, setTarget] = useState<Os>("windows");

  return (
    <SyncTabContext.Provider value={{ target, setTarget }}>
      {children}
    </SyncTabContext.Provider>
  );
}

type Props = { contents: { windows: ReactNode; mac: ReactNode } };

export function SyncTab({ contents }: Props) {
  const { target, setTarget } = useContext(SyncTabContext);

  return (
    <TabLayout
      labels={allOs.map((os) => (
        <TabLabel
          key={os}
          label={os}
          isActive={target === os}
          onClick={() => setTarget(os)}
        />
      ))}
    >
      {contents[target]}
    </TabLayout>
  );
}
