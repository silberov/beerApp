import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wraper = styled.nav`

display: flex;

`;

export const Box = styled.div`
width: 33%;
    border-right: 3px solid ${colors.dark};
    &:nth-child(1) {
            border-left: 3px solid ${colors.dark};
        }
`