import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { colors } from "../../Assets/colors";
import spacers from "../../Assets/spacers";

type props = {
  modifiers?: string[];
};

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  background-color: ${colors.white};
`;

const DOT_MODIFIER_CONFIG = {
  card: () => `
  min-height: 35px;
  min-width: 35px;
  margin: 0 10px 10px 45px;
    `,
};

export const Dot = styled.div<props>`
  background-color: ${(props) => (props.color ? props.color : colors.dark)};
  min-height: 43px;
  min-width: 43px;
  border-radius: 100%;
  margin-bottom: 8px;
  margin-left: ${spacers.scRight};
  ${applyStyleModifiers(DOT_MODIFIER_CONFIG)};
`;

const TITLE_MODIFIER_CONFIG = {
  card: () => `
  font-size: 2.188rem;
  line-height: 2rem;
  padding-left: 10px;
    `,
};

export const Title = styled.p<props>`
  font-family: Teko;
  font-style: normal;
  font-weight: bold;
  font-size: 3.125rem;
  line-height: 3rem;
  color: ${colors.dark};
  margin: 0;
  padding: 0;
  padding-left: 20px;
  ${applyStyleModifiers(TITLE_MODIFIER_CONFIG)};
`;
