import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { BudgetCardBtn, BudgetCardText, EditModeInput, StyledBudgetCard } from "./styles";

export const BudgetCard = () => {
  const [isEditMode, setEditMode] = useToggle(false);
  const budgetValue = useInput();
  const { budget, setBudget } = useBudgetContext();

  const handleEditMode = () => {
    setEditMode();
  };

  const handleBudget = () => {
    setBudget(Number(budgetValue.value));
    setEditMode();
  };
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <EditModeInput
            {...budgetValue}
            type="number"
            min="0"
            placeholder="Enter  budget ..."
          />
          <BudgetCardBtn type="button" onClick={handleBudget}>
            Save
          </BudgetCardBtn>
        </>
      ) : (
        <>
          <BudgetCardText>Budget: {budget} </BudgetCardText>
          <BudgetCardBtn type="button" onClick={handleEditMode}>
            Edit
          </BudgetCardBtn>
        </>
      )}
    </StyledBudgetCard>
  );
};
