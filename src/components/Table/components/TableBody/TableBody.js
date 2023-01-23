import React from "react";
import PropTypes from "prop-types";

import { TableBodyContainer } from "./TableBody.styles";

const TableBody = ({ children }) => (
  <TableBodyContainer>{children}</TableBodyContainer>
);

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
