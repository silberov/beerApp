import { unitsToLetters } from "../../../Helpers/units";
import { Text } from "../../../code-ui/typograpgy";
import Ingrediant from "../../Ingredient";
import { Wraper } from "./styles";

export type PropsMalt = {
  mashTemp: [{
    temp: {
        value: number;
        unit: string;
    };
    duration: number | null;
}]
  malt: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
  }[];
};

const Malt = ({ malt, mashTemp }: PropsMalt): JSX.Element => {
  const meshText = mashTemp.map(
    (item, index) =>
      `Mash ${index + 1}: ${item.temp.value} ${unitsToLetters(
        item.temp.unit
      )} for ${item.duration} minuts`
  );
  //const [pr, calc]
  return (
    <Wraper>
      <Text>{meshText}</Text>

      <ul style={{ padding: "0" }}>
        {malt.map((item) => (
          <Ingrediant
            key={item.name}
            name={item.name}
            amount={item.amount.value}
            units={item.amount.unit}
          />
        ))}
      </ul>
    </Wraper>
  );
};

export default Malt;
