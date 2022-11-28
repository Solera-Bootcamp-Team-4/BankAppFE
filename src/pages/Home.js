import SideBar from "../components/sideBar/SideBar"
import UserSettings from "../components/userSettings/UserSettings";
import "./style.css"

const Home = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv"><UserSettings{...props}/></div>
        </div>
    );
}

export default Home;

