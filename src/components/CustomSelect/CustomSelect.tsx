import Select from "react-select";
import { SelectOptions } from "../../types";
import { customStyles } from "./styles";

interface SelectProps {
  options: SelectOptions[];
  // value: SelectOptions;
  // onChange: (option: SelectOptions) => void;
}

export const CustomSelect = ({ options }: SelectProps) => {
  return <Select options={options} styles={customStyles} />;
};
