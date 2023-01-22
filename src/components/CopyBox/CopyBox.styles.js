import styled from "styled-components";

import { COLORS } from "styles/variables";

export const CopyValue = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  color: ${COLORS.text};

  widht: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 0 8px;
  background: none;
  border: none;

  cursor: pointer;

  svg {
    fill: ${COLORS.gray};

    transition: fill 0.25s;
  }

  &:hover {
    &&& {
      svg {
        fill: ${COLORS.brescianBlue};
      }
    }
  }
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;

  max-width: 198px;

  padding: 3px 0 3px 8px;
  border: 1px solid
    ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.gray)};
  border-radius: 4px;

  ${CopyValue} {
    color: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.text)};
  }

  ${Button} {
    svg {
      fill: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.gray)};
    }
  }
`;
