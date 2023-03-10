import { Currency } from "config";
import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { customStyles } from "./styles";

export interface CurrencyOption {
  label: keyof typeof Currency;
  value: Currency;
}

export const CustomSelect = () => {
  const { selectedCurrency, setCurrency, currencies } = useCurrencyContext();
  const handleChange = (value: SingleValue<CurrencyOption>) => {
    if (value) {
      setCurrency(value);
    }
  };
  return (
    <Select
      options={currencies}
      value={selectedCurrency}
      styles={customStyles}
      onChange={handleChange}
      isMulti={false}
      isSearchable={false}
    />
  );
};
