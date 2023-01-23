import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Text.styles";

const Text = ({ value, spanValue, whiteMode, className }) => (
  <Container whiteMode={whiteMode} className={className}>
    {value} {spanValue && <span>{spanValue}</span>}
  </Container>
);

Text.propTypes = {
  value: PropTypes.string,
  spanValue: PropTypes.string,
};

export default Text;
