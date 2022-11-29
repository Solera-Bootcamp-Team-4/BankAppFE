import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function PersonalItem(props) {
    const firstName = props.firstName;
    const lastName = props.lastName;
    const userName = props.userName;
    const userPic = props.userPic;
    const balance = props.balance;
    const List = props.transactions;

    let listId=[];
    let listAmmount=[];
    let listFrom=[];
    let listTo=[];
    let listDate=[];

    List.forEach(element => {
      listId.push(
        <div className="insideDiv" key={element.id}>
        {element.id}
        </div>)
      listAmmount.push(
          <div className="insideDiv" key={element.id}>
          {element.ammount}
          </div>)
      listFrom.push(      
          <div className="insideDiv" key={element.id}>
          {element.from}
          </div>)
      listTo.push(
        <div className="insideDiv" key={element.id}>
        {element.to}
        </div>)
      listDate.push(
        <div className="insideDiv" key={element.id}>
        {element.date}
        </div>) 
      });


  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>{listAmmount}</div>
          </Col>
          <Col>
            <h3>-$255</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}


// let transactionsMade ={};

//     test.transactions.forEach(element => {
//       transactionsMade={
//         id: element.id,
//         ammount: element.ammount,
//         from: element.from,
//         to: element.to,
//         date: element.date,       
//       }
//       });