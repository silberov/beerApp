import { SubTitleText, Text } from "../../code-ui/typograpgy";
import { beerType } from "../../interfaces/beer-interface";
import ColorTitle from "../ColorTitle";
import SubTitle from "../SubTitle";
import CardBeerProp from "./CardBeerProp";
import { Img, InfoBox, Wraper } from "./styles";

export type cardProps = {
  beer: beerType;
};

const Card = ({ beer }: cardProps): JSX.Element => {
  return (
    <Wraper>
      <Img
        src={`${beer.image_url}`}
        alt={beer.name}
      />
      <InfoBox>
        {" "}
        <ColorTitle ebc={beer.ebc} title={beer.name} isCard={true} />
        <CardBeerProp abv={beer.abv} ibu={beer.ibu} />
        <SubTitleText modifiers={["card"]}>{beer.tagline}</SubTitleText>
        {/* <Text>{beer.description}</Text> */}
      </InfoBox>
    </Wraper>
  );
};

export default Card;
