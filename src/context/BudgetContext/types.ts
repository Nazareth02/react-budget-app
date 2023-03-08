import { ReactNode } from "react";

interface BudgetContextProviderProps {
  children: ReactNode;
}

interface BudgetContextValue {
  budget: number;
  setBudget: (value: number) => void;
}

export type { BudgetContextProviderProps, BudgetContextValue };
