import styled from "styled-components";

import { ReactComponent as SVGArrowDown } from "icons/arrow-down.svg";

import { COLORS } from "styles/variables";

export const Fade = styled.div`
  transition: ${({ duration }) => duration}ms;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  transform: translateY(${({ state }) => (state === "entered" ? "7px" : "0")});
`;

export const Container = styled.div`
  position: relative;

  display: inline-flex;

  z-index: 100;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 6px 8px;

  border-radius: 4px;
  border: 1px solid ${COLORS.gray};
  background: ${COLORS.white};

  cursor: pointer;

  transition: border-color 0.25s;

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
  top: calc(100% + 4px);
  right: 0;

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

  &:hover {
    background: ${COLORS.wizardWhite};
    color: ${COLORS.brescianBlue};
  }
`;
