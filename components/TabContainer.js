import React from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { ButtonBlack } from "./ButtonBlack";

//CSS: tab_container.scss
import ArrowRightIcon from "../public/images/pages/arrow-right.svg";

export function TabContainer({ children, navItems, buttonText = null, ...restProps }) {

    return (
        <Tab.Container {...restProps} >
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column" bsPrefix="nav-container">
                        {
                            navItems.map((item) => (
                                <Nav.Item key={item.id}>
                                    <Nav.Link eventKey={item.eventKey}>
                                        <div className="nav-item-text">
                                            {item.title}
                                            <Image src={ArrowRightIcon} />
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            ))
                        }
                        {
                            buttonText &&
                            <Button variant="primary" className="button-action">{buttonText}</Button>
                        }
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {children}
                    </Tab.Content>
                </Col>
                <Col sm={12}>
                    {
                        buttonText &&
                        <Button variant="primary" className="button-action button-movil">{buttonText}</Button>
                    }
                </Col>
            </Row>
        </Tab.Container>
    )
}
