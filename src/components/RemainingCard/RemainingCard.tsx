import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { RemainingCardText, StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { selectedCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const totalExpensesValue = expenses.reduce(
    (total: number, { cost }: Expense) => (total += Number(cost)),
    0
  );
  const remainingCardValue = budget - totalExpensesValue;
  const isOverspending = remainingCardValue < 0;
  return (
    <StyledRemainingCard $isOverspending={isOverspending}>
      <RemainingCardText>
        {isOverspending
          ? `Overspending by: ${selectedCurrency.value}${Math.abs(remainingCardValue)}`
          : `Remaining: ${selectedCurrency.value}${Math.abs(remainingCardValue)}`}
      </RemainingCardText>
    </StyledRemainingCard>
  );
};
