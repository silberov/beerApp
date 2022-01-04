import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wraper = styled.div`
display: flex;
`;

export const Box = styled.div`
    width:25%;
    border-bottom: 3px solid ${colors.dark};
    border-right: 3px solid ${colors.dark};
    &:nth-child(4) {
        border-right: none;
    }
    padding: 20px 0;
    display: flex;
    justify-content: center;
`

export const Lable = styled.p`
    font-family: Teko;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    display: inline;
    margin: auto;
`