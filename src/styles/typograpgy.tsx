import styled from "styled-components";
import { applyStyleModifiers } from 'styled-components-modifiers';
import { colors } from "./colors";

type textProp = {
    isDark?: boolean;
    modifiers?: string[]
}
const TEXT_MODIFIER_CONFIG = {
    bold: () => `
      font-weight: 600;
    `,
  };

export const Text = styled.span<textProp>`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
margin: 0;
${applyStyleModifiers(TEXT_MODIFIER_CONFIG)};
`;

export const SubTitleText = styled.span<textProp>`
    color: ${({isDark}) => (isDark ? colors.white : colors.dark)};
    font-family: Bree Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 50px;
    margin: 0;
`;

