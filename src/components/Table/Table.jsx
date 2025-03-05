import { useState } from "react";
import Button from "@components/Button/Button";

import PlayIcon from "@assets/icons/PlayIcon";

import "./Table.css";
import { useEffect } from "react";

const Table = ({ columns, rows, title, onClick }) => {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  console.log(rows);

  const data = rows?.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(name.toLowerCase())
    )
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentRows = data?.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(data?.length / entriesPerPage);

  return (
    <div className="table__container">
      <div className="table__nav">
        <h2>{title}</h2>
        <div className="table__nav-right">
          <Button onClick={onClick}>Agregar</Button>
          <input
            type="text"
            className="table__search"
            placeholder="Search..."
            onChange={(e) => {
              setName(e.target.value);
              setCurrentPage(1);
            }}
          />
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
                    className={`table__cell table__cell--header ${column.align || ""
                      }`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table__body">
              {currentRows?.map((row, rowIndex) => (
                <tr key={rowIndex} className="table__row">
                  {columns.map((column) => (
                    <td
                      key={column.field}
                      className={`table__cell ${column.className || ""} ${column.align || ""
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={setCurrentPage}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const [inputValue, setInputValue] = useState(currentPage);

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const pageNumber = parseInt(value, 10);

    // Asegurarse de que el número esté dentro de los límites
    if (!isNaN(pageNumber)) {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setInputValue(pageNumber);
        paginate(pageNumber);
      } else if (pageNumber < 1) {
        setInputValue(1);
        paginate(1);
      } else if (pageNumber > totalPages) {
        setInputValue(totalPages);
        paginate(totalPages);
      }
    }
  };

  return (
    <div className="table__pagination">
      <Button
        variant="circle"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PlayIcon className="icon__prev" />
      </Button>

      <div className="table__pagination--pages">
        <input
          className="table__pagination--input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          max={totalPages}
          min={1}
        />
        <span> / {totalPages}</span>
      </div>

      <Button
        variant="circle"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <PlayIcon className="icon__next" />
      </Button>
    </div>
  );
};

export default Table;
