import { BrowserRouter } from "react-router-dom";
import { unitsToLetters } from "../../functions/units";
import { beerType } from "../../pages/RecipePage";
import BeerProps from "../BeerProps";


import ColorTitle from "../ColorTitle";
import Description from "../Description";
import Food from "../Food";
import IngContainer from "../IngContainer";
import SubTitle from "../SubTitle";
import { Wraper, InnerBox, OuterBox } from "./styles";

export type RecipeProps = {
beer:beerType
activeTub: string
onActive: (tub: string) => void
  };
  
  const Recipe = ({beer, activeTub, onActive}:RecipeProps): JSX.Element => {
      console.log(beer);
      
    return (
        <BrowserRouter>
          <Wraper>

            <img style={{width:" 166px", margin: "0 30px 0 0"}} src={`${beer.image_url}`} alt={beer.name}/> 
            <div>
              <ColorTitle color={"#454545"} title={beer.name} />
              <OuterBox>

                <InnerBox>
                  <SubTitle isDark={true} text={beer.tagline} />
                  <BeerProps ibu={beer.ibu} abv={beer.abv} og={beer.target_og} fg={beer.target_fg} />
                  <Description text={beer.description} />
                  <Food food={beer.food_pairing} />
                </InnerBox>

                <InnerBox>
                  <SubTitle isDark={false} text={"ingredients for"} amount={beer.volume.value} units={unitsToLetters(beer.volume.unit)} />
                  <IngContainer activeTub={activeTub} onActive={onActive} ingredients={beer.ingredients} method={beer.method} tip={beer.brewers_tips}  />
                </InnerBox>
                
              </OuterBox>
            </div>

        </Wraper>
      </BrowserRouter>

    );
  };
  
  export default Recipe;
  