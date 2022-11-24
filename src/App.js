import './App.css';
import SideBar from './components/SideBar/SideBar';
//import signUp component
import SignUp from './components/signUp/signUp.jsx';

function App() {
  
  let test = {
    userName: "ntaquelim",
    firstName: "Nuno",
    lastName: "Taquelim",
    balance: 547.48,
    userPic: "PICTURE",
   }
  
  return (
    //signUp component
    //<SignUp />
    <SideBar {...test}/>
  );
}

export default App;
