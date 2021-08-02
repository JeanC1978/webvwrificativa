import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { CustomModal } from "./Modal";
import { Input } from "./Input";
import { ButtonBlack } from "./ButtonBlack";

import Logo from "../public/images/blog/logo-verificativa.png";
import ExitIcon from "../public/images/pages/exit-icon.svg";
import PointLeft from "../public/images/page-seleccion/point.svg";
import PointRight from "../public/images/page-seleccion/point-right.svg";

export const ModalDemo = ({ ...props }) => {
  const [isSuccess, setIsSucces] = useState(false);

  const successForm =
    <h1>Genial, tu solicitud se realizo con éxito</h1>

  const showForm =
    <div className="demo-modal__content">
      <div className="demo-modal__content__title">
        <div className="demo-modal__content__title__point">
          <Image src={PointLeft} />
        </div>
        <div className="demo-modal__content__title__text">
          <h1>Solicita una demo</h1>
        </div>
        <div className="demo-modal__content__title__point">
          <Image src={PointRight} />
        </div>
      </div>
      <div className="demo-modal__content__form">
        <div className="demo-modal__content__form__inline">
          <p>Hola, mi nombre es</p>
          <Input placeholder="Ingresa tu nombre" />
          <p>, actualmente trabajo en</p>
          <Input placeholder="Indica tu empresa actual" />
        </div>
        <div className="demo-modal__content__form__inline">
          <p>y mi cargo es de </p>
          <Input placeholder="Indica tu cargo actual" />
          <p>, me gustaría recibir una demo a</p>
        </div>
        <div className="demo-modal__content__form__inline">
          <p>mi correo corporativo </p>
          <Input placeholder="Ingresa tu email" />
          <p>y este es mu numero telefonico</p>
          <Input placeholder="Ingresa tu telefono" />
        </div>
        <div className="demo-modal__content__form__button">
          <ButtonBlack>Enviar datos para solicitar demo</ButtonBlack>
        </div>
      </div>
    </div>

  // <Modal.Body>
  //   <Image src={logo} />
  //   <div className="modalBody-detalle">
  //     <h2>Solicita una demo</h2>
  //     <div>
  //       <label for="">Hola, mi nombre es</label>
  //       <input type="text" placeholder="ingresa tu nombre" />
  //     </div>

  //     <div>
  //       <label for="">,actualmete trabajo en</label>
  //       <input type="text" placeholder="indica tu empresa actual" />
  //     </div>

  //     <div>
  //       <label for="">y mi cargo es de</label>
  //       <input type="text" placeholder="indica tu cargo actual" />
  //     </div>

  //     <div>
  //       <label for="" className="email-text">
  //         , me gustaria recibir una demo a mi correo corporativo
  //       </label>
  //       <input type="text" placeholder="ingresa tu email" className="email" />
  //     </div>

  //     <div>
  //       <label for="">y este es mi numero telefonico</label>
  //       <input type="text" placeholder="ingresa tu telefono" />
  //     </div>
  //     <input
  //       type="submit"
  //       value="Enviar datos para solicitar demo"
  //       className="btn-modal-detalle"
  //     />
  //   </div>
  // </Modal.Body>



  return (
    <CustomModal
      dialogClassName="modal-fullscreen"
      {...props}
    >
      <Modal.Body>
        <div className="demo-modal">
          <div className="demo-modal__header">
            <Image src={Logo} />
            <Image src={ExitIcon} onClick={props.handleClose} />
          </div>
          {
            isSuccess ?
              successForm : showForm
          }
        </div>
      </Modal.Body>
    </CustomModal>
  );
};

