import SideBar from "../components/sideBar/SideBar"
import "./Home.css"

const Home = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar{...data}/></div>
            <div className="contentDiv">
            </div>
        </div>
    );
}

export default Home;



// USER DETAILS