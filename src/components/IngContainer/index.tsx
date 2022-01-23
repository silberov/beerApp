import BeerNav from "../BeerNav";
import Hops from "./Hops";
import Malt from "./Malt";
import Yeast from "./Yeast";
import { Wraper } from "./styles";
import { useLocation } from "react-router-dom";


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

  const location = useLocation().pathname.split('/');
  const tub = location[location.length-1]

  console.log("ing location", tub);

  // const [percent, calculatePercentage] = useScale()

  return (
    <Wraper>

      <BeerNav active={activeTub} onChange={onActive} />
      {tub === "yeast" ? (
        <Yeast
        yeast={ingredients.yeast}
        temperature={method.fermentation.temp}
        tip={tip}
        twist={method?.twist || null}
      />
        
      ) : tub === "hops" ? (
        <Hops hops={ingredients.hops} />
      ) : (
        <Malt malt={ingredients.malt} mashTemp={method.mash_temp} />
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
