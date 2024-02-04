"use client";

import { useState, useContext, createContext, type ReactNode } from "react";
import { TabLabel } from "./tab-label";
import { TabLayout } from "./tab-layout";

const allOs = ["windows", "mac"] as const;
type Os = (typeof allOs)[number];

type SyncTabValue = {
  target: Os;
  setTarget: (os: Os) => void;
};

const SyncTabContext = createContext<SyncTabValue>({} as SyncTabValue);

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

type SyncTabProps = { contents: { windows: ReactNode; mac: ReactNode } };

export function SyncTab({ contents }: SyncTabProps) {
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
