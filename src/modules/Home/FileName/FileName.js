import React from "react";
import PropTypes from "prop-types";

import { CustomText } from "./FileName.styles";

const FileName = (props) => <CustomText {...props} />;

FileName.propTypes = {
  value: PropTypes.string,
};

export default FileName;
