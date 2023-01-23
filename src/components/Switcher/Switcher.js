import React from "react";
import PropTypes from "prop-types";

import { Container, ActiveBg, ItemLeft, ItemRight } from "./Switcher.styles";

const Switcher = ({ leftIcon, rightIcon, value = true, onClick }) => (
  <Container active={value} onClick={onClick}>
    <ActiveBg />
    <ItemLeft>{leftIcon}</ItemLeft>
    <ItemRight>{rightIcon}</ItemRight>
  </Container>
);

Switcher.propTypes = {
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  value: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Switcher;
