
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Layout.css";

const Layout = () => {

   

  return (
    <Container>
      <Row className="header">
      <Col>Real World App</Col>
        <Col>
        <Button variant="primary" href="/">Home</Button>
        <Button variant="primary" href="/LoginUser">Login</Button>
        <Button variant="primary" href="/SignUpForm">SignUp</Button>
        </Col>
      </Row>
      <Row className="BigDiv">
        Welcome to our Bank App
      </Row>

    </Container>
  )
};

export default Layout;
{/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup ">Signup</Link>
          </li>
          <li>
            <Link to="/LoginUser ">LogIn</Link>
          </li>
                <li>
             <Link to="/Bankaccounts ">Bankaccounts</Link>
          </li>

                   <li>
            <Link to="/user/Settings ">Settings</Link>
          </li>

        </ul> */}