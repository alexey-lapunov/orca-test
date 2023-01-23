import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Value } from "./AdditionalInfo.styles";

const AdditionalInfo = ({ value }) => (
  <Container>
    <Title value="Additional info" />
    <Value value={value} />
  </Container>
);

AdditionalInfo.propTypes = {
  value: PropTypes.string,
};

export default AdditionalInfo;
