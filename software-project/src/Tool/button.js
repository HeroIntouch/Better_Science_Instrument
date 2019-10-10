import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>      Promotion </h1>
        <Button outline color="secondary" block style = {{height: 400}}>edit</Button>
        
      </div>
    );
  }
}