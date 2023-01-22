import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export const TableHeadContainer = styled.thead``;

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
