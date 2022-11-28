import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Header from '../header/Header';

export default function UserSettings(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const userEmail = props.userEmail;
  const userPassword = props.userPassword;
 

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
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label for="firstName">First name</Form.Label>
                <Form.Control type="text" placeholder={firstName} name="firstName"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                 <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder={lastName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder={userEmail} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder={userPassword} />
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
