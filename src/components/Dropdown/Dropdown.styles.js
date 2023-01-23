import { FadeWithTranslate } from "components/transitions/transitions";

import { ReactComponent as SVGArrowDown } from "icons/arrow-down.svg";

import styled from "styled-components";

import { COLORS } from "styles/variables";

export const CustomFadeWithTranslate = styled(FadeWithTranslate)`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 8px;

  border-radius: 4px;
  border: 1px solid ${COLORS.gray};
  background: ${COLORS.white};

  cursor: pointer;

  transition: border-color 0.25s, opacity 0.25s;

  &:hover {
    border-color: ${COLORS.brescianBlue};
  }
`;

export const HeaderText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  color: ${COLORS.text};

  svg {
    margin: 0 0 0 8px;
  }
`;

export const HeaderIcon = styled.div`
  margin: 0 8px 0 0;

  svg {
    fill: ${COLORS.gray};

    transition: fill 0.25s;
  }

  ${Header}:hover & {
    svg {
      fill: ${COLORS.brescianBlue};
    }
  }
`;

export const StyledSVGArrowDown = styled(SVGArrowDown)`
  margin: 0 0 0 8px;

  fill: ${COLORS.gray};

  transition: fill 0.25s;

  ${Header}:hover & {
    fill: ${COLORS.brescianBlue};
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  right: 0;

  min-width: 100%;
  padding: 4px 0;
  margin: 0;

  background: ${COLORS.white};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  list-style: none;

  z-index: 100000;
`;

export const MenuItem = styled.li`
  padding: 4px 16px;

  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;

  cursor: pointer;

  transition: color 0.25s;

  color: ${COLORS.text};

  &:hover {
    background: ${COLORS.wizardWhite};
    color: ${COLORS.brescianBlue};
  }
`;

export const Container = styled.div`
  position: relative;

  display: inline-flex;

  z-index: 100;

  ${Header} {
    background: ${({ blueMode }) => blueMode && COLORS.brescianBlue};

    &:hover {
      opacity: 0.7;

      ${StyledSVGArrowDown} {
        fill: ${({ blueMode }) => blueMode && COLORS.white};
      }
    }
  }

  ${HeaderText} {
    color: ${({ blueMode }) => blueMode && COLORS.white};
  }

  ${StyledSVGArrowDown} {
    fill: ${({ blueMode }) => blueMode && COLORS.white};
  }
`;
