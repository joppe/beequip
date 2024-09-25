import { createContext, ReactNode, useState } from "react";
import { Calculation } from "../api/Api";

export type Result = {
  timestamp: number;
  params: {
    purchasePrice: number;
    brand: string;
    objectYear: number;
    type: string;
  };
  calculation: Calculation["leaseCalculation"];
};

export type StoreContextType = {
  results: Result[];
  addResult: (result: Result) => void;
};

export const SoreContext = createContext<StoreContextType | null>(null);

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const [results, setResults] = useState<Result[]>(
    localStorage.getItem("results")
      ? JSON.parse(localStorage.getItem("results") as string)
      : [],
  );

  function addResult(result: Result) {
    const newResults = [result, ...results];

    localStorage.setItem("results", JSON.stringify(newResults));

    setResults(newResults);
  }

  const value = {
    results,
    addResult,
  };

  return <SoreContext.Provider value={value}>{children}</SoreContext.Provider>;
}
