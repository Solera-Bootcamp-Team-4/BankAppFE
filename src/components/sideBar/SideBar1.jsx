import './SideBar.css';
import UserInfo1 from './userInfo/UserInfo1';
import ButtonHome1 from './buttons/ButtonHome1';
import ButtonMyAccount from './buttons/ButtonMyAccount';
import ButtonBankAccounts from './buttons/ButtonBankAccounts';
import ButtonNotifications from './buttons/ButtonNotifications';
import ButtonLogout from './buttons/ButtonLogout';
import BalanceInfo1 from './balanceInfo/BalanceInfo1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function SideBar1(props){
    const firstName = props.firstName;
    const lastName = props.lastName;
    const userName = props.userName;
    const userPic = props.userPic;
    const balance = props.balance;
    




    return(
        <Container className="sideContainer">
        <Row className='sideRow'>
            <UserInfo1 fullName={firstName +' '+ lastName} userName={userName} userPic={userPic}/>
        </Row>
        <Row className='sideRow'>
           <BalanceInfo1 balance={balance}/>
        </Row>
        <Row className='sideRow'>
            <ButtonHome1 />
            <ButtonMyAccount />
            <ButtonBankAccounts />
            <ButtonNotifications />
            <ButtonLogout />
        </Row>
        </Container>
      );
}
export default SideBar1;