import { BudgetCard, CustomSelect, RemainingCard, SpentCard } from "components";
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
