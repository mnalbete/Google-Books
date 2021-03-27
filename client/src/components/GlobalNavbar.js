import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

function GlobalNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Book Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto primary">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}
export default GlobalNavbar;
