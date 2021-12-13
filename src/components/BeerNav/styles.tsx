import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Box = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 3px solid ${colors.dark};
    border-bottom: 3px solid ${colors.dark};
    &:nth-child(0) {
        border:none;
    }
        &:hover {
        color: ${colors.white};
        background-color:${colors.dark};

    }
        &.active {
        color: ${colors.white};
        background-color:${colors.dark};
        font-weight: bolder;
    }
`

 export const Ul = styled.ul`
    margin:0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
 `;

 export const Li = styled.li`
    width: 33.333%;
    
 `;

 export const Ilink = styled(Link)`
    text-decoration: none;
    color: ${colors.dark};
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    &:hover {
        color: ${colors.white};
        background-color:${colors.dark};

    }
 `;