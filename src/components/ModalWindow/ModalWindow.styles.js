import styled from "styled-components";

import { COLORS } from "styles/variables";

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 270px;
  right: 270px;
  background: ${COLORS.white};
  border-radius: 4px;
  outline: none;

  opacity: 0;
  transform: scale(0.95) translateY(-50%);
  transition: opacity 250ms, transform 250ms;

  transition-delay: 250ms;

  &.ReactModal__Content--after-open {
    transform: scale(1) translateY(-50%);
    opacity: 1;
  }

  &.ReactModal__Content--before-close {
    opacity: scale(0.95) translateY(-50%);
    opacity: 0;
  }
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(16, 17, 29, 0.3);
  z-index: 1000;

  opacity: 0;
  transition: opacity 250ms ease-in-out;

  &.ReactModal__Overlay--after-open {
    opacity: 1;
  }

  &.ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  border-bottom: 1px solid ${COLORS.gray};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonClose = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 0;
  background: none;
  border: none;

  cursor: pointer;

  svg {
    transition: fill 0.25s;
  }

  &:hover {
    svg {
      fill: ${COLORS.text};
    }
  }
`;

export const Content = styled.div`
  padding: 24px;
`;
