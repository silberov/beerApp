import { useState } from "react";
import { unitsToLetters } from "../../Helpers/units";
import { Text } from "../../code-ui/typograpgy";
import { Wraper, IngInput, AmountBox } from "./styles";
import useScale from "../../hooks/scaling";

export type ingrediantProps = {
  name: string;
  amount: number;
  units: string;
  add?: string;
  attribute?: string;
  
};



const Ingrediant = ({
  name,
  amount,
  units,
  add,
  attribute,
}: ingrediantProps): JSX.Element => {
  const [percent, calculatePercentage] = useScale() // need redux
  const [quantity, setQuantity]: [number, (quantity: number) => void] =
    useState(amount);

   
   
  const heandleChange = (event: any) => {
    setTimeout(() => {
      console.log("percent", percent);
    }, 1500);
    calculatePercentage(amount, event.target.value)
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
          onBlur={()=>console.log("blur", percent)}
          value={quantity}
        />
        <Text modifiers={["bold"]}>{unitsToLetters(units)}</Text>
      </AmountBox>
    </Wraper>
  );
};

export default Ingrediant;
