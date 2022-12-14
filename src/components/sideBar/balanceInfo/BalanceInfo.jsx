import './BalanceInfo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function BalanceInfo(props){
    
    const balance = props.balance;

    return(
        <Container className='balanceContainer'>
            <Row className='balanceContainer__balanceRow'>{balance}€</Row>
            <Row className='balanceContainer_infoRow'>Account Balance</Row>
        </Container>
    );
}
export default BalanceInfo;