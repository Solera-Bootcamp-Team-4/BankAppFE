import SideBar from "../components/sideBar/SideBar"
import Personal from "../components/personal/Personal";
import "./Home.css"

const Transaction = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv"><Personal{...props}/></div>
        </div>
    );
}

export default Transaction;