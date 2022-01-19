import { Lable, PropBox } from "./styles";

export type cardBeerProps = {
  abv: number;
  ibu: number;
};

const CardBeerProp = ({ abv, ibu }: cardBeerProps): JSX.Element => {
  return (
    <PropBox style={{display:"flex", maxWidth:"400px"}}>
      <Lable>ABV : {abv}</Lable>
      <Lable>IBU : {ibu}</Lable>
    </PropBox>
  );
};

export default CardBeerProp;
