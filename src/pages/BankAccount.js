import SideBar from "../components/sideBar/SideBar"
import BankAccounts from "../components/bankAccounts/BankAccounts";
import "./Home.css"

const BankAccount = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv"><BankAccounts{...props}/></div>
        </div>
    );
}

export default BankAccount;


