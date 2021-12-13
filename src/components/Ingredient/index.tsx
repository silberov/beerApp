import { unitsToLetters } from "../../functions/units";
import { Wraper } from "./styles";

export type PropsIngrediant = {
  name: string;
  amount: number;
  units: string
  };


  
  const Ingrediant = ({name, amount, units}:PropsIngrediant): JSX.Element => {
    return (
      <>      
      <Wraper>
      <p>{name}</p><div style={{display:"flex"}}><input value={amount} /><p>{unitsToLetters(units)}</p></div>
      </Wraper>
      </>

    );
  };
  
  export default Ingrediant;
  