import { BudgetContextProvider } from "context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "context/ExpensesContext/ExpensesContext";
import { ReactNode, FC } from "react";

const providers = [
  CurrencyContextProvider,
  ExpensesContextProvider,
  BudgetContextProvider,
];

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {providers.reduceRight((total, Provider) => {
        return <Provider>{total}</Provider>;
      }, children)}
    </>
  );
};
