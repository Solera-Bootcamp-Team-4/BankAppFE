import './Buttons.css';
import Button from 'react-bootstrap/Button';

function ButtonHome(){
    return(
        <Button variant="primary" className='Buttons' href="/Home">Home</Button>
    );
}

export default ButtonHome;