import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { ExpenseItemBadge } from "./styles";

interface BadgeProps {
  badgeValue: number;
}

export const Badge = ({ badgeValue }: BadgeProps) => {
  const { selectedCurrency } = useCurrencyContext();
  return (
    <ExpenseItemBadge>
      {selectedCurrency.value}
      {badgeValue}
    </ExpenseItemBadge>
  );
};
