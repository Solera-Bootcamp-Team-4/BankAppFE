import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Header from '../header/Header';

export default function UserSettings() {
  return (
    <>
      <Header />

      {/* Add top margin to whole container TBD */}
      <Container className="ms-auto" fluid="md">
        <Row>
          <Col xs={7}>
            <h1>My Account</h1>
            <Image
              src="https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2020/02/19165748/Bplans-Headers-2021-41.jpg"
              fluid
            ></Image>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
