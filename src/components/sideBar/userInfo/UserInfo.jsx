import './UserInfo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserInfo(props){
    
    const name = props.fullName;
    const userName = props.userName;
    const userPic = props.userPic;
    
        
    return(
    <Container className='userContainer'>
        <Col className="userCol">{userPic}</Col>
        <Col className="userCol">
            <Row className="userCol__rowName">{name}</Row>
            <Row className="userCol__rowUser">{userName}</Row>
        </Col>
    </Container>
);;
}
export default UserInfo;