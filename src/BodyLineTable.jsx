import React from "react";
import BodyCellTable from "./BodyCellTable";
import propTypes from "prop-types";

const BodyLineTable = ({ line, lineIndex }) => {
  const keys = Object.keys(line);
  const entries = Object.values(line);

  return (
    <tbody>
      <tr>
        {entries.map((cell, cellIndex) => (
          <BodyCellTable
            key={`${lineIndex}${cellIndex}`}
            cell={cell}
            id={`${lineIndex}${cellIndex}`}
          />
        ))}
      </tr>
    </tbody>
  );
};

export default BodyLineTable;

BodyLineTable.propTypes = {
  line: propTypes.object,
  lineIndex: propTypes.number,
};
