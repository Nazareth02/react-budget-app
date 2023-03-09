import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { StyledInput } from "../Input/styles";
interface ExpenseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const ExpenseInput = (props: ExpenseInputProps) => {
  return <StyledInput {...props}></StyledInput>;
};
