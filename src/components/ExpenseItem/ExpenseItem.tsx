import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import {
  ExpenseItemTitle,
  CrossBtn,
  ExpenseItemWrapper,
  ExpenseItemBadgeGroup,
} from "./styles";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem = ({ expense: { id, name, cost } }: ExpenseItemProps) => {
  const { deleteExpense } = useExpensesContext();
  return (
    <ExpenseItemWrapper>
      <ExpenseItemTitle>{name}</ExpenseItemTitle>
      <ExpenseItemBadgeGroup>
        <Badge badgeValue={cost} />
        <CrossBtn onClick={() => deleteExpense(id)}>✖</CrossBtn>
      </ExpenseItemBadgeGroup>
    </ExpenseItemWrapper>
  );
};
