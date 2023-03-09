import { Currency } from "../../config/currency";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrencyOption, CustomSelect } from "../CustomSelect/CustomSelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title, CardGroup, TitleGroup } from "./styles";

export const Budget = () => {
  return (
    <>
      <TitleGroup>
        <Title>Budget App</Title>
        <CustomSelect />
      </TitleGroup>
      <CardGroup>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </CardGroup>
    </>
  );
};
