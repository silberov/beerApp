import React from "react";
import NumberFormat from 'react-number-format';
import { Wraper, Box, Lable } from "./style";


export interface BeerPropsProps {
  ibu: number;
  abv: number;
  og: number;
  fg: number;
}

const BeerProps = ({ ibu, abv, og, fg }: BeerPropsProps) => {
  return (
    <Wraper>
        <Box><Lable>IBU : {ibu}</Lable></Box>
        <Box><Lable>ABV : <NumberFormat value={abv} displayType={'text'} suffix={'%'} /></Lable></Box>
        <Box><Lable>OG : {og}</Lable></Box>
        <Box><Lable>FG : {fg}</Lable></Box>
    </Wraper>
  );
};

export default BeerProps;