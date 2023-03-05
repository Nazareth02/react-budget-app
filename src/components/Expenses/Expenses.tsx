import { useForm } from "react-hook-form";
import { ExpenseInput } from "../ExpenseInput/ExpenseInput";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpenseTitle, StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <ExpenseTitle>Expenses</ExpenseTitle>
      <ExpenseInput name="search" placeholder="search ..." />
      <ExpenseList />
    </StyledExpenses>
  );
};
