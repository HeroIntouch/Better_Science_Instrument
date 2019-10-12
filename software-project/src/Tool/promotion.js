import React from 'react';
import { Button, Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';
import Plus from './Plus-PNG-Image.png';


export default class Example extends React.Component {
 

  render() {
    return (
    <div>
      <br></br>
        <h3> Promotion </h3>
     <div  style = {{padding: 30}}>
     <Button  outline color="secondary" style = {{height: 100 , width: 150}} >

      <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
  
  
      </Button>



           {/* <Card>
         <CardBody>
             <CardTitle>

             <Button close />

          </CardTitle>
          <CardText>Default close icon</CardText>
         </CardBody>
       </Card> */}
     </div> 

     </div>   
     );
  }
}