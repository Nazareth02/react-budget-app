import styled from "styled-components";

const ExpenseItemTitle = styled.h4`
  justify-self: start;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const CrossBtn = styled.span`
  margin-left: 15px;
  color: #c884a6;
  font-size: 20px;
  vertical-align: middle;
  cursor: pointer;
`;

const ExpenseItemWrapper = styled.li`
  padding: 0 20px;
  line-height: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
`;
const ExpenseItemBadgeGroup = styled.div`
  justify-self: end;
`;

const CrossBtnIcon = styled.img``;

export {
  ExpenseItemTitle,
  CrossBtn,
  ExpenseItemWrapper,
  ExpenseItemBadgeGroup,
  CrossBtnIcon,
};
