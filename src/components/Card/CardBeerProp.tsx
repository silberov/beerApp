import { Lable } from "./styles";

export type cardBeerProps = {
  abv: number;
  ibu: number;
};

const CardBeerProp = ({ abv, ibu }: cardBeerProps): JSX.Element => {
  return (
    <div style={{display:"flex", width:"400px"}}>
      <Lable>ABV : {abv}</Lable>
      <Lable>IBU : {ibu}</Lable>
    </div>
  );
};

export default CardBeerProp;
