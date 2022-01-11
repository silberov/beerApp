import { useState } from "react";
import { unitsToLetters } from "../../Helpers/units";
import { Text } from "../../code-ui/typograpgy";
import { Wraper, IngInput, AmountBox } from "./styles";

export type ingrediantProps = {
  name: string;
  amount: number;
  units: string;
  add?: string;
  attribute?: string;
};

const calculatePercentage = (a: number, b: number) => {
  return +(b / a).toFixed(2);
};

const Ingrediant = ({
  name,
  amount,
  units,
  add,
  attribute,
}: ingrediantProps): JSX.Element => {
  const [quantity, setQuantity]: [number, (quantity: number) => void] =
    useState(amount);

  const heandleChange = (event: any) => {
    console.log(event.target.value);
    const pros = calculatePercentage(amount, event.target.value);
    console.log("pros", pros);

    setQuantity(event.target.value);
  };

  return (
    <Wraper>
      <Text modifiers={["bold"]}>{name}</Text>

      {add && (
        <Text>
          {add} - {attribute}
        </Text>
      )}

      <AmountBox>
        <IngInput
          onChange={(event) => {
            heandleChange(event);
          }}
          value={quantity}
        />
        <Text modifiers={["bold"]}>{unitsToLetters(units)}</Text>
      </AmountBox>
    </Wraper>
  );
};

export default Ingrediant;
