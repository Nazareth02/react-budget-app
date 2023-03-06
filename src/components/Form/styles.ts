import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 30px;
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const ErrorMessage = styled.span`
  color: red;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
export { StyledForm, InputGroup, ErrorMessage };
