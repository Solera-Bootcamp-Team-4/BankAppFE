import './LoginUser.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();


  const submitHandler = () => {
    navigate('/');
  };
    return     <div className="Auth-form-container">
    <form onSubmit={submitHandler} className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            pattern="[a-z.]*[@]solera.com"
            required="required"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            required="required"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div>
  };
  
  export default LoginUser;