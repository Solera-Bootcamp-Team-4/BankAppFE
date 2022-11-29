import './LoginUser.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';


const LoginUser = () => {
  const navigate = useNavigate();
  const fname=useRef()
  const lname=useRef()
  const email=useRef()
  const password=useRef()

  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")
  const localName=localStorage.getItem("name")
  const handleClick=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        alert("You are logged in")
        navigate('/Home');
    }else{
        alert("Please Enter valid Credential")
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
        <h3 className="Auth-form-title">Login</h3>
        <div className="form-group mt-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" ref={email} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" ref={password} />
      </FloatingLabel>
      </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" id="button-id" className="btn btn-primary" onClick={handleClick}>
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
  export default LoginUser;