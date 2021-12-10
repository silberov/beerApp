import { Route, Routes } from "react-router";
import BeerNav from "../BeerNav";
import Hops from "../Hops";
import Malt from "../Malt";
import Yeast from "../Yeast";
import { Wraper } from "./styles";

export type PropsIngContainer = {
    activeTub: string
    onActive: (tub:string) => void
  };
  
  const IngContainer = ({activeTub, onActive}:PropsIngContainer): JSX.Element => {
    return (
      <Wraper>
        {/* <BeerNav active={activeTub} /> */}
        <Routes>
        <Route path="/" element={<BeerNav active={activeTub} onChange={onActive} />}>
          <Route index element={<Malt />} />
          <Route path="/hops" element={<Hops />} />
          <Route path="/yeast" element={<Yeast />} />
          <Route path="*" element={<Malt />} />
        </Route>
      </Routes>
      </Wraper>
    );
  };
  
  export default IngContainer;
  