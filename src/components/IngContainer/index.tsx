import { Route, Routes } from "react-router";
import BeerNav from "../BeerNav";
import Hops from "../Hops";
import Malt from "../Malt";
import Yeast from "../Yeast";
import { Wraper } from "./styles";

export type PropsIngContainer = {
    activeTub: string
    onActive: (tub:string) => void
    ingredients: {
      malt: {
          name: string;
          amount: {
              value: number;
              unit: string;
          };
      }[];
      hops: {
          name: string;
          amount: {
              value: number;
              unit: string;
          };
          add: string;
          attribute: string;
      }[];
      yeast: string;
  }
  };
  
  const IngContainer = ({activeTub, onActive, ingredients}:PropsIngContainer): JSX.Element => {
    return (
      <Wraper>
        <Routes>
        <Route path="/" element={<BeerNav active={activeTub} onChange={onActive} />}>
          <Route index element={<Malt malt={ingredients.malt} />} />
          <Route path="/hops" element={<Hops />} />
          <Route path="/yeast" element={<Yeast />} />
          <Route path="*" element={<Malt malt={ingredients.malt} />} />
        </Route>
      </Routes>
      </Wraper>
    );
  };
  
  export default IngContainer;
  