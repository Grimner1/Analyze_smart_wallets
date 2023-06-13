import React from "react";
import { parseCSV, filterTable } from "./functions";
import Table from "./Table";
import { useState } from "react";

const Body = () => {
  const [files, setFile] = useState({
    file: [],
    header: [],
    fieldNameSort: "",
    sort: true,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const contents = event.target.result;
        const data = parseCSV(contents);
        data[0].shift();
        setFile({ file: data[0], header: data[1] });
      };
      reader.readAsText(file);
    }
  };

  const handleChangeInputField = (fieldName, inputValue) => {
    setFile({ ...files, [fieldName]: inputValue });
  };

  const handleChangeSortTable = (fieldName, sort) => {
    setFile({ ...files, fieldNameSort: fieldName, sort });
  };

  const afterFilterTable = filterTable(files);

  return (
    <>
      <h1>Analyze smart wallets</h1>
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
      </div>
      <Table
        file={afterFilterTable}
        handleChangeInputField={handleChangeInputField}
        header={files.header}
        sort={handleChangeSortTable}
      />
      <div className="table-container"></div>
      <script src="script.js"></script>
    </>
  );
};

export default Body;
