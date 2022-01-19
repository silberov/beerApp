import { Text } from "../../code-ui/typograpgy";
import { beerType } from "../../interfaces/beer-interface";
import ColorTitle from "../ColorTitle";
import CardBeerProp from "./CardBeerProp";
import { Wraper } from "./styles";

export type cardProps = {
  beer: beerType;
};

const Card = ({ beer }: cardProps): JSX.Element => {
  return (
    <Wraper>
      <img
        style={{ width: " 100px", margin: "0 30px 0 0" }}
        src={`${beer.image_url}`}
        alt={beer.name}
      />
      <div>
        {" "}
        <ColorTitle ebc={beer.ebc} title={beer.name} isCard={true} />
        <CardBeerProp abv={beer.abv} ibu={beer.ibu} />
        <Text>{beer.tagline}</Text>
        {/* <Text>{beer.description}</Text> */}
      </div>
    </Wraper>
  );
};

export default Card;
