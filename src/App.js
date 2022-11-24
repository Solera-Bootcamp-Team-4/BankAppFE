import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from ".import SideBar from './components/SideBar/SideBar';
/pages/Layout";
import Signup from "./pages/Signup";
import Bankaccounts from "./pages/Bankaccounts";
import Personal from "./pages/Personal";
import Settings from "./pages/Settings";
import Transaction from "./pages/Transaction";
import LoginUser from "./pages/LoginUser";
import Header from './components/header/Header';

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
          //Change to the component you are developing
          <Route path="/" element={<Header />} />
          {/* <Route path="/" element={<Layout />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="Bankaccounts" element={<Bankaccounts />} />
          <Route path="Personal" element={<Personal />} />
          //<Route path="user/Settings" element={<Settings />} />
          <Route path="Transaction" element={<Transaction />} /> */}
        </Routes>
      </BrowserRouter>
    </>
    <SideBar {...test}/>
  );
}

export default App;
