import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpenseItemBadge } from "./styles";

interface BadgeProps {
  badgeValue: number;
}

export const Badge = ({ badgeValue }: BadgeProps) => {
  return <ExpenseItemBadge>{badgeValue}$</ExpenseItemBadge>;
};
