import styled from "styled-components";

const StyledButton = styled.button`
  line-height: 49px;
  background: #23c9ff;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background: rgba(35, 201, 255, 0.45);
  }
`;
export { StyledButton };
