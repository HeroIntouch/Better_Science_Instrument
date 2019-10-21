import React from 'react';
import NavBar from './Tool/navBar';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import './Tool/Tool.css';

const Homepage = (props) => {
    return (
      <div>
        <NavBar logo="BetterExhibition" log={props.log} bgcolor={props.bgColor} txColor={props.txColor}/><br/>
        <EditMenu bgcolor={props.bgColor}/>
        <center>
          <h1>This is homepage</h1>
        </center>
        <div>
          <Contact bgcolor={props.bgColor}/>
        </div>
      </div>
    );
}

export default Homepage;
