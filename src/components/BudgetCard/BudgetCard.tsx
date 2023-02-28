import { BudgetCardBtn, BudgetCardText, StyledBudgetCard } from "./styles";

export const BudgetCard = () => {
  return (
    <StyledBudgetCard>
      <BudgetCardText>Budget: $3000</BudgetCardText>
      <BudgetCardBtn>Edit</BudgetCardBtn>
    </StyledBudgetCard>
  );
};
