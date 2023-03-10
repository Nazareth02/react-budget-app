import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { Expense } from "context/ExpensesContext/types";
import { StyledSpentCard, SpentCardText } from "./styles";

export const SpentCard = () => {
  const { selectedCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const totalExpensesValue = expenses.reduce(
    (total: number, { cost }: Expense) => total + Number(cost),
    0
  );
  return (
    <StyledSpentCard>
      <SpentCardText>
        Spent so far: {selectedCurrency.value}
        {totalExpensesValue}
      </SpentCardText>
    </StyledSpentCard>
  );
};
