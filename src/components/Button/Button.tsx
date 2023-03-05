import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ onClick, type }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      Done
    </StyledButton>
  );
};
