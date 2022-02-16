import Recipe from "../../components/Recipe";
import { useParams } from "react-router";
import { useAPI } from "../../context";

export type RecipePageProps = {
  activeTub: string;
  onActive: (tub: string) => void;
};

const RecipePage = ({ activeTub, onActive }: RecipePageProps) => {
  const { id } = useParams();
  const { beers, loading, error, setSelectedId } = useAPI();

  id && setSelectedId(id);

  return loading ? (
    <h1>loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <Recipe activeTub={activeTub} onActive={onActive} beer={beers[0]} />
  );
};

export default RecipePage;
