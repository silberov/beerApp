// import useCounter from "../../hooks/counter";
import { Wraper, FoodTitle, Li, Ul } from "./styles";

export type foodProps = {
  food: string[]
  };

    
const Food = ({food}:foodProps): JSX.Element => {
    return (
    <Wraper>
        <FoodTitle>goes well with ....</FoodTitle>
        <Ul>
            {food.map(item => <Li key={item}>{item}</Li>)}
        </Ul>
    </Wraper>
    );
};
    
    export default Food;
    
  