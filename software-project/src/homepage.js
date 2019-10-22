import React from 'react';
import NavBar from './Tool/navBar';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import './Tool/Tool.css';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
    return (
      <div>
        <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor}/><br/>
        <EditMenu bgcolor={BGcolor}/>
        <center>
          <h1>This is homepage</h1>
        </center>
        <div>
          <Contact bgcolor={BGcolor}/>
        </div>
      </div>
    );
}

export default Homepage;
