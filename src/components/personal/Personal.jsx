import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Header from '../header/Header';

export default function Personal() {
  return (
    <>
      <Header />
      {/* TBD Tab to switch from 'Everyone', 'Friends' and 'Mine' */}
      <Container>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-date">
                Date:
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">All</Dropdown.Item>
                <Dropdown.Item href="">Maybe</Dropdown.Item>
                <Dropdown.Item href="">None</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-amount">
                Amount:
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">$0 - $1.000</Dropdown.Item>
                <Dropdown.Item href="">$1.000 - $10.000</Dropdown.Item>
                <Dropdown.Item href="">$10.000 - $100.000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <h1>Personal</h1>
        </Row>
        <Row>
          <h3>Everyone</h3>
        </Row>
      </Container>
    </>
  );
}
