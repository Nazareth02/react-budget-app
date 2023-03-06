import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { v4 } from "uuid";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ErrorMessage, InputGroup, StyledForm } from "./styles";

export type FormValues = {
  name: string;
  cost: number;
};

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const { addNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = ({ name, cost }) => {
    addNewExpense({
      name,
      cost,
      id: uuidv4(),
    });
    clearErrors();
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Controller
          name="name"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <Input
              register={register}
              placeholder="enter name ..."
              {...rest}
              {...register("name", {
                required: "field 'name' is required!",
                pattern: {
                  value: /^[A-Za-z" /']+$/,
                  message: "😡Only Letters required!",
                },
                maxLength: {
                  value: 15,
                  message: "max length: 15 symbols",
                },
              })}
            />
          )}
        />
        {errors.name?.message && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
        <Controller
          name="cost"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <Input
              register={register}
              placeholder="enter cost ..."
              {...register("cost", {
                required: "field 'cost' is required!",
                pattern: { value: /[0-9]/, message: "😡 Only numbers required!" },
                maxLength: {
                  value: 5,
                  message: "max length: 5 symbols",
                },
              })}
            />
          )}
        />
        {errors.cost?.message && <ErrorMessage>{errors.cost?.message}</ErrorMessage>}
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
