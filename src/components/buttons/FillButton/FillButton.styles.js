import { Text } from "components/typography/typography";

import styled from "styled-components";

import { COLORS } from "styles/variables";

export const BtnText = styled(Text)`
  color: ${COLORS.white};
`;

export const Button = styled.button`
  box-sizing: border-box;
  padding: ${({ lightMode }) => (lightMode ? "5px 8px" : "6px 32px")};

  background: ${({ lightMode }) =>
    lightMode ? COLORS.white : COLORS.brescianBlue};
  box-shadow: ${({ lightMode }) =>
    lightMode ? "none" : `0px 0px 0px 2px ${COLORS.wizardWhite}`};
  border-radius: 4px;

  border: ${({ lightMode }) =>
    lightMode ? `1px solid ${COLORS.gray}` : "none"};
  outline: none;

  cursor: pointer;
  transition: opacity 0.25s, border-color 0.25s;

  ${BtnText} {
    font-family: "Mulish";

    color: ${({ lightMode }) => (lightMode ? COLORS.text : COLORS.white)};
  }

  &:hover {
    opacity: 0.8;

    border-color: ${({ lightMode }) => lightMode && COLORS.brescianBlue};
  }
`;
