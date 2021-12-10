import { beerType } from "../../pages/RecipePage";
import BeerNav from "../BeerNav";
import BeerProrps from "../BeerProrps";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import SubTitle from "../SubTitle";
import { Wraper } from "./styles";

export type RecipeProps = {
beer:beerType
activeTub: string
  };
  
  const Recipe = ({beer, activeTub}:RecipeProps): JSX.Element => {
      console.log(beer);
      
    return (
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
                <BeerNav active={activeTub}  />
            </Wraper>
      </div>

    );
  };
  
  export default Recipe;
  