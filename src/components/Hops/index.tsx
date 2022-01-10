import Ingrediant from "../Ingredient";
import { Wraper } from "./styles";

export type hopsProps = {
  hops: {
    name: string;
    amount: {
        value: number;
        unit: string;
    };
    add: string;
    attribute: string;
  }[]
};
  
  const Hops = ({hops}:hopsProps): JSX.Element => {
    return (
      <Wraper>
         {hops.map(item => <Ingrediant key={item.name} name={item.name} add={item.add} attribute={item.attribute} amount={item.amount.value} units={item.amount.unit}/>)}
      </Wraper>
    );
  };
  
  export default Hops;
  