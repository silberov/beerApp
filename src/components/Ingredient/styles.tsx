import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wraper = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const AmountBox = styled.div`
    text-align: right;
`;

export const IngInput = styled.input`
    width: 30%;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* line-height: 30px; */
    border: none;
    border-bottom: 1px solid ${colors.dark};
`;
