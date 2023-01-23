import React from "react";
import PropTypes from "prop-types";

import { Container, CopyValue, Button } from "./CopyBox.styles";

import { ReactComponent as SVGCopy } from "icons/copy.svg";

const CopyBox = ({ value, whiteMode, className }) => {
  const onClickButton = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Container whiteMode={whiteMode} className={className}>
      <CopyValue>{value}</CopyValue>
      <Button onClick={onClickButton}>
        <SVGCopy />
      </Button>
    </Container>
  );
};

CopyBox.propTypes = {
  value: PropTypes.string,
  whiteMode: PropTypes.bool,
};

export default CopyBox;
