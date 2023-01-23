import React from "react";
import PropTypes from "prop-types";

import { Button, BtnText } from "./FillButton.styles";

const FillButton = ({ children, className, lightMode, onClick }) => (
  <Button className={className} lightMode={lightMode} onClick={onClick}>
    <BtnText value={children}></BtnText>
  </Button>
);

FillButton.propTypes = {
  children: PropTypes.node,
};

export default FillButton;
