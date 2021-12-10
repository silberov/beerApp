import styled from "styled-components";
import { colors } from "../../styles/colors";


type prop = {
    isDark: boolean
}

export const Wraper = styled.div<prop>`
    background-color: ${({isDark}) => (isDark ? colors.dark : colors.white)};
    border: ${({isDark}) => (!isDark && `3px solid ${colors.dark}`)};
    border-left: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px; 
`;

export const P = styled.p<prop>`
    color: ${({isDark}) => (isDark ? colors.white : colors.dark)};
    font-family: Bree Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 44px;
    margin: 0;
`;