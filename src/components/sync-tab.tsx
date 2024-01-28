"use client";

import { useState, useContext, createContext, type ReactNode } from "react";

type Os = "windows" | "mac";

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
  const { target } = useContext(SyncTabContext);

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        <Label os="windows" />
        <Label os="mac" />
      </div>
      <div className="p-4">{contents[target]}</div>
    </div>
  );
}

type LabelProps = { os: Os };

function Label({ os }: LabelProps) {
  const { target, setTarget } = useContext(SyncTabContext);

  return (
    <button
      type="button"
      className={`${
        target === os
          ? "border-black text-black"
          : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
      } m-2 -mb-0.5 min-w-36 border-b-2 px-8 py-3 text-lg`}
      onClick={() => setTarget(os)}
    >
      {os}
    </button>
  );
}
