import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { v4 } from "uuid";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm } from "./styles";

export type FormValues = {
  name: string;
  cost: number;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { addNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = ({ name, cost }) => {
    addNewExpense({
      name,
      cost,
      id: uuidv4(),
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Input name="name" placeholder="enter name ..." register={register} />
        <Input name="cost" placeholder="enter cost ..." register={register} />
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
