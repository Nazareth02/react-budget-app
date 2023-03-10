import { Budget, Expenses, AddExpense } from "components";
import { StyledApp } from "ui";

export const App = () => (
  <StyledApp>
    <Budget />
    <Expenses />
    <AddExpense />
  </StyledApp>
);
