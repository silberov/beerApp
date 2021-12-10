import React from "react";
import { Wraper, P } from "./styles";

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
      {amount && <div style={{display:"flex"}}><input value={amount} /><p>{units}</p></div>}
    </Wraper>
  );
};

export default SubTitle;
