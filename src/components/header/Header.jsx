import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      {/* burger menu icon on left in
    bootstrap */}

      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="ml-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown" />
            <Nav.Link href="/">Notifications</Nav.Link>
            <Button variant="primary">$ New</Button>
          </Nav>
          <Navbar.Brand href="/">Bank App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
