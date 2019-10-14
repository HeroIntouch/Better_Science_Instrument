import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import './Tool.css'

class editMenu extends Component {
  render(){
    let color = this.props.bgcolor;
    return (
      <center>
        <Button color={color} className="button">Homepage</Button>
        <Button color={color} className="button">Product</Button>
        <Button color={color} className="button">User</Button>
        <Button color={color} className="button">Theme</Button>
      </center>
    );
  }
}

export default editMenu;
