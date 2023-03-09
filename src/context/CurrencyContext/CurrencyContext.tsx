import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { CurrencyContextProviderProps, CurrencyContextValue } from "./types";

const CurrencyContext = createContext<CurrencyContextValue>({} as CurrencyContextValue);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(() => {
    return {
      currencies: [
        { label: "USD", value: Currency.USD },
        { label: "EUR", value: Currency.EUR },
        { label: "GBR", value: Currency.GBR },
      ],
      selectedCurrency: {
        label: "USD",
        value: Currency.USD,
      },
      setCurrency: (selectedCurrency) => {
        setCurrencyContext((ctx) => ({
          ...ctx,
          selectedCurrency,
        }));
      },
    };
  });
  return currencyContext;
};

export const useCurrencyContext = () => useContext<CurrencyContextValue>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
