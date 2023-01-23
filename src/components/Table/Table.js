import React from "react";
import PropTypes from "prop-types";

import TableHead from "./components/TableHead/TableHead";
import TableRow from "./components/TableRow/TableRow";
import TableCell from "./components/TableCell/TableCell";
import TableBody from "./components/TableBody/TableBody";

import { TableContainer } from "./Table.styles";

const Table = ({ children }) => <TableContainer>{children}</TableContainer>;

Table.propTypes = {
  children: PropTypes.node,
};

export { TableHead, TableRow, TableCell, TableBody };

export default Table;
