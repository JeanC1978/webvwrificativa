import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export function TabsOurSolutions(props) {


    return (
        <Tabs defaultActiveKey="profile" id="outSolutions-tab" className="mb-3">
            <Tab eventKey="five" title="Home">
                <p>Hola mundo 1</p>
            </Tab>
            <Tab eventKey="consultiva" title="Profile">
                <p>Hola mundo 2</p>
            </Tab>
            <Tab eventKey="operativa" title="Contact">
                <p>Hola mundo 3</p>
            </Tab>
        </Tabs>
    )
}
