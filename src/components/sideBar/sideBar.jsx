import './SideBar.css';
import UserInfo from './UserInfo/UserInfo';
import ButtonHome from './Buttons/ButtonHome';
import ButtonMyAccount from './Buttons/ButtonMyAccount';
import ButtonBankAccounts from './Buttons/ButtonBankAccounts';
import ButtonNotifications from './Buttons/ButtonNotifications';
import ButtonLogout from './Buttons/ButtonLogout';
import BalanceInfo from './BalanceInfo/BalanceInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function SideBar(props){
    const firstName = props.firstName;
    const lastName = props.lastName;
    const userName = props.userName;
    const userPic = props.userPic;
    const balance = props.balance;
    




    return(
        <Container className="sideContainer">
        <Row className='sideRow'>
            <UserInfo fullName={firstName +' '+ lastName} userName={userName} userPic={userPic}/>
        </Row>
        <Row className='sideRow'>
           <BalanceInfo balance={balance}/>
        </Row>
        <Row className='sideRow'>
            <ButtonHome />
            <ButtonMyAccount />
            <ButtonBankAccounts />
            <ButtonNotifications />
            <ButtonLogout />
        </Row>
        </Container>
      );
}
export default SideBar;