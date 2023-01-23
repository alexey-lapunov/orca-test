import styled from "styled-components";

export const FadeWithTranslateContainer = styled.div`
  transition: opacity ${({ duration }) => duration}ms,
    transform ${({ duration }) => duration}ms;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  transform: translateY(${({ state }) => (state === "entered" ? "7px" : "0")});
`;
