import { COLORS } from "styles/variables";

import styled, { css } from "styled-components";

export const ItemCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  svg {
    position: relative;

    fill: ${COLORS.text};

    transition: fill 0.25s;
  }
`;

export const ItemLeft = styled.div`
  ${ItemCSS}
`;

export const ItemRight = styled.div`
  ${ItemCSS}
`;

export const ActiveBg = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;

  width: 28px;
  height: 28px;

  border-radius: 4px;
  background: ${COLORS.brescianBlue};

  transition: transform 0.25s;
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;

  padding: 1px;
  border-radius: 4px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.gray};

  cursor: pointer;

  &:hover {
    ${ItemLeft} {
      svg {
        fill: ${({ active }) => (active ? COLORS.white : COLORS.brescianBlue)};
      }
    }

    ${ItemRight} {
      svg {
        fill: ${({ active }) => (active ? COLORS.brescianBlue : COLORS.white)};
      }
    }
  }

  ${ActiveBg} {
    transform: translateX(${({ active }) => (active ? "0" : "100%")});
  }

  ${ItemLeft} {
    svg {
      fill: ${({ active }) => (active ? COLORS.white : COLORS.text)};
    }
  }

  ${ItemRight} {
    svg {
      fill: ${({ active }) => (active ? COLORS.text : COLORS.white)};
    }
  }
`;
