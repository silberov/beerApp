import styled from "styled-components";
import { colors } from "../../Assets/colors";


type prop = {
    isDark: boolean
}

//should be moved to a global type file

export const Wraper = styled.div<prop>`
    background-color: ${({isDark}) => (isDark ? colors.dark : colors.white)};
    border-bottom: 3px solid ${colors.dark};
    border-left: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px; 
    @media (max-width: 768px) {
        padding: 10px 20px 10px 50px; 
    }
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${colors.dark};
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    width: 33%;
    display:inline;
`;

export const AmountBox = styled.div`
    text-align: right;
`;