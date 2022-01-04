import React from "react";
import { Wraper, P, Input, AmountBox } from "./styles";

export interface SubTitleProps {
  text: string;
  isDark?: boolean;
  amount?: number;
  units?: string;
}

const SubTitle = ({ text, isDark = false, amount, units }: SubTitleProps) => {
  return (
    <Wraper isDark={isDark}>
      <P isDark={isDark}>{text}</P>
      {amount && <AmountBox ><Input value={amount} /><p>{units}</p></AmountBox>}
    </Wraper>
  );
};

export default SubTitle;
