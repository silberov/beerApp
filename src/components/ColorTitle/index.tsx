import beerColorCalc from "./beer-color";
import { Dot, Title, Wraper } from "./styles";


export type TitleProps = {
  ebc: number;
  title: string;
  card?: boolean;
};

const ColorTitle = ({ ebc, title, card}: TitleProps): JSX.Element => {
  return (
    <Wraper>

      <Dot modifiers={card ? ["card"] : [""]} color={beerColorCalc(ebc)} />
      <Title modifiers={card ? ["card"] : [""]}>{title}</Title>
    </Wraper>
  );
};

export default ColorTitle;
