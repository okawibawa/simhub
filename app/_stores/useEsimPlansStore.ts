import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EsimPlansStore {
  planType: "roaming" | "local";
  setPlanType: (planType: "roaming" | "local") => void;
}

export const useEsimPlansStore = create<EsimPlansStore>()(
  devtools((set) => ({
    planType: "roaming",
    setPlanType: (planType: "roaming" | "local") => set({ planType }),
  }))
);
