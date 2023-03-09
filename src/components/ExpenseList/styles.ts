import styled from "styled-components";

const StyledExpensesList = styled.ul<{ $isExpensesListFull: boolean }>`
  height: ${({ $isExpensesListFull }) => ($isExpensesListFull ? "200px" : "auto")};
  overflow-y: ${({ $isExpensesListFull }) => ($isExpensesListFull ? "scroll" : "unset")};
`;
export { StyledExpensesList };
