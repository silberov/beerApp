import { Box, Wraper } from "./styles";

export type BeerNavProps = {
    active: string;
    // onChange: (text: string) => void;
  };
  
  const BeerNav = ({active}:BeerNavProps): JSX.Element => {
    return (
      <Wraper>
        <nav style={{textDecoration:"none"}}>
          <li><Box><p>malt</p></Box></li>
          <li><Box><p>hops</p></Box></li>
          <li><Box><p>yeast</p></Box></li>
        </nav>
      </Wraper>
    );
  };
  
  export default BeerNav;
  