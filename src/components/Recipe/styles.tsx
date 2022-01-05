import styled from "styled-components";
import { colors } from "../../styles/colors";


export const Wraper = styled.div`
    display:flex; 
    align-items: flex-end;
    margin: auto;
    max-width: 1200px;

`;

export const InnerBox = styled.div`
    flex-basis: 50%;
    border: 3px solid ${colors.dark};
    &:nth-child(1) {
        border-right: none;
    }

`;

export const OuterBox = styled.div`
    display: flex;
    align-content: stretch;
 
`;


export const BeerImg = styled.div`
    background-image: url()()
`;