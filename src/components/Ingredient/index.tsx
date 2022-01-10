import { unitsToLetters } from "../../functions/units";
import { Text } from "../../styles/typograpgy";
import { Wraper, IngInput, AmountBox } from "./styles";

export type PropsIngrediant = {
    name: string;
    amount: number;
    units: string;
    add?: string;
    attribute?: string

  };

  const Ingrediant = ({name, amount, units, add, attribute}:PropsIngrediant): JSX.Element => {
    return (
      <Wraper>
      <Text modifiers={["bold"]}>{name}</Text>
      {add && <Text>{add} - {attribute}</Text>}
      <AmountBox><IngInput value={amount} /><Text modifiers={['bold']}>{unitsToLetters(units)}</Text></AmountBox>
      </Wraper>
    );
  };
  
  export default Ingrediant;
  