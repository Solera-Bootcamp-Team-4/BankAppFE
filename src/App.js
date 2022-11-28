import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SideBar from './components/sideBar/SideBar';
import SignUpForm from "./components/signUp/SignUpForm";
import Personal from "./pages/Personal";
import Settings from "./components/Settings/Settings";
import Transaction from "./pages/Transaction";
import LoginUser from "./components/Login/LoginUser";
import Header from './components/header/Header';
import BankAccounts from './components/bankAccounts/BankAccounts';
import UserSettings from './components/userSettings/UserSettings';
import Home from './pages/Home';

function App() {
  
  let test = {
    userName: "ntaquelim",
    firstName: "Nuno",
    lastName: "Taquelim",
    balance: 547.48,
    userPic: "PICTURE",
   }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Change to the component you are developing */}
           <Route path="/" element={<Home {...test}/>} />
          {/*<Route path="/" element={<Layout />} /> */}
          <Route path="SignUpForm" element={<SignUpForm />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="BankAccounts" element={<BankAccounts />} />
          <Route path="personal" element={<Personal />} />
          <Route path="user/settings" element={<Settings />} />
          <Route path="Transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
