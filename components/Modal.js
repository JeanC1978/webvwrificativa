import React from 'react'
import Modal from 'react-bootstrap/Modal'
//navbar.scss

export function CustomModal({ children, showModal, handleClose, ...restProps }) {


    return (
        <>
            {
                showModal &&
                <div className="triangulo"></div>
            }
            <Modal show={showModal} onHide={handleClose} {...restProps}>
                {children}
            </Modal>
        </>
    )
}
