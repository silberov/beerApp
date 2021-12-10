import { BrowserRouter } from "react-router-dom";
import { beerType } from "../../pages/RecipePage";

import BeerProrps from "../BeerProrps";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import IngContainer from "../IngContainer";
import SubTitle from "../SubTitle";
import { Wraper } from "./styles";

export type RecipeProps = {
beer:beerType
activeTub: string
onActive: (tub: string) => void
  };
  
  const Recipe = ({beer, activeTub, onActive}:RecipeProps): JSX.Element => {
      console.log(beer);
      
    return (
        <BrowserRouter>
        <div style={{display:"flex", alignItems: "flex-end"}}>
            <img style={{height:" 651px", margin: "0 40px"}} src={`${beer.image_url}`} alt="aaa"/> 
            <Wraper>
                <ColorTitle color={"#454545"} title={beer.name} />
                <SubTitle isDark={true} text={beer.tagline} />
                
                <BeerProrps ibu={beer.ibu} abv={beer.abv} og={beer.target_og} fg={beer.target_fg} />
                <Description text={beer.description} />
                
            </Wraper>
            <Wraper>
                <div style={{height:"140px"}}></div>
                <SubTitle isDark={false} text={"ingredients for "} amount={beer.volume.value} units={beer.volume.unit === "litres" ? "L" : beer.volume.unit} />
                <IngContainer activeTub={activeTub} onActive={onActive}  />
            </Wraper>
      </div></BrowserRouter>

    );
  };
  
  export default Recipe;
  