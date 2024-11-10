import { useEffect } from "react";
import Table from "@components/Table/Table";

const Tables = () => {
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
    { field: "status", header: "status", align: "center" },
    { field: "actions", header: "actions", align: "center" },
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
