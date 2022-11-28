import './LoginUser.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const LoginUser = () => {

    const SubmitHandler = event =>{

    };


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
      <form className="Auth-form" onSubmit={SubmitHandler}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login</h3>
        <div className="form-group mt-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
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