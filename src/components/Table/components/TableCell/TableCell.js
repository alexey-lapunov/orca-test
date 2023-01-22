import React from "react";
import PropTypes from "prop-types";

import { TableCellContainer } from "./TableCell.styles";

const TableCell = ({ children, colSpan, className }) => (
  <TableCellContainer colSpan={colSpan} className={className}>{children}</TableCellContainer>
);

TableCell.propTypes = {
  children: PropTypes.node,
};

TableCell.defaultProps = {
  children: null,
};

export default TableCell;
