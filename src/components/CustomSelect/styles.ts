import { StylesConfig } from "react-select";
import { SelectOptions } from "../../types";

const customStyles: StylesConfig<SelectOptions> = {
  control: (baseStyles) => ({
    ...baseStyles,
    background: "#FFFFFF",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    maxWidth: "84px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    color: "#000000",
    boxSizing: "border-box",
  }),
  container: (baseStyles) => ({
    justifySelf: "end",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    color: "#000000",
    ...baseStyles,
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    color: "rgba(238, 238, 238, 1)",
  }),
  dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: "rgba(238, 238, 238, 1)" }),
};

export { customStyles };
