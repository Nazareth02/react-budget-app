import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { StyledExpensesList } from "./styles";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpenseList = ({ expenses }: ExpensesListProps) => {
  const isExpensesListFull = expenses.length > 4;
  return (
    <StyledExpensesList $isExpensesListFull={isExpensesListFull}>
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>;
      })}
    </StyledExpensesList>
  );
};
