import styled from "styled-components";
import { colors } from "../../Assets/colors";

type props = {
    isKeg: boolean
}

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
    width: ${isKeg => isKeg ? "274px" : "166px"};
    margin: 0 30px 0 0;
    @media (max-width: 768px) {
        width: ${isKeg => isKeg ? "137px" : "83px"};
        position: absolute;
        left: -83px;
        top: 45px
    }
`

export const Box = styled.div`
  width: 100%;
  font-family: Teko;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  display: inline;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
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


export const LeftGrid = styled.div`
  display: grid;
  outline: 3px solid ${colors.dark};
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
  > * {
    outline: 3px solid ${colors.dark};
  }

  > :nth-child(1) {
    grid-column: 1 / 5;
  }
  > :nth-child(6) {
    grid-column: 1 / 5;
  }
  > :nth-child(7) {
    grid-column: 1 / 5;
  }
  > :nth-child(8) {
    grid-column: 1 / 5;
  }
`;


export const RightGrid = styled.div`
  outline: 3px solid ${colors.dark};
`;
