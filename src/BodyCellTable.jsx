import React from "react";
import propTypes from "prop-types";

const BodyCellTable = ({ cell, id }) => {
  return <td data-id={id}>{cell}</td>;
};

export default BodyCellTable;

BodyCellTable.propTypes = {
  cell: propTypes.string,
  id: propTypes.string,
};
