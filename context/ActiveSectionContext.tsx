"use client";

import type { SectionName } from "@/lib/types";
import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
