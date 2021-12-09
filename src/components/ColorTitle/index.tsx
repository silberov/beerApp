import { Dot, Title, Wraper } from "./styles";

export type TitleProps = {
  color: string;
  title: string;
};

const ColorTitle = ({ color, title }: TitleProps): JSX.Element => {
  return (
    <Wraper>
      <Dot color={color} />
      <Title>{title}</Title>
    </Wraper>
  );
};

export default ColorTitle;
