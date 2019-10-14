import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';


class editMenu extends Component {
  render(){
    let color = this.props.bgcolor;
    var buttonStyle = {
      margin:"20px",
      padding:"10px 50px"
    }
    return (
      <div>
        <center>
          <Button color={color} style = {buttonStyle}>Homepage</Button>
          <Button color={color} style = {buttonStyle}>Product</Button>
          <Button color={color} style = {buttonStyle}>User</Button>
          <Button color={color} style = {buttonStyle}>Theme</Button>
        </center>
      </div>
    );
  }
}

export default editMenu;
