import Button from "@components/Button/Button";
import Modal from "@components/Modal/Modal";
import ModalBody from "@components/Modal/ModalBody";
import ModalFooter from "@components/Modal/ModalFooter";
import ModalHeader from "@components/Modal/ModalHeader";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.title = "Dashboard - Home";
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      Dashboard
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal open={open} close={handleCloseModal}>
        <ModalHeader>Titulo</ModalHeader>
        <ModalBody>Este es el cuerpo del mensaje</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    </div>
  );
};

export default Dashboard;
