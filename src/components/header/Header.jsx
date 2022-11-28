import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { BsFillBellFill } from "react-icons/bs";


export default function Header() {
  return (
    <>
      {/* burger menu icon on left in
    bootstrap */}

      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="ml-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {/* NavDropdown children item */}
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/user/settings">
                My Account
              </NavDropdown.Item>
              <NavDropdown.Item href="/bankAccounts">
                Bank Accounts
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Notifications</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Notifications</Nav.Link>
            <Button variant="primary">$ New</Button>
          </Nav>
          <Navbar.Brand href="/">Bank App</Navbar.Brand>
          <Button variant="primary"><BsFillBellFill /><Badge bg="success">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
        </Container>
      </Navbar>
    </>
  );
}
