import React from 'react';
import { Button, Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';
import Plus from './Plus-PNG-Image.png';
import Pro from './5b.gif';


export default class Example extends React.Component {
 

  render() {
    return (
    <div>
      <br></br>
        <h3> Promotion </h3>
     <div style = {{padding: 30}}>
     <Button  outline color="secondary" style = {{height: 100 , width: 150}} >

      <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 

      </Button>
      <Card style = {{height: 100 , width: 150}}>
        <CardBody>
          <CardTitle>

            <Button close />

          </CardTitle>
          <img src= {Pro} alt = "Pro" width="80" height="60" align="absmiddle" /> 
        </CardBody>
      </Card>
     </div> 

     </div>   
     );
  }
}