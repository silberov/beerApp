import { BrowserRouter } from "react-router-dom";
import { unitsToLetters } from "../../functions/units";
import { beerType } from "../../pages/RecipePage";

import BeerProrps from "../BeerProrps";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import IngContainer from "../IngContainer";
import SubTitle from "../SubTitle";
import { Wraper, InnerBox } from "./styles";

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
              <img style={{height:" 651px", margin: "0 40px"}} src={`${beer.image_url}`} alt={beer.name}/> 
                <div>
                  <ColorTitle color={"#454545"} title={beer.name} />
                <div style={{display: "flex" }}>
                  <InnerBox>
                  <SubTitle isDark={true} text={beer.tagline} />
                  
                  <BeerProrps ibu={beer.ibu} abv={beer.abv} og={beer.target_og} fg={beer.target_fg} />
                  <Description text={beer.description} />
                  
              </InnerBox>
              <InnerBox>
                  <div style={{height:"140px"}}></div>
                  <SubTitle isDark={false} text={"ingredients for "} amount={beer.volume.value} units={unitsToLetters(beer.volume.unit)} />
                  <IngContainer activeTub={activeTub} onActive={onActive} ingredients={beer.ingredients}  />
              </InnerBox>
              </div>
              
              </div>
              
        </Wraper>
      </BrowserRouter>

    );
  };
  
  export default Recipe;
  