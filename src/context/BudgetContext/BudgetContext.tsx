import { createContext, useContext, useState } from "react";
import { BudgetContextProviderProps, BudgetContextValue } from "./types";

export const BudgetContext = createContext<BudgetContextValue>({} as BudgetContextValue);

export const useBudgetContext = () => useContext<BudgetContextValue>(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(() => ({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
