import React from "react";
import PropTypes from "prop-types";

import { TableRowContainer } from "./TableRow.styles";

const TableRow = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}) => (
  <TableRowContainer
    className={className}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </TableRowContainer>
);

TableRow.propTypes = {
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node,
};

export default TableRow;
