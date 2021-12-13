import Ingrediant from "../Ingredient";
import { Wraper } from "./styles";

export type PropsMalt = {
  malt: {
    name: string;
    amount: {
        value: number;
        unit: string;
    };
}[]
  };
  
  const Malt = ({malt}:PropsMalt): JSX.Element => {
    console.log(malt);
    
    return (
      <Wraper>
        <p>mash: 68 c* for 50 minuts </p>
        <ul>
        {malt.map(item => <Ingrediant name={item.name} amount={item.amount.value} units={item.amount.unit}/>)}
        </ul>
         MALT
      </Wraper>
    );
  };


  
  export default Malt;
  