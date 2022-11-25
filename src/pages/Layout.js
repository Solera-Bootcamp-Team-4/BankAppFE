import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup ">Signup</Link>
          </li>
          <li>
            <Link to="/LoginUser ">LogIn</Link>
          </li>
                <li>
             <Link to="/Bankaccounts ">Bankaccounts</Link>
          </li>
          {/* <li> */}
            {/* <Link to="/Bankaccounts ">Bankaccounts</Link>
          </li>
          <li>
            <Link to="/Personal ">Personal</Link>
          </li>
 
          <li>
            <Link to="/Transaction ">Transaction</Link>
          </li> */}
                   <li>
            <Link to="/user/Settings ">Settings</Link>
          </li>
  
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
