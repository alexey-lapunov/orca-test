import { createGlobalStyle } from "styled-components";

import { COLORS } from "./variables";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.whiteSolid};

    margin: 0;

    font-family: "Mulish";
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
