import { Box, Ul, Li,Ilink } from "./styles";
import {  Outlet } from "react-router-dom";

export type BeerNavProps = {
    active: string;
    onChange: (text: string) => void;
  };
  
  const BeerNav = ({active}:BeerNavProps): JSX.Element => {


    return (
      <>
        <nav>
          <Ul>
            <Li><Ilink to="/"><Box className={active === "malt" ? "active" : ""} >malt</Box></Ilink></Li>
            <Li><Ilink to="/hops"><Box className={active === "hops" ? "active" : ""} >hops</Box></Ilink></Li>
            <Li><Ilink to="/yeast"><Box className={active === "yeast" ? "active" : ""} >yeast</Box></Ilink></Li>
          </Ul>
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default BeerNav;
  