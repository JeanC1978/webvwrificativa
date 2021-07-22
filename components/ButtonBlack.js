import React from 'react'
import Button from 'react-bootstrap/Button'

export function ButtonBlack({ children }) {
    return (
        <Button variant="primary" className="button-black">{children}</Button>
    )
}
