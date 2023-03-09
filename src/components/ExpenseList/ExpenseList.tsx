import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpenseList = ({ expenses }: ExpensesListProps) => {
  return (
    <ul>
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
    </ul>
  );
};
