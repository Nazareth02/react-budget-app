import styled from "styled-components";

const ExpenseTitle = styled.h3`
  margin-top: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const StyledExpenses = styled.div`
  display: grid;
  grid-gap: 30px;
`;

const ErrorNotFound = styled.span`
  text-align: center;
  padding: 90px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export { ExpenseTitle, StyledExpenses, ErrorNotFound };
