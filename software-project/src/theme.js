import React from 'react';
import NavBar from './Tool/navBar';
import { Component } from 'react';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';

class Theme extends Component {
  render(){
    return (
      <div>
        <NavBar Header="BetterExhibition"/><br/>
        <EditMenu/>
        <Contact/>
      </div>
    );
  }
}

export default Theme;
