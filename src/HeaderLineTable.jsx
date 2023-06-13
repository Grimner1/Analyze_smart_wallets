import React from "react";
import HeaderCellTable from "./HeaderCellTable";
import propTypes from "prop-types";

const HeaderLineTable = ({ line, handleChangeInputField, sort }) => {
  const entries = Object.values(line);

  return (
    <thead>
      <tr>
        {entries.map((cell, cellIndex) => (
          <HeaderCellTable
            key={cellIndex}
            cell={cell}
            handleChangeInputField={handleChangeInputField}
            fieldName={line[cellIndex]}
            sort={sort}
          />
        ))}
      </tr>
    </thead>
  );
};

export default HeaderLineTable;

HeaderLineTable.propTypes = {
  line: propTypes.array.isRequired,
  handleChangeInputField: propTypes.func.isRequired,
  sort: propTypes.func.isRequired,
};
