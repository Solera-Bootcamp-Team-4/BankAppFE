import SideBar from "../components/sideBar/SideBar"
import Personal from "../components/personal/Personal";
import "./style.css"

const Transaction = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv"><Personal{...data}/></div>
        </div>
    );
}

export default Transaction;