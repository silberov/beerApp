import styled from "styled-components";
import { colors } from "../../Assets/colors";
import spacers from "../../Assets/spacers";

type props = {
  isCard?: boolean;
};

export const Wraper = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled.div<props>`
  background-color: ${(props) => (props.color ? props.color : colors.dark)};
  min-height: ${(props) => (props.isCard ? "35px" : "43px")};
  min-width: ${(props) => (props.isCard ? "35px" : "43px")};
  border-radius: 100%;
  margin-bottom: 8px;
  margin-left: ${spacers.scRight};
`;

export const Title = styled.p<props>`
  font-family: Teko;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.isCard ? "2.188rem" : "3.125rem")};
  line-height: ${(props) => (props.isCard ? "2rem" : "3rem")};
  color: ${colors.dark};
  margin: 0;
  padding: 0;
  padding-left: 20px;
`;
