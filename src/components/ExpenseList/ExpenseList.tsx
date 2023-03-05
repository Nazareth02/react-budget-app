import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export const ExpenseList = () => {
  const { expenses } = useExpensesContext();
  return (
    <ul>
      {expenses.map(({ id, name, cost }) => {
        return <ExpenseItem id={id} listItemLabel={name} badgeCost={cost}></ExpenseItem>;
      })}
    </ul>
  );
};
