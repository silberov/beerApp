import beerColorCalc from "./beer-color";
import { Dot, Title, Wraper } from "./styles";


export type TitleProps = {
  ebc: number;
  title: string;
  isCard?: boolean;
};

const ColorTitle = ({ ebc, title }: TitleProps): JSX.Element => {
  return (
    <Wraper>
      <Dot color={beerColorCalc(ebc)} />
      <Title>{title}</Title>
    </Wraper>
  );
};

export default ColorTitle;
