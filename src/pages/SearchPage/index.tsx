import { useEffect, useState } from "react";
import axios from "axios";
import { beerType } from "../../interfaces/beer-interface";
import CardConatiner from "../../components/CardContainer";


const defaultbeer: beerType[] = [];

const SearchPage = () => {

  const [beers, setBeers]: [beerType[], (beer: beerType[]) => void] =
    useState(defaultbeer);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
    
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<beerType[]>("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setBeers(response.data);
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
  ) : (<CardConatiner beers={beers}/>
  );
};

export default SearchPage;
