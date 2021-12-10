export type BeerNavProps = {
    active: string;

  };
  
  const BeerNav = ({active}:BeerNavProps): JSX.Element => {
    return (
      <div>
          <div><p>malt</p></div>
          <div><p>hops</p></div>
          <div><p>yeast</p></div>
      </div>
    );
  };
  
  export default BeerNav;
  