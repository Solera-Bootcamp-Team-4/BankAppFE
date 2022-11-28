import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SideBar from './components/sideBar/SideBar';
import SignUpForm from "./components/signUp/SignUpForm";
import Settings from "./components/Settings/Settings";
import Transaction from "./pages/Transaction";
import LoginUser from "./components/Login/LoginUser";
import Header from './components/header/Header';
import BankAccount from './pages/BankAccount';
import UserSettings from './components/userSettings/UserSettings';
import Home from './pages/Home';

function App() {
  const localEmail=localStorage.getItem("email")
  const lastlocalName=localStorage.getItem("lname")
  const firstlocalName=localStorage.getItem("fname")
  let test = {
    userName: localEmail,
    firstName: firstlocalName,
    lastName: lastlocalName,
    balance: 547.48,
    userPic: "PICTURE",
    userEmail: "nuno.taquelim@solera.com",
    userPassword: "123"
   }

    
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Change to the component you are developing */}
          <Route path="Home" element={<Home {...test}/>} />
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="SignUpForm" element={<SignUpForm />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="BankAccount" element={<BankAccount{...test}/>} />
          {/* <Route path="personal" element={} /> */}
          <Route path="user/settings" element={<Settings />} />
          <Route path="Transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
