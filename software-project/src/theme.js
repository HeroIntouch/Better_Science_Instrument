import React from 'react';
import NavBar from './Tool/navBar';
import { Component } from 'react';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import Card from './Tool/Card';

class Theme extends Component {
  constructor(){
    super();
    this.state={
      bgColor:"secondary"
    };
    this.changeColor=this.changeColor.bind(this);
  }
  changeColor(){
    this.setState({bgColor:"primary"});
  }
  render(){
    return (
      <div>
        <NavBar Header="BetterExhibition" bgcolor={this.state.bgColor}/><br/>
        <EditMenu bgcolor={this.state.bgColor}/>
        <button style = {{padding:"0px"}} onClick={this.changeColor}>
          <Card/>
        </button><br/>
        <Contact bgcolor={this.state.bgColor}/>
      </div>
    );
  }
}

export default Theme;
