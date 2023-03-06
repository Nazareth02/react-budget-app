import { SelectOptions } from "../../types";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title, CardGroup, TitleGroup } from "./styles";

export const Budget = () => {
  const options: SelectOptions[] = [
    { value: "$", label: "USD" },
    { value: "€", label: "EUR" },
    { value: "£", label: "GBR" },
  ];
  return (
    <div>
      <TitleGroup>
        <Title>Budget App</Title>
        <CustomSelect options={options} />
      </TitleGroup>
      <CardGroup>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </CardGroup>
    </div>
  );
};
