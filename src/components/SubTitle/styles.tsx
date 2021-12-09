import styled from "styled-components";
import { colors } from "../../styles/colors";

type props = {
    isDark: boolean
}

export const Wraper = styled.div<props>`
background-color: ${({isDark}) => (isDark ? colors.dark : colors.white)};;
`;