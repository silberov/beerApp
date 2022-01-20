// import { Route, Routes } from "react-router";
import BeerNav from "../BeerNav";
import Hops from "./Hops";
import Malt from "./Malt";
import Yeast from "./Yeast";
import { Wraper } from "./styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export type PropsIngContainer = {
  activeTub: string;
  onActive: (tub: string) => void;
  method: {
    mash_temp: [
      {
        temp: {
          value: number;
          unit: string;
        };
        duration: number;
      }
    ];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist?: string | null;
  };
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
  };
  tip: string | null;
};

const IngContainer = ({
  activeTub,
  onActive,
  ingredients,
  method,
  tip,
}: PropsIngContainer): JSX.Element => {
  // const [percent, calculatePercentage] = useScale()

  // console.log("cont", percent);

  return (
    <Wraper>
      <Router>
        <BeerNav active={activeTub} onChange={onActive} />
        <Routes>
          <Route
            index
            element={
              <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
            }
          />
          <Route path="/hops" element={<Hops hops={ingredients.hops} />} />
          <Route
            path="/yeast"
            element={
              <Yeast
                yeast={ingredients.yeast}
                temperature={method.fermentation.temp}
                tip={tip}
                twist={method?.twist || null}
              />
            }
          />
          <Route
            path="*"
            element={
              <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
            }
          />
        </Routes>
      </Router>
    </Wraper>
  );
};

export default IngContainer;
