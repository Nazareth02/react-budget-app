import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import {
  ExpenseItemTitle,
  CrossBtn,
  ExpenseItemWrapper,
  ExpenseItemBadgeGroup,
} from "./styles";

interface ExpenseItemProps {
  listItemLabel: string;
  badgeCost: number;
  id: string;
}

export const ExpenseItem = ({ id, listItemLabel, badgeCost }: ExpenseItemProps) => {
  const { deleteExpense } = useExpensesContext();
  return (
    <ExpenseItemWrapper>
      <ExpenseItemTitle>{listItemLabel}</ExpenseItemTitle>
      <ExpenseItemBadgeGroup>
        <Badge badgeValue={badgeCost} />
        <CrossBtn onClick={() => deleteExpense(id)}>✖</CrossBtn>
      </ExpenseItemBadgeGroup>
    </ExpenseItemWrapper>
  );
};
