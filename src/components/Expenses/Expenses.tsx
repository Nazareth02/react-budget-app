import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpenseInput } from "../ExpenseInput/ExpenseInput";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ErrorNotFound, ExpenseTitle, StyledExpenses } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const ExpenseInputValue = useInput();
  const debouncedValue = useDebounce(ExpenseInputValue.value, 300);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(debouncedValue.toLowerCase())
      )
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <ExpenseTitle>Expenses</ExpenseTitle>
      <ExpenseInput name="search" placeholder="search ..." {...ExpenseInputValue} />
      {filteredExpenses.length ? (
        <ExpenseList expenses={filteredExpenses} />
      ) : (
        <ErrorNotFound>Oooops 🙈</ErrorNotFound>
      )}
    </StyledExpenses>
  );
};
