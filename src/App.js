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
  let transaction1 = {id: 1 , ammount: 400, from: "Tony", to: {firstlocalName}, date: "27/11/2022"}
  let transaction2 = {id: 2 , ammount: 350, from: {firstlocalName}, to: "Tony", date: "25/10/2022"}
  let transaction3 = {id: 3 , ammount: 1500, from: "Andre", to: {firstlocalName}, date: "29/9/2022"}

  let test = {
    userName: localEmail,
    firstName: firstlocalName,
    lastName: lastlocalName,
    balance: 547.48,
    userPic: "PICTURE",
    userEmail: localEmail,
    userPassword: "123",
    transactions: [transaction1, transaction2, transaction3]
    }
   


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Change to the component you are developing */}
          
          <Route path="/" element={<Layout />} /> 
          <Route path="Home" element={<Home {...test}/>} />
          <Route path="SignUpForm" element={<SignUpForm />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="BankAccount" element={<BankAccount {...test}/>} />
          {/* <Route path="personal" element={} /> */}
          <Route path="user/settings" element={<Settings {...test}/>} />
          <Route path="Transaction" element={<Transaction {...test}/>} />
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
