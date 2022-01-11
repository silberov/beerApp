import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../../components/Recipe";
import { beerType } from "../../interfaces/beer-interface";


const defaultbeer: beerType[] = [];

const RecipePage = () => {
  const [activeTub, setActiveTub]: [string, (activeTub: string) => void] =
    useState("malt");

  const [beer, setBeer]: [beerType[], (beer: beerType[]) => void] =
    useState(defaultbeer);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
    
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<beerType[]>("https://api.punkapi.com/v2/beers/random")
      .then((response) => {
        setBeer(response.data);
        setLoading(false);
      })
      .catch((err) => {
        const error =
          err.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h1>loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <Recipe activeTub={activeTub} onActive={setActiveTub} beer={beer[0]} />
  );
};

export default RecipePage;
