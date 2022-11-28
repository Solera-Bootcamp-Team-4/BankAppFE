import './SignUpForm.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const fname=useRef()
  const lname=useRef()
  const email=useRef()
  const password=useRef()

  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")
  const lastlocalName=localStorage.getItem("lname")
  const firstlocalName=localStorage.getItem("fname")

  const handleClick=()=>{
    if(email.current.value&&password.current.value)
   {
     localStorage.setItem("fname",fname.current.value)
     localStorage.setItem("lname",lname.current.value)
     localStorage.setItem("email",email.current.value)
     localStorage.setItem("password",password.current.value)
     localStorage.setItem("signUp",email.current.value)
     alert("Account created successfully!!")
     navigate('/Home');
     window.location.reload()
   }
}

   


    return  (
      <Container>
      <Row className="header">
      <Col>Real World App</Col>
        <Col>
        <Button variant="primary" href="/">Home</Button>
        <Button variant="primary" href="/LoginUser">Login</Button>
        <Button variant="primary" href="/SignUpForm">SignUp</Button>
        </Col>
      </Row>
    <Row>
    <div className="Auth-form-container">
      <form className="Auth-form" >
      <div className="Auth-form-content">
      <h3 className="Auth-form-title">SignUp</h3>
        <div className="form-group mt-3">
      <FloatingLabel controlId="floatingInput" label="First Name*" className="mb-3">
      <Form.Control type="text" placeholder="First Name*" ref={fname} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Last Name*">
        <Form.Control type="text" placeholder="Last Name*" ref={lname} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email*">
        <Form.Control type="text" placeholder="Email*" ref={email} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password*">
        <Form.Control type="password" placeholder="Password" ref={password} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Confirm Password*">
        <Form.Control type="password" placeholder="Confirm Password*" />
      </FloatingLabel>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  </Row>
  </Container>
   );
    }
  export default SignUpForm;
