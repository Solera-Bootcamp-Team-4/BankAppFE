import SideBar1 from "../components/sideBar/SideBar1"
import "./Home.css"

const Home = (props) => {
    let data = {...props};

    return(
        <div className="mainApp">
            <div className="sidebarDiv"><SideBar1{...data}/></div>
            <div className="contentDiv">
            </div>
        </div>
    );
}

export default Home;



// USER DETAILS