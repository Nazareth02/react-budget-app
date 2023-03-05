import styled from "styled-components";

const StyledInput = styled.input`
  max-width: 335px;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  &::placeholder {
    color: #999999;
  }
`;

export { StyledInput };
