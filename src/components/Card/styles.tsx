import styled from "styled-components";
import { colors } from "../../Assets/colors";

export const Wraper = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #a5a5a5;
  width: 550px;
  margin-bottom: 25px;
  cursor: pointer;
  position: relative;
  @media (max-width: 700px) {
    position: relative;
    overflow: hidden;
  }
`;

export const Lable = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 34px;
  margin: auto;
`;

export const Img = styled.img`
  width: 100px;
  z-index: +1;
  @media (max-width: 700px) {
    position: relative;
    left: -50px;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  position: relative;
  left: -25px;
  @media (max-width: 700px) {
    left: -70px;

  }
`;

export const LineBox = styled.div`
  border: 3px solid ${colors.dark};
`;
export const MiddleLineBox = styled.div`
  border-top: 3px solid ${colors.dark};
  border-bottom: 3px solid ${colors.dark};
`;

export const PropBox = styled.div`
  display: flex;
`;

export const DescribtionBox = styled.div`
  padding: 20px 20px 20px 40px;
`;
