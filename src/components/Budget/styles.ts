import styled from "styled-components";

const Title = styled.h3`
  margin-bottom: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

const CardGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const TitleGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export { Title, CardGroup, TitleGroup };
