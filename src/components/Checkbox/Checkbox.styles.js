import { COLORS } from "styles/variables";

import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 12px;
  height: 12px;

  background: ${COLORS.paleGrey};
  border: 1px solid ${COLORS.gray};
  border-radius: 2px;

  transition: border 0.25s, background 0.25s;

  svg {
    fill: ${COLORS.white};

    transform: scale(0);

    transition: transform 0.25s;
  }
`;

export const Input = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  display: none;

  &:checked + ${Box} {
    background: ${COLORS.brescianBlue};

    svg {
      transform: scale(1);
    }
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  color: ${COLORS.text};

  margin: 0 0 0 8px;
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    ${Box} {
      border: 1px solid ${COLORS.brescianBlue};
    }
  }
`;
