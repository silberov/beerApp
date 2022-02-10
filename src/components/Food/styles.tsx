import styled from "styled-components";
import { colors } from "../../Assets/colors";

export const Wraper = styled.div`

  padding: 20px 30px;
  @media (max-width: 768px) {
    border-left: 3px solid ${colors.dark};
    border-right: 3px solid ${colors.dark};
    border-bottom:none ;
  }

`;

export const FoodTitle = styled.p`
  color: ${colors.dark};
  font-family: Bree Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 44px;
  margin: 0;
`;

export const Ul = styled.ul`
  padding-inline-start: 20px;
`;

export const Li = styled.li`
  margin-bottom: 3px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;
