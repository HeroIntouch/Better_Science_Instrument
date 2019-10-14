import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';

class editMenu extends Component {
  render(){
    var buttonStyle = {
      margin:"20px",
      padding:"10px 50px"
    }
    return (
      <div>
        <center>
          <Button color="secondary" style = {buttonStyle} href="/homepage">Homepage</Button>
          <Button color="secondary" style = {buttonStyle} href="/product">Product</Button>
          <Button color="secondary" style = {buttonStyle} href="/user">User</Button>
          <Button color="secondary" style = {buttonStyle} href="/">Theme</Button>
        </center>
      </div>
    );
  }
}

export default editMenu;
