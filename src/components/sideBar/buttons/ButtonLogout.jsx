import './Buttons.css';
import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';


function ButtonLogout(){
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("signUp")
        navigate('/');
    }
    return(
        <Button variant="primary" className='Buttons' onClick={logout}>Logout</Button>
    );
}

export default ButtonLogout;