import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export const TableBodyContainer = styled.tbody``;

const TableBody = ({ children }) => (
  <TableBodyContainer>{children}</TableBodyContainer>
);

TableBody.propTypes = {
  children: PropTypes.node,
};

TableBody.defaultProps = {
  children: null,
};

export default TableBody;
