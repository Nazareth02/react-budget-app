import { Badge } from "../Badge/Badge";
import {
  ExpenseItemTitle,
  CrossBtn,
  ExpenseItemWrapper,
  ExpenseItemBadgeGroup,
  CrossBtnIcon,
} from "./styles";

export const ExpenseItem = () => {
  return (
    <ExpenseItemWrapper>
      <ExpenseItemTitle>shoping</ExpenseItemTitle>
      <ExpenseItemBadgeGroup>
        <Badge />
        <CrossBtn>✖</CrossBtn>
      </ExpenseItemBadgeGroup>
    </ExpenseItemWrapper>
  );
};
