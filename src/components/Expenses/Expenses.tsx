import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpensesInput } from "../Input/Input";
import { ExpensesTitle, StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <ExpensesTitle>Expenses</ExpensesTitle>
      <ExpensesInput />
      <ExpenseList />
    </StyledExpenses>
  );
};
