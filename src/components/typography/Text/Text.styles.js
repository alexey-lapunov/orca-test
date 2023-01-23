import styled from "styled-components";
import { COLORS } from "styles/variables";

export const Container = styled.p`
  font-size: 14px;
  line-height: 18px;

  font-weight: 400;

  color: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.text)};

  transition: color 0.25s;

  span {
    color: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.gray)};

    transition: color 0.25s;
  }
`;