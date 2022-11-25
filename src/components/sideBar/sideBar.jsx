import './sideBar.css';
import userInfo from './userInfo/userInfo';
import buttonHome from './buttons/buttonHome';
import ButtonMyAccount from './buttons/ButtonMyAccount';
import ButtonBankAccounts from './buttons/ButtonBankAccounts';
import ButtonNotifications from './buttons/ButtonNotifications';
import ButtonLogout from './buttons/ButtonLogout';
import balanceInfo from './balanceInfo/balanceInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function sideBar(props){
    const firstName = props.firstName;
    const lastName = props.lastName;
    const userName = props.userName;
    const userPic = props.userPic;
    const balance = props.balance;
    




    return(
        <Container className="sideContainer">
        <Row className='sideRow'>
            <userInfo fullName={firstName +' '+ lastName} userName={userName} userPic={userPic}/>
        </Row>
        <Row className='sideRow'>
           <balanceInfo balance={balance}/>
        </Row>
        <Row className='sideRow'>
            <buttonHome />
            <ButtonMyAccount />
            <ButtonBankAccounts />
            <ButtonNotifications />
            <ButtonLogout />
        </Row>
        </Container>
      );
}
export default sideBar;