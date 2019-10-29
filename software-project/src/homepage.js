import React from 'react';
import NavBar from './Theme/Tool/navBar';
import Contact from './Theme/Tool/contactUs';
import EditMenu from './Theme/Tool/editMenu';
import './Theme/Tool/Tool.css';
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
