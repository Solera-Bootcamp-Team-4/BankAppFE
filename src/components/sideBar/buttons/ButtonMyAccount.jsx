import './Buttons.css';
import Button from 'react-bootstrap/Button';

function ButtonMyAccount(){
    return(
        <Button variant="primary" className='Buttons' href="/Transaction">My Account</Button>
    );
}

export default ButtonMyAccount;