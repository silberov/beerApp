import { Wraper } from "./styles";

export type descriptionProrps = {
  text: string;
};

const Description = ({ text }: descriptionProrps): JSX.Element => {
  return (
    <Wraper>
      {text}
    </Wraper>
  );
};

export default Description;
