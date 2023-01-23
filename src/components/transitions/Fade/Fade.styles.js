import styled from "styled-components";

export const FadeContainer = styled.div`
  transition: opacity ${({ duration }) => duration}ms;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;
