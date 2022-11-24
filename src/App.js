import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Bankaccounts from "./pages/Bankaccounts";
import Personal from "./pages/Personal";
import Settings from "./pages/Settings";
import Transaction from "./pages/Transaction";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Signup" element={<Signup />} />
          <Route path="LoginUser" element={<LoginUser />} />
          <Route path="Bankaccounts" element={<Bankaccounts />} />
          <Route path="Personal" element={<Personal />} />
          <Route path="user/Settings" element={<Settings />} />
          <Route path="Transaction" element={<Transaction />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
