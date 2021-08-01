import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { CustomModal } from "./Modal";
import logo from "../public/images/blog/logo-verificativa.png";

const bodyModal = () => (
  <Modal.Body>
    <Image src={logo} />
    <div className="modalBody-detalle">
      <h2>Solicita una demo</h2>
      <div>
        <label for="">Hola, mi nombre es</label>
        <input type="text" placeholder="ingresa tu nombre" />
      </div>

      <div>
        <label for="">,actualmete trabajo en</label>
        <input type="text" placeholder="indica tu empresa actual" />
      </div>

      <div>
        <label for="">y mi cargo es de</label>
        <input type="text" placeholder="indica tu cargo actual" />
      </div>

      <div>
        <label for="" className="email-text">
          , me gustaria recibir una demo a mi correo corporativo
        </label>
        <input type="text" placeholder="ingresa tu email" className="email" />
      </div>

      <div>
        <label for="">y este es mi numero telefonico</label>
        <input type="text" placeholder="ingresa tu telefono" />
      </div>
      <input
        type="submit"
        value="Enviar datos para solicitar demo"
        className="btn-modal-detalle"
      />
    </div>
  </Modal.Body>
);

const SolicitaDemo = (showModal) => {
  return (
    <CustomModal
      showModal={showModal}
      dialogClassName="modal-lg"
      contentClassName="menu-modal"
      handleClose={() => setShowModal(false)}
    >
      {bodyModal()}
    </CustomModal>
  );
};

export default SolicitaDemo;
