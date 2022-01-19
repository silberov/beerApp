import styled from "styled-components";
import { colors } from "../../Assets/colors";

export const Wraper = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: #a5a5a5;
    width: 450px;
    position: relative;
    overflow: hidden;

`;

export const Lable = styled.span`
    font-family: Teko;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 34px;
    margin: auto;
`

export const Img  = styled.img`
    width: 100px;
    position: relative;
    left: -50px;
    z-index: +1;

`

export const InfoBox = styled.div`
    position: relative;
    left: -60px;
    width:100%;
`


export const PropBox = styled.div`
 border: 3px solid ${colors.dark};
`