import './Buttons.css';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import BankAccounts from '../../bankAccounts/BankAccounts';
import {Link, BankAccounts} from 'react-router-dom';
import * as ReactDOM from 'react-dom';




function ButtonBankAccounts(){

   return(
     <Button variant="primary" className='Buttons' href="/BankAccount">Bank Accounts</Button>
    );
}

export default ButtonBankAccounts;
{/* <Link to="/BankAccounts"> */}