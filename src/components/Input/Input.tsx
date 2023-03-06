import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormValues } from "../Form/Form";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  register: UseFormRegister<FormValues>;
  name: "cost" | "name";
}
export const Input = ({ name, placeholder, register }: InputProps) => {
  return <StyledInput placeholder={placeholder} {...register(name)} />;
};
