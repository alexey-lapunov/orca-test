import { Text } from "components/typography/typography";

import styled from "styled-components";

import { COLORS } from "styles/variables";

import { RISK_LEVEL } from "constants/constants";

const getColor = (level) => {
  switch (level) {
    case RISK_LEVEL.high:
      return COLORS.framboise;
    case RISK_LEVEL.medium:
      return COLORS.orange;
    case RISK_LEVEL.low:
      return COLORS.basketGold;
    default:
      return "";
  }
};

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ fillMode, lightMode }) => {
    if (fillMode) {
      return "32px";
    }

    if (lightMode) {
      return "16px";
    }

    return "24px";
  }};

  height: ${({ fillMode, lightMode }) => {
    if (fillMode) {
      return "32px";
    }

    if (lightMode) {
      return "16px";
    }

    return "24px";
  }};

  background: ${({ level, fillMode }) => fillMode && getColor(level)};
  border: 1px solid
    ${({ level, lightMode, whiteMode }) => {
      if (lightMode) {
        return COLORS.gray;
      }

      if (whiteMode) {
        return COLORS.white;
      }

      return getColor(level);
    }};

  border-radius: 4px;

  transition: border-color 0.25s;

  svg {
    width: ${({ fillMode, lightMode }) => {
      if (fillMode) {
        return "16px";
      }

      if (lightMode) {
        return "8px";
      }

      return "12px";
    }};

    fill: ${({ level, whiteMode, fillMode }) => {
      if (whiteMode || fillMode) {
        return COLORS.white;
      }

      return getColor(level);
    }};

    transition: fill 0.25s;
  }
`;

export const CustomText = styled(Text)`
  margin: 0 0 0 4px;
`;
