import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, ActiveBg, ItemLeft, ItemRight } from "./Switcher.styles";

const Switcher = ({ leftIcon, rightIcon, onChange }) => {
  const [statusSwitcher, setStatusSwitcher] = useState(true);

  const handleChange = () => {
    if (onChange) {
      onChange(!statusSwitcher);
    }

    setStatusSwitcher(!statusSwitcher);
  };

  return (
    <Container onClick={handleChange} active={statusSwitcher}>
      <ActiveBg />
      <ItemLeft>{leftIcon}</ItemLeft>
      <ItemRight>{rightIcon}</ItemRight>
    </Container>
  );
};

Switcher.propTypes = {
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onChange: PropTypes.func,
};

Switcher.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  onChange: null,
};

export default Switcher;
