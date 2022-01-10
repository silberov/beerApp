import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wraper = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const AmountBox = styled.div`
    text-align: right;
    display:inline;
`;

export const IngInput = styled.input`
    width: 50px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid ${colors.dark};
`;
