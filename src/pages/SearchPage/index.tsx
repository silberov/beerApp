import CardConatiner from "../../components/CardContainer";
import { useAPI } from "../../context";

const SearchPage = () => {
  const {beers, loading, error, setSelectedId} = useAPI();
  setSelectedId('')
  console.log("beers", beers);

  return loading ? (
    <h1>loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
  <CardConatiner beers={beers}/>
  );
};

export default SearchPage;
