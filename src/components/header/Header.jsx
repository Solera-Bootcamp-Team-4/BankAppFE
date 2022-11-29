import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { BsFillBellFill } from "react-icons/bs";
import { BsBorderWidth } from "react-icons/bs";
import './Header.css';
import React, { useState } from "react";


 

function Header(props) {

 
  return (
  <div className="headerDiv">
        <div className='hideDiv'>   <Button><BsBorderWidth/></Button>     </div>
        <div className='tittleDiv'><h1>Bank App</h1>   </div>
        <div className='notificationDiv'> <Button variant="primary"><BsFillBellFill /><Badge bg="success">9</Badge></Button>    </div>
      </div>
   );
}

export default Header;

{/* <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="ml-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {/* NavDropdown children item------ 
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
    */}