import { ReactNode } from "react";
import { CurrencyOption } from "../../components/CustomSelect/CustomSelect";

export interface CurrencyContextProviderProps {
  children: ReactNode;
}

export interface CurrencyContextValue {
  currencies: CurrencyOption[];
  setCurrency: (option: CurrencyOption) => void;
  selectedCurrency: CurrencyOption;
}
