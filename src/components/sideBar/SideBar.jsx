import './SideBar.css';
import UserInfo from './userInfo/UserInfo';
import ButtonHome from './buttons/ButtonHome';
import ButtonMyAccount from './buttons/ButtonMyAccount';
import ButtonBankAccounts from './buttons/ButtonBankAccounts';
import ButtonNotifications from './buttons/ButtonNotifications';
import ButtonLogout from './buttons/ButtonLogout';
import BalanceInfo from './balanceInfo/BalanceInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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