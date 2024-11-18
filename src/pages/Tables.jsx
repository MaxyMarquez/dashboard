import { useEffect } from "react";
import Table from "@components/Table/Table";
import Button from "@components/Button/Button";
import Dropdown from "@components/Dropdown/Dropdown";
import { useState } from "react";

const Tables = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    document.title = "Dashboard - Tables";
  }, []);

  const columns = [
    { field: "id", header: "ID" },
    {
      field: "firstName",
      header: "User",
      cell: (row) => (
        <div>
          <div className="table__name">{`${row.firstName} ${row.lastName}`}</div>
          <div className="table__email">{row.email}</div>
        </div>
      ),
    },
    { field: "phone", header: "phone" },
    { field: "status", header: "status" },
    {
      field: "actions",
      header: "actions",

      cell: (row) => <Button>Edit</Button>,
    },
  ];

  const rows = [
    {
      id: 1,
      firstName: "Juan",
      lastName: "Pérez",
      email: "juan@example.com",
      phone: "00000000000",
    },
    {
      id: 2,
      firstName: "Ana",
      lastName: "García",
      email: "ana@example.com",
      phone: "00000000000",
    },
    {
      id: 3,
      firstName: "Luis",
      lastName: "Martínez",
      email: "luis@example.com",
      phone: "00000000000",
    },
    {
      id: 4,
      firstName: "María",
      lastName: "López",
      email: "maria@example.com",
      phone: "00000000000",
    },
  ];

  return (
    <>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Tables;
