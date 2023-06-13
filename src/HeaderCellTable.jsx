import React from "react";
import propTypes, { string } from "prop-types";

const HeaderCellTable = ({ cell, handleChangeInputField, fieldName, sort }) => {
  return (
    <th>
      <div className="headerCell">
        <input
          type="text"
          className="filterInput"
          onChange={(e) => handleChangeInputField(fieldName, e.target.value)}
        />
        {cell}
        <div className="filterPoinetr">
          <i className="up" onClick={() => sort(fieldName, true)}></i>
          <i className="down" onClick={() => sort(fieldName, false)}></i>
        </div>
      </div>
    </th>
  );
};

export default HeaderCellTable;

HeaderCellTable.propTypes = {
  handleChangeInputField: propTypes.func.isRequired,
  sort: propTypes.func.isRequired,
  cell: propTypes.string,
  fieldName: propTypes.string,
};
