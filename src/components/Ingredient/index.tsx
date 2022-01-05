import { unitsToLetters } from "../../functions/units";
import { Text } from "../../styles/typograpgy";
import { Wraper, IngInput, AmountBox } from "./styles";

export type PropsIngrediant = {
  name: string;
  amount: number;
  units: string
  };


  
  const Ingrediant = ({name, amount, units}:PropsIngrediant): JSX.Element => {
    return (
      <Wraper>
      <Text>{name}</Text><AmountBox><IngInput value={amount} /><Text>{unitsToLetters(units)}</Text></AmountBox>
      </Wraper>
    );
  };
  
  export default Ingrediant;
  