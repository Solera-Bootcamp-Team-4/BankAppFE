import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
import Personal from "./components/personal/Personal";
import Settings from "./components/userSettings/UserSettings";
// import LoginUser from "./pages/LoginUser";
import Header from './components/header/Header';
import BankAccounts from './components/bankAccounts/BankAccounts';
import TransactionDetail from './components/transactionDetail/TransactionDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Change to the component you are developing */}
          <Route path="/" element={<Header />} />
          {/* <Route path="Signup" element={<Signup />} /> */}
          {/* <Route path="LoginUser" element={<LoginUser />} /> */}
          <Route path="bankAccounts" element={<BankAccounts />} />
          <Route path="personal" element={<Personal />} />
          <Route path="transaction/id" element={<TransactionDetail />} />
          <Route path="user/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
