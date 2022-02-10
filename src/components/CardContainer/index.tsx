import { beerType } from "../../interfaces/beer-interface";
import Card from "../Card";
import { Wraper } from "./styles";

export type CardConatinerProps = {
beers: beerType[]
};

const CardConatiner = ({beers}:CardConatinerProps): JSX.Element => {

  return (
    <Wraper>
      {beers.map(beer => <Card beer={beer} />)}
    </Wraper>
  );
};

export default CardConatiner;
