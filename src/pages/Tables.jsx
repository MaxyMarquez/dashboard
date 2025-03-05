import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@components/Table/Table";
import Button from "@components/Button/Button";
import Dropdown from "@components/Dropdown/Dropdown";
import { getAllEmployees } from "@store/slices/employeesSlice";
import Modal from "@components/Modal/Modal";
import ModalBody from "@components/Modal/ModalBody";
import Input from "@components/Input/Input";
import ModalHeader from "@components/Modal/ModalHeader";
import ModalFooter from "@components/Modal/ModalFooter";
import axios from "axios";
import EditIcon from "@assets/icons/EditIcon";

const Tables = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees)
  console.log(employees);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: "", position: "", department: ""
  });

  useEffect(() => {
    document.title = "Dashboard - Tables";

    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target

    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
      const { data } = await axios.post("/employees",
        {
          name: dataForm.name,
          position: dataForm.position,
          department: dataForm.department,
        }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (data) {
        dispatch(getAllEmployees())
        setOpenModal(false)
      }

    } catch (error) {
      console.error(error);

    }
  }

  const columns = [
    {
      field: "name",
      header: "Nombre",
    },
    { field: "position", header: "Posición" },
    { field: "department", header: "Departamento" },
    { field: "evaluation", header: "Evaluación" },

    {
      field: "actions",
      header: "actions",

      cell: (row) => <Button onClick={() => setOpenEdit(true)}><EditIcon style={{ width: "20px", height: "20px", fill: "var(--content-primary)" }} /></Button>,
    },
  ];

  const rows = employees?.map(employee => {
    return {
      name: employee.name,
      position: employee.position,
      department: employee.department
    }
  });

  return (
    <>
      <Table columns={columns} rows={rows} onClick={() => setOpenModal(true)} title="Empleados" />


      {/* Modal Create Employee */}
      <Modal open={openModal} close={handleCloseModal}>
        <ModalHeader>Agregar Empleado</ModalHeader>
        <ModalBody>
          <form style={{ display: "grid", gap: "1rem" }} >
            <Input name="name" label="Nombre" onChange={handleFormChange} value={dataForm.name} />
            <Input name="position" label="Posición" onChange={handleFormChange} value={dataForm.position} />
            <Input name="department" label="Departamento" onChange={handleFormChange} value={dataForm.department} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" onClick={handleSubmit}>Agregar</Button>
          <Button type="button" onClick={() => setOpenModal(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal Edit Employee */}
      <Modal open={openEdit} close={() => setOpenEdit(false)}>

      </Modal>
    </>
  );
};

export default Tables;
