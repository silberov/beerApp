import beerColorCalc from "./beer-color";
import { Dot, Title, Wraper } from "./styles";


export type TitleProps = {
  ebc: number;
  title: string;
  isCard?: boolean;
};

const ColorTitle = ({ ebc, title, isCard }: TitleProps): JSX.Element => {
  return (
    <Wraper>
      <Dot isCard={isCard} color={beerColorCalc(ebc)} />
      <Title isCard={isCard} >{title}</Title>
    </Wraper>
  );
};

export default ColorTitle;
