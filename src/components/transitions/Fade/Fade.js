import React from "react";

import { FadeContainer } from "./Fade.styles";

const Fade = React.forwardRef(({ state, duration = 250, children }, ref) => (
  <FadeContainer ref={ref} state={state} duration={duration}>
    {children}
  </FadeContainer>
));

export default Fade;
