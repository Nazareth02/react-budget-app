import styled from "styled-components";

const StyledBudgetCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 30px 20px;
  max-width: 335px;
  max-height: 100px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const BudgetCardText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const BudgetCardBtn = styled.button`
  justify-self: end;
  padding: 10px 29px;
  background: #ffffff;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  cursor: pointer;
`;
const EditModeInput = styled.input`
  width: 115%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background: transparent;
  border-style: none;
  color: rgba(255, 255, 255, 0.9);
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    outline: none;
  }
`;
export { BudgetCardText, BudgetCardBtn, StyledBudgetCard, EditModeInput };
