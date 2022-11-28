import SideBar from "../components/sideBar/SideBar"
import BankAccounts from "../components/bankAccounts/BankAccounts";
import "./style.css"

const BankAccount = (props) =>{
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv"><BankAccounts{...data}/></div>
        </div>
    );
}

export default BankAccount;


