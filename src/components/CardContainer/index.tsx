import { beerType } from "../../interfaces/beer-interface";
import Card from "../Card";

export type CardConatinerProps = {
beers: beerType[]
};

const CardConatiner = ({beers}:CardConatinerProps): JSX.Element => {
  return (
    <div>
      {beers.map(beer => <Card beer={beer} />)}
    </div>
  );
};

export default CardConatiner;
