import './Buttons.css';
import Button from 'react-bootstrap/Button';
import { Col, Container } from 'react-bootstrap';


function ButtonNotifications(){
    return(
        <Container>
            <Col></Col>
            <Col><Button variant="outline-light">Notifications</Button></Col>
        </Container>
    );
}

export default ButtonNotifications;