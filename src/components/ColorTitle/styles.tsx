import styled from "styled-components";
import { colors } from "../../styles/colors";
import spacers from "../../styles/spacers";

export const Dot = styled.div`
  background-color: ${(props) => (props.color ? props.color : colors.dark)};
  height: 43px;
  width: 43px;
  border-radius: 100%;
  margin-bottom: 8px;
  margin-left: ${spacers.scRight};
`;

export const Title = styled.p`
font-family: Teko;
font-style: normal;
font-weight: bold;
font-size: 50px;
color: ${colors.dark};
margin: 0;
padding: 0;
padding-left: 20px;
`;

export const Wraper = styled.div`

display: flex;
justify-content: flex-start;
align-items: center;
`;