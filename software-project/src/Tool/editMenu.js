import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import './Tool.css'
import { Link } from 'react-router-dom';

class editMenu extends Component {
  render(){
    let color = this.props.bgcolor;
    return (
      <center>
        <Link to='/homepage'><Button color={color} className="button">Homepage</Button></Link>
        <Button color={color} className="button">Product</Button>
        <Button color={color} className="button">User</Button>
        <Link to='/'><Button color={color} className="button">Theme</Button></Link>
      </center>
    );
  }
}

export default editMenu;
