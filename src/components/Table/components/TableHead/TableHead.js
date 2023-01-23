import React from "react";
import PropTypes from "prop-types";

import { TableHeadContainer } from "./TableHead.styles";

const TableHead = ({ children }) => (
  <TableHeadContainer>{children}</TableHeadContainer>
);

TableHead.propTypes = {
  children: PropTypes.node,
};

TableHead.defaultProps = {
  children: null,
};

export default TableHead;
