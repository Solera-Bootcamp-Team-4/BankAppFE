import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../header/Header';

export default function BankAccounts() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Bank Accounts</h1>
          </Col>
        </Row>
        {/* make a component out of this row */}
        <Row>
          <Col>
            <a href="/personal">
              <h3>O'Hara - Labadie Bank</h3>
            </a>
          </Col>
          <Col>
            <Button variant="primary">Create</Button>
            <Button variant="secondary">Delete</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
