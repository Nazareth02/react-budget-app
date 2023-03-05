import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { StyledInput } from "../Input/styles";
interface ExpenseInputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {}

export const ExpenseInput = ({ placeholder, name }: ExpenseInputProps) => {
  return <StyledInput placeholder={placeholder} name={name}></StyledInput>;
};
