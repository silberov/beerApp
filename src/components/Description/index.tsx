import { Text } from "../../code-ui/typograpgy";
import { Wraper } from "./styles";

export type descriptionProrps = {
  text: string;
};

const Description = ({ text }: descriptionProrps): JSX.Element => {
  return (
    <Wraper>
      <Text>{text}</Text>
    </Wraper>
  );
};

export default Description;
