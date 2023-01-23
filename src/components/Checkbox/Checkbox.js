import React from "react";
import PropTypes from "prop-types";

import { Label, Input, Box, Text } from "./Checkbox.styles";

import { ReactComponent as SVGCheck } from "icons/check.svg";

const Checkbox = ({ text, checked, onChange }) => (
  <Label>
    <Input checked={checked} onChange={onChange} />
    <Box>
      <SVGCheck />
    </Box>
    <Text>{text}</Text>
  </Label>
);

Checkbox.propTypes = {
  text: PropTypes.string,
};

export default Checkbox;
