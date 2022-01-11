import React from "react";
import { SubTitleText, Text } from "../../code-ui/typograpgy";
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
      {amount && <AmountBox><Input value={amount}/><span>{units}</span></AmountBox>}
    </Wraper>
  );
};

export default SubTitle;
