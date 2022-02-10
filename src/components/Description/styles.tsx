import styled from "styled-components";
import { colors } from "../../Assets/colors";

export const Wraper = styled.div`
  border-bottom: 3px solid ${colors.dark};

  padding: 20px 30px;
  @media (max-width: 768px) {
    padding: 20px 30px 20px 70px;
    border: 3px solid ${colors.dark};
    border-top: none;
  }
`;
