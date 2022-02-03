import { Box, Ul, Li, Ilink } from "./styles";
import { Outlet, useParams } from "react-router-dom";


export type BeerNavProps = {
  active: string;
  onChange: (text: string) => void;
};

const BeerNav = ({ active, onChange }: BeerNavProps): JSX.Element => {
  const heandleChange = (newTub: string) => {
    onChange(newTub);
  };
  const param = useParams();

  return (
    <>
      <nav>
        <Ul>
          <Li onClick={() => heandleChange("malt")}>
            <Ilink to={`/${param.id}`}>
              <Box className={active === "malt" ? "active" : ""}>mash</Box>
            </Ilink>
          </Li>
          <Li onClick={() => heandleChange("hops")}>
            <Ilink to={`/${param.id}/hops`}>
              <Box className={active === "hops" ? "active" : "middle"}>
                hops
              </Box>
            </Ilink>
          </Li>
          <Li onClick={() => heandleChange("yeast")}>
            <Ilink to={`/${param.id}/yeast`}>
              <Box className={active === "yeast" ? "active" : ""}>yeast</Box>
            </Ilink>
          </Li>
        </Ul>
      </nav>
      <Outlet />
    </>
  );
};

export default BeerNav;
