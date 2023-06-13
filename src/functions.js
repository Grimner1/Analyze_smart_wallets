import propTypes from "prop-types";

export const parseCSV = (csv) => {
  const lines = csv.split("\n");
  const data = [];
  let keysObjects = [];
  lines.forEach((element, index) => {
    let line = element.trim();
    line = line.replace(/"/g, "");

    if (index == 0) {
      keysObjects = line.split(",");
    }

    if (line !== "") {
      const cells = line.split(",");
      const object = {};
      cells.map((el, i) => (object[keysObjects[i]] = cells[i]));

      data.push(object);
    }
  });

  return [data, keysObjects];
};

export const filterTable = (files) => {
  if (files.file.length !== 0) {
    let copyTable = [...files.file];

    const tabelKey = Object.keys(copyTable[0]);

    for (let i = 0; i < tabelKey.length; i++) {
      if (files[tabelKey[i]]) {
        copyTable = copyTable.filter((el) =>
          el[tabelKey[i]].includes(files[tabelKey[i]])
        );
      }
    }

    copyTable.sort((a, b) => {
      if (files.sort) {
        return a[files.fieldNameSort] - b[files.fieldNameSort];
      } else {
        return b[files.fieldNameSort] - a[files.fieldNameSort];
      }
    });

    return copyTable;
  }

  return [];
};

parseCSV.propTypes = {
  // csv: propTypes.file.isRequired,
};

filterTable.propTypes = {
  files: propTypes.array.isRequired,
};
