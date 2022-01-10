import { Route, Routes } from "react-router";
import BeerNav from "../BeerNav";
import Hops from "../Hops";
import Malt from "../Malt";
import Yeast from "../Yeast";
import { Wraper } from "./styles";

export type PropsIngContainer = {
    activeTub: string
    onActive: (tub:string) => void
    method: {
      mash_temp: [{
          temp: {
              value: number;
              unit: string;
          };
          duration: number;
      }];
      fermentation: {
          temp: {
              value: number;
              unit: string;
          };
      };
      twist?: string | null;
    }
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
  tip: string | null;
  };
  
  const IngContainer = ({activeTub, onActive, ingredients, method, tip}:PropsIngContainer): JSX.Element => {
    return (
      <Wraper>
        <Routes>
        <Route path="/" element={<BeerNav active={activeTub} onChange={onActive}  />}>
          <Route index element={<Malt malt={ingredients.malt} mashTemp={method.mash_temp}/>} />
          <Route path="/hops" element={<Hops hops={ingredients.hops}/>} />
          <Route path="/yeast" element={<Yeast yeast={ingredients.yeast} temperature={method.fermentation.temp} tip={tip} twist={method?.twist || null} />} />
          <Route path="*" element={<Malt malt={ingredients.malt} mashTemp={method.mash_temp} />} />
        </Route>
      </Routes>
      </Wraper>
    );
  };
  
  export default IngContainer;
  