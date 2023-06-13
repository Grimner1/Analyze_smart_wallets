import React from "react";
import HeaderLineTable from "./HeaderLineTable";
import BodyLineTable from "./BodyLineTable";
import propTypes from "prop-types";

const Table = ({ file, handleChangeInputField, header, sort }) => {
  return (
    <table>
      <HeaderLineTable
        line={header}
        handleChangeInputField={handleChangeInputField}
        sort={sort}
      />
      {file.map((line, lineIndex) => (
        <BodyLineTable key={lineIndex} line={line} lineIndex={lineIndex} />
      ))}
    </table>
  );
};

export default Table;

Table.propTypes = {
  file: propTypes.array.isRequired,
  handleChangeInputField: propTypes.func.isRequired,
  header: propTypes.array.isRequired,
  sort: propTypes.func.isRequired,
};
