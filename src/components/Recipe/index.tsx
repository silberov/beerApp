
import { unitsToLetters } from "../../Helpers/units";
import { beerType } from "../../interfaces/beer-interface";
import BeerProps from "../BeerProps";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import Food from "../Food";
import IngContainer from "../IngContainer";
import SubTitle from "../SubTitle";
import { Wraper, InnerBox, OuterBox } from "./styles";
import kegImg from "../../Assets/kegImg.png"

export type RecipeProps = {
  beer: beerType;
  activeTub: string;
  onActive: (tub: string) => void;
};


const Recipe = ({ beer, activeTub, onActive }: RecipeProps): JSX.Element => {
  console.log(beer.image_url === null || beer.image_url.includes('keg'));
  const isKeg = beer.image_url && beer.image_url.includes('keg')

  return (
      <Wraper>
        {/* fix the beer img */}
        <img
          style={{ width: isKeg ? '274px' : '166px', margin: "0 30px 0 0" }}
          src={ isKeg ? kegImg : `${beer.image_url}`}
          alt={beer.name}
        />
        <div>
          <ColorTitle ebc={beer.ebc} title={beer.name} />
          <OuterBox>
            <InnerBox>
              <SubTitle isDark={true} text={beer.tagline} />
              <BeerProps
                ibu={beer.ibu}
                abv={beer.abv}
                og={beer.target_og}
                fg={beer.target_fg}
              />
              <Description text={beer.description} />
              <Food food={beer.food_pairing} />
            </InnerBox>

            <InnerBox>
              <SubTitle
                isDark={false}
                text={"ingredients for"}
                amount={beer.volume.value}
                units={unitsToLetters(beer.volume.unit)}
              />
              <IngContainer
                activeTub={activeTub}
                onActive={onActive}
                ingredients={beer.ingredients}
                method={beer.method}
                tip={beer.brewers_tips}
              />
            </InnerBox>
          </OuterBox>
        </div>
      </Wraper>
  );
};

export default Recipe;
