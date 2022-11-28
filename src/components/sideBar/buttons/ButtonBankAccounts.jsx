import './Buttons.css';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import BankAccounts from '../../bankAccounts/BankAccounts';
import {Link, BankAccounts} from 'react-router-dom';
import * as ReactDOM from 'react-dom';




function ButtonBankAccounts(){

    const onClickHandler = () =>{
        let obj = ReactDOM.createRoot(document.getElementById('mainDiv'));
        const load = "BankAccounts();"
        obj.render(load);
    }

    return(
     <Button variant="primary" className='Buttons'>Bank Accounts</Button>
    );
}

export default ButtonBankAccounts;
{/* <Link to="/BankAccounts"> */}