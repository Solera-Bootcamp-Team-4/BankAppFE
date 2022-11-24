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
            <Link to="/Personal ">My Account</Link>
          </li>
          <li>
            <Link to="/Bankaccounts ">Bankaccounts</Link>
          </li>
          <li>
            <Link to="">Notifications</Link>
          </li>
          <li>
            <Link to=" ">Log Out</Link>
          </li>
  
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Button;
