import styled from "styled-components";

const RemainingCardText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const StyledRemainingCard = styled.div<{ $isOverspending: boolean }>`
  padding: 36px 20px;
  max-height: 100px;
  align-items: center;
  background: ${({ $isOverspending }) => ($isOverspending ? "#FF0000" : "#ccd5ff")};
  color: ${({ $isOverspending }) => ($isOverspending ? "#FFFFFF" : "#000000")};
  border-radius: 10px;
`;

export { RemainingCardText, StyledRemainingCard };
