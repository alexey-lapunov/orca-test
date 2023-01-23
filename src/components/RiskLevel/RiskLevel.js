import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Container, CustomText } from "./RiskLevel.styles";

import { RISK_LEVEL } from "constants/constants";

import { ReactComponent as SVGWarning1 } from "icons/warning-1.svg";
import { ReactComponent as SVGWarning2 } from "icons/warning-2.svg";
import { ReactComponent as SVGWarning3 } from "icons/warning-3.svg";

const RiskLevel = ({ level, whiteMode, fillMode, lightMode, className }) => (
  <Wrapper>
    <Container
      level={level}
      whiteMode={whiteMode}
      fillMode={fillMode}
      lightMode={lightMode}
      className={className}
    >
      {level === RISK_LEVEL.high && <SVGWarning1 />}
      {level === RISK_LEVEL.medium && <SVGWarning2 />}
      {level === RISK_LEVEL.low && <SVGWarning3 />}
    </Container>
    {lightMode && <CustomText value="Text" />}
  </Wrapper>
);

RiskLevel.propTypes = {
  level: PropTypes.string,
  whiteMode: PropTypes.bool,
};

export default RiskLevel;
