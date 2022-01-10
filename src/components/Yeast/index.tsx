import { unitsToLetters } from "../../functions/units";
import { Text } from "../../styles/typograpgy";
import { Wraper, TextBox } from "./styles";

export type yeastProps = {
  yeast: string;
  temperature: {
    value: number;
    unit: string;
  };
  tip: string | null;
  twist: string | null;
};

const Yeast = ({ yeast, temperature, tip, twist }: yeastProps): JSX.Element => {
  return (
    <Wraper>
      <TextBox>
        <Text modifiers={["bold"]}>{yeast}</Text>
        <Text modifiers={["bold"]}>
          {temperature.value} {unitsToLetters(temperature.unit)}
        </Text>
      </TextBox>
      {twist && (
        <TextBox>
          <Text>{twist}</Text>
        </TextBox>
      )}
      {tip && (
        <TextBox>
          <Text><Text modifiers={["bold"]}>Tip: </Text>
          {tip}</Text>
        </TextBox>
      )}
    </Wraper>
  );
};

export default Yeast;
