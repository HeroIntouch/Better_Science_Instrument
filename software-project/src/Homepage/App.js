import React from 'react';
import './App.css';
import NavBar from '../Theme/Tool/navBar'
import Promotion from './promotion/promotion'
import Media from './media/media'
import Generate from '../Generate/Generate'
import { useSelector } from 'react-redux';
import Contact from '../Theme/Tool/contactUs';

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  return (
    <div>
      <div><NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /></div>
      <div className = 'promo'><Promotion /></div>
      {/* <div className = 'tabs'><Tabs /></div> */}
      <div className = 'tabs'><Media /></div>
      <div className = 'contact'>Mission</div>
      <div className = 'contact'>Contact Us</div>
      <Generate></Generate>

      <Contact bgcolor={BGcolor} />
    </div>
  );
}

export default App;
