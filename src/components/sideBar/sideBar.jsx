import './sideBar.css';
import userInfo from './UserInfo/userInfo';
import buttonHome from './Buttons/buttonHome';
import ButtonMyAccount from './Buttons/ButtonMyAccount';
import ButtonBankAccounts from './Buttons/ButtonBankAccounts';
import ButtonNotifications from './Buttons/ButtonNotifications';
import ButtonLogout from './Buttons/ButtonLogout';
import balanceInfo from './BalanceInfo/balanceInfo';
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