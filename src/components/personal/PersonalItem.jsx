import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function PersonalItem() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Arely Kertzmann paid Edgar Johns</h3>
          </Col>
          <Col>
            <h3>-$255</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
