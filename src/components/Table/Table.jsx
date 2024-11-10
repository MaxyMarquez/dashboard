import { useState } from "react";
import Button from "@components/Button/Button";

import "./Table.css";

const Table = ({ columns, rows }) => {
  const [name, setName] = useState("");

  const data = rows?.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(name.toLowerCase())
    )
  );

  const entriesPerPage = (entrie) => {
    const arr = [];
    for (let i = 0; i < entrie; i++) {
      arr.push(data[i]);
    }
    return arr;
  };

  return (
    <div className="table__container">
      <div className="table__nav">
        <h2>Title</h2>
        <div className="table__nav-right">
          <input
            type="text"
            className="table__search"
            placeholder="Search..."
            onChange={(e) => setName(e.target.value)}
          />
          <Button>+</Button>
        </div>
      </div>
      {data ? (
        <div className="table">
          <table className="table__content">
            <thead className="table__header">
              <tr className="table__row">
                {columns.map((column) => (
                  <th
                    key={column.field}
                    className={`table__cell table__cell--header ${
                      column.align || ""
                    }`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table__body">
              {data?.map((row, rowIndex) => (
                <tr key={rowIndex} className="table__row">
                  {columns.map((column) => (
                    <td
                      key={column.field}
                      className={`table__cell ${column.className || ""} ${
                        column.align || ""
                      }`}
                    >
                      {column.cell ? column.cell(row) : row[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
