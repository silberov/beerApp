import styled from "styled-components";
import { colors } from "../../Assets/colors";

type props = {
  isKeg: boolean;
};

export const Wraper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    position: relative;
    align-items: flex-start;
  }
`;

export const Img = styled.img<props>`
  margin: 0 30px 0 0;
  width: ${(props) => (props.isKeg ? "274px" : "166px")};
  @media (max-width: 768px) {
    width: ${(isKeg) => (isKeg ? "137px" : "83px")};
    position: absolute;

    left: -20%;
    top: 147px;
  }
`;

export const Box = styled.div`
  width: calc(25% - 3px);
  text-align: center;
  font-family: Teko;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  display: inline;
  padding: 20px 0;
  justify-content: center;
  border-right: 3px solid ${colors.dark};
  border-bottom: 3px solid ${colors.dark};
  :nth-child(4) {
    border-right: none;
    width: 25%;
  }
  @media (max-width: 768px) {
    width: calc(50% - 3px);
    border-bottom: 3px solid ${colors.dark};
    :nth-child(4) {
      width: calc(50% - 3px);
      border-right: 3px solid ${colors.dark};
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(2, 1fr);
  > :nth-child(1) {
    grid-column: 1 / 3;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LeftSection = styled.div`
  outline: 3px solid ${colors.dark};
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Numeric = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RightSection = styled.div`
  outline: 3px solid ${colors.dark};
  @media (max-width: 768px) {
    outline: none;
    border-left: 3px solid ${colors.dark};
    border-right: 3px solid ${colors.dark};
  }
`;
