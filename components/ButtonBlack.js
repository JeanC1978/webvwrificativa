import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'


export function ButtonBlack({ children, ...props }) {
    return (
        <>
            <Button variant="primary" className="button-black" {...props}>{children}</Button>

        </>
    )
}
