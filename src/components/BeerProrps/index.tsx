import React from "react";
import { Wraper, Box, Lable } from "./style";


export interface BeerPropsProps {
  ibu: number;
  abv: number;
  og: number;
  fg: number;
}

const BeerProrps = ({ ibu, abv, og, fg }: BeerPropsProps) => {
  return (
    <Wraper>
        <Box><Lable>IBU : {ibu}</Lable></Box>
        <Box><Lable>ABV : {ibu}%</Lable></Box>
        {/* abv needs fixing */}
        <Box><Lable>OG : {og}</Lable></Box>
        <Box><Lable>FG : {fg}</Lable></Box>
    </Wraper>
  );
};

export default BeerProrps;
