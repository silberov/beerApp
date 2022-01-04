import { Box, Ul, Li,Ilink } from "./styles";
import {  Outlet } from "react-router-dom";

export type BeerNavProps = {
    active: string;
    onChange: (text: string) => void;
  };
  
  const BeerNav = ({active, onChange}:BeerNavProps): JSX.Element => {
    
    const heandleChange = (newTub:string) => {
      onChange(newTub)
    }
    
    return (
      <>
        <nav>
          <Ul>
            <Li onClick={() => heandleChange('malt')}><Ilink to="/"><Box className={active === "malt" ? "active" : ""} >malt</Box></Ilink></Li>
            <Li onClick={() => heandleChange('hops')}><Ilink to="/hops"><Box className={active === "hops" ? "active" : "middle"} >hops</Box></Ilink></Li>
            <Li onClick={() => heandleChange('yeast')}><Ilink to="/yeast"><Box className={active === "yeast" ? "active" : ""} >yeast</Box></Ilink></Li>
          </Ul>
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default BeerNav;
  