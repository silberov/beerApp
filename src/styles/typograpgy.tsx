import styled from "styled-components";
import { colors } from "./colors";

type prop = {
    isDark: boolean
}

export const Text = styled.span`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
margin:0;
// add fold
`;

export const SubTitleText = styled.span<prop>`
    color: ${({isDark}) => (isDark ? colors.white : colors.dark)};
    font-family: Bree Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 50px;
    margin: 0;
`;

