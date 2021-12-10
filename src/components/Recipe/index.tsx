import { beerType } from "../../pages/RecipePage";
import BeerNav from "../BeerNav";
import BeerProrps from "../BeerProrps";
import ColorTitle from "../ColorTitle";
import Description from "../Description";
import SubTitle from "../SubTitle";
import { Wraper } from "./styles";

export type RecipeProps = {
beer:beerType
  };
  
  const Recipe = ({beer}:RecipeProps): JSX.Element => {
      console.log(beer);
      
    return (
      <Wraper>
        <ColorTitle color={"#454545"} title={beer.name} />
        <SubTitle isDark={true} text={beer.tagline} />
        <SubTitle isDark={false} text={"ingredients for "} amount={beer.volume.value} units={beer.volume.unit === "litres" ? "L" : beer.volume.unit} />
        <BeerProrps ibu={beer.ibu} abv={beer.abv} og={beer.target_og} fg={beer.target_fg} />
        <Description text={beer.description} />
        {/* <BeerNav active={activeTub}  /> */}
      </Wraper>
    );
  };
  
  export default Recipe;
  