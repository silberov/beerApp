import { useParams } from "react-router";
import BeerNav from "../BeerNav";
import Hops from "./Hops";
import Malt from "./Malt";
import Yeast from "./Yeast";
import { Wraper } from "./styles";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

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
  const param = useParams();
  console.log("ing cont", param);

  // const [percent, calculatePercentage] = useScale()

  // console.log("cont", percent);

  return (
    <Wraper>
      <BeerNav active={activeTub} onChange={onActive} />
      {activeTub === "malt" ? (
        <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
      ) : activeTub === "hops" ? (
        <Hops hops={ingredients.hops} />
      ) : (
        <Yeast
          yeast={ingredients.yeast}
          temperature={method.fermentation.temp}
          tip={tip}
          twist={method?.twist || null}
        />
      )}
      {/* <Routes>
          <Route
            index
            element={
              <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
            }
          />
          <Route path={`/${param.id}/hops`} element={<Hops hops={ingredients.hops} />} />
          <Route
            path={`/${param.id}/yeast`}
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
            path={`/${param.id}`}
            element={
              <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
            }
          />
        </Routes> */}
      {/* </Router> */}
    </Wraper>
  );
};

export default IngContainer;
