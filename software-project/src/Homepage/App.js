import React from 'react';
import './App.css';
import NavBar from './navbar/navBar'
import Promotion from './promotion/promotion'
import Media from './media/media'
import Generate from '../Generate/Generate'

function App() {
  return (
    <div>
      <div><NavBar /></div>
      <div className = 'promo'><Promotion /></div>
      {/* <div className = 'tabs'><Tabs /></div> */}
      <div className = 'tabs'><Media /></div>
      <div className = 'contact'>Mission</div>
      <div className = 'contact'>Contact Us</div>
      <Generate></Generate>
    </div>
  );
}

export default App;
