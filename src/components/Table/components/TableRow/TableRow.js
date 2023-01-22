import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export const TableRowContainer = styled.tr``;

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

TableRow.defaultProps = {
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
  children: null,
};

export default TableRow;
