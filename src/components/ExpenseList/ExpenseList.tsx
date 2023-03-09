import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { StyledExpensesList } from "./styles";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpenseList = ({ expenses }: ExpensesListProps) => {
  const isExpensesListFull = expenses.length > 5;
  return (
    <StyledExpensesList $isExpensesListFull={isExpensesListFull}>
      {expenses.map(({ id, name, cost }) => {
        return (
          <ExpenseItem
            key={id}
            id={id}
            listItemLabel={name}
            badgeCost={cost}
          ></ExpenseItem>
        );
      })}
    </StyledExpensesList>
  );
};
