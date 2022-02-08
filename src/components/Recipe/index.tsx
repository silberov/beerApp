import { unitsToLetters } from "../../Helpers/units";
import { beerType } from "../../interfaces/beer-interface";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import Food from "../Food";
import IngContainer from "../IngContainer";
import SubTitle from "../SubTitle";
import { Wraper, LeftGrid, RightGrid, Grid, Box, Img } from "./styles";
import kegImg from "../../Assets/kegImg.png";
import NumberFormat from "react-number-format";
import BeerNav from "../BeerNav";

export type RecipeProps = {
  beer: beerType;
  activeTub: string;
  onActive: (tub: string) => void;
};

const Recipe = ({ beer, activeTub, onActive }: RecipeProps): JSX.Element => {
  console.log(beer);
  const isKeg = beer.image_url.includes("keg");

  return (
    <Wraper>
      <Img
       isKeg={isKeg}
        src={isKeg ? kegImg : `${beer.image_url}`}
        alt={beer.name}
      />

      <Grid>
        <ColorTitle ebc={beer.ebc} title={beer.name} />
        <LeftGrid>
          <SubTitle isDark={true} text={beer.tagline} />
          <Box>IBU : {beer.ibu}</Box>
          <Box>
            ABV :{" "}
            <NumberFormat value={beer.abv} displayType={"text"} suffix={"%"} />
          </Box>
          <Box>OG : {beer.target_og}</Box>
          <Box>FG : {beer.target_fg}</Box>
          <Description text={beer.description} />
          <Food food={beer.food_pairing} />
        </LeftGrid>
        <RightGrid>
          <SubTitle
            isDark={false}
            text={"ingredients for"}
            amount={beer.volume.value}
            units={unitsToLetters(beer.volume.unit)}
          />
          <BeerNav active={activeTub} onChange={onActive} />
          <IngContainer
            activeTub={activeTub}
            onActive={onActive}
            ingredients={beer.ingredients}
            method={beer.method}
            tip={beer.brewers_tips}
          />
        </RightGrid>
      </Grid>
    </Wraper>
  );
};

export default Recipe;
