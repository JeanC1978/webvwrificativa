import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { ModalDemo } from '../components/ModalDemo';

export function ButtonBlack({ children, withModal = null }) {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true)
    }

    return (
        <>
            <Button variant="primary" className="button-black" onClick={handleClick}>{children}</Button>
            {withModal &&
                <ModalDemo showModal={openModal} handleClose={() => setOpenModal(false)} />
            }
        </>
    )
}
