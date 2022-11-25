import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SideBar from './components/SideBar/SideBar';
import Signup from "./pages/Signup";
import Personal from "./components/personal/Personal";
import Settings from "./components/userSettings/UserSettings";
import Transaction from "./pages/Transaction";
import LoginUser from "./pages/LoginUser";
import Header from './components/header/Header';
import BankAccounts from './components/bankAccounts/BankAccounts';

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
          <Route path="/" element={<Header />} />
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="Signup" element={<Signup />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="bankAccounts" element={<BankAccounts />} />
          <Route path="personal" element={<Personal />} />
          <Route path="user/settings" element={<Settings />} />
          <Route path="Transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
      
    {/*<SideBar {...test}/>*/}
    </>
    
  );
}

export default App;
