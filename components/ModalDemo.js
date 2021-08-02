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
import CheckIcon from "../public/images/page-seleccion/check-black-icon.svg";

export const ModalDemo = ({ ...props }) => {
  const [isSuccess, setIsSucces] = useState(false);

  const handleClickSent = () => {
    setIsSucces(true)
  }

  const handleClickClose = () => {
    props.handleClose()
    setIsSucces(false)

  }

  const successForm =
    <div className="demo-modal__content">
      <div className="demo-modal__content__title">
        <div className="demo-modal__content__title__point">
          <Image src={PointLeft} />
        </div>
        <div className="demo-modal__content__title__point">
          <Image src={PointLeft} />
        </div>
      </div>
      <div className="demo-modal__content__msjSuccess">
        <Image src={CheckIcon} />
        <h1>Genial, tu solicitud se realizo con éxito</h1>
        <p>Te enviaremos un mensaje de confirmación a tu correo, para que accedas a tu demo.</p>
        <ButtonBlack onClick={handleClickClose}>Vamos a la página de inicio</ButtonBlack>
      </div>
    </div>

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
          <p>y este es mu numero telefónico</p>
          <Input placeholder="Ingresa tu teléfono" />
        </div>
        <div className="demo-modal__content__form__button">
          <ButtonBlack onClick={handleClickSent}>Enviar datos para solicitar demo</ButtonBlack>
        </div>
      </div>
    </div>

  return (
    <CustomModal
      dialogClassName="modal-fullscreen"
      {...props}
    >
      <Modal.Body>
        <div className="demo-modal">
          <div className="demo-modal__header">
            <Image src={Logo} />
            <Image src={ExitIcon} onClick={handleClickClose} />
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

