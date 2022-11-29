import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Header from '../header/Header';
import PersonalItem from './PersonalItem';

export default function Personal(props) {
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
                <Dropdown.Item href="">$0 - $100</Dropdown.Item>
                <Dropdown.Item href="">$100 - $500</Dropdown.Item>
                <Dropdown.Item href="">$500 - $1600</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <h5>Personal</h5>
          <PersonalItem {...props}/>
          <PersonalItem {...props}/>
          <PersonalItem {...props}/>
        </Row>
      </Container>
    </>
  );
}
