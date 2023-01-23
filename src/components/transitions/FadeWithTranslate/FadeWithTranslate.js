import React from "react";

import { FadeWithTranslateContainer } from "./FadeWithTranslate.styles";

const FadeWithTranslate = React.forwardRef(
  ({ state, duration = 250, children, className }, ref) => (
    <FadeWithTranslateContainer
      ref={ref}
      state={state}
      duration={duration}
      className={className}
    >
      {children}
    </FadeWithTranslateContainer>
  )
);

export default FadeWithTranslate;
