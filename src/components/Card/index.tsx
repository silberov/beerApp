import { useNavigate } from "react-router-dom";
import { SubTitleText, Text } from "../../code-ui/typograpgy";
import { beerType } from "../../interfaces/beer-interface";
import ColorTitle from "../ColorTitle";
import CardBeerProp from "./CardBeerProp";
import kegImg from "../../Assets/kegImg.png"
import {
  DescribtionBox,
  Img,
  InfoBox,
  LineBox,
  MiddleLineBox,
  Wraper,
} from "./styles";

export type cardProps = {
  beer: beerType;
};

const Card = ({ beer }: cardProps): JSX.Element => {
  const navigate = useNavigate();
  const isKeg = beer.image_url && beer.image_url.includes('keg')
  
  return (
    <Wraper onClick={() => navigate(`/${beer.id}`)}>
      <Img src={isKeg ? kegImg : `${beer.image_url}`} alt={beer.name} style={{width: isKeg ? '114px' : '100px'}} />
      <InfoBox>
        <ColorTitle ebc={beer.ebc} title={beer.name} card={true} />
        <LineBox>
          <CardBeerProp abv={beer.abv} ibu={beer.ibu} />
          <MiddleLineBox>
            <SubTitleText modifiers={["card"]}>{beer.tagline}</SubTitleText>
          </MiddleLineBox>
          <DescribtionBox>
            <Text>
              {beer.description.length > 150
                ? beer.description.substring(0, 190) + "..."
                : beer.description}
            </Text>
          </DescribtionBox>
        </LineBox>
      </InfoBox>
    </Wraper>
  );
};

export default Card;
