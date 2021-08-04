import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'


export function ButtonBlack({ children, size, ...props }) {
    return (
        <>
            <Button variant="primary" className={`button-black button-${size}`} {...props}>{children}</Button>
        </>
    )
}
