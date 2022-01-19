// import useCounter from "../../hooks/counter";
import { Wraper, FoodTitle, Li, Ul } from "./styles";

export type foodProps = {
  food: string[]
  };

    
const Food = ({food}:foodProps): JSX.Element => {
    // const [incCount, decCount, counter] = useCounter()
    return (
    <Wraper>
        <FoodTitle>goes well with ....</FoodTitle>
        <Ul>
            {food.map(item => <Li key={item}>{item}</Li>)}
        </Ul>
        {/* <button onClick={()=>incCount()}>+</button>
        <h2>{counter}</h2>
        <button onClick={()=>decCount()}>-</button> */}
    </Wraper>
    );
};
    
    export default Food;
    
  