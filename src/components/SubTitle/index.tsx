import React from "react";
import { SubTitleText } from "../../styles/typograpgy";
import { Wraper, Input, AmountBox } from "./styles";

export interface SubTitleProps {
  text: string;
  isDark?: boolean;
  amount?: number;
  units?: string;
}

const SubTitle = ({ text, isDark = false, amount, units }: SubTitleProps) => {
  return (
    <Wraper isDark={isDark}>
      <SubTitleText isDark={isDark}>{text}</SubTitleText>
      {amount && <AmountBox><Input value={amount}/><p>{units}</p></AmountBox>}
    </Wraper>
  );
};

export default SubTitle;
