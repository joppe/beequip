import { useContext } from "react";
import { SoreContext } from "./Store";

export function useStore() {
  const context = useContext(SoreContext);

  if (context === null) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}
