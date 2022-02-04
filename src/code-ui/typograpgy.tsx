import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { colors } from "../Assets/colors";

type textProp = {
  isDark?: boolean;
  modifiers?: string[];
};
const TEXT_MODIFIER_CONFIG = {
  bold: () => `
      font-weight: 600;
    `,
  small: () => `
      font-size: 0.875rem;
    `,
};

const SUBTITLE_MODIFIER_CONFIG = {
  card: () => `
      font-size: 1rem;
      margin-left: 50px;
    `,
};

export const Text = styled.span<textProp>`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 25px;
  margin: 0;
  ${applyStyleModifiers(TEXT_MODIFIER_CONFIG)};
`;

export const SubTitleText = styled.span<textProp>`
  color: ${({ isDark }) => (isDark ? colors.white : colors.dark)};
  font-family: Bree Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 50px;
  margin: 0;

  ${applyStyleModifiers(SUBTITLE_MODIFIER_CONFIG)};
`;
