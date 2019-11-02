import React, { useState, Component } from 'react';
import NavBar from './Tool/navBar';
import Logo from './Tool/edit_home';
import ModalExample from './Tool/promotion_new';
import History from './Tool/history'
import Us from './Tool/aboutus'
import Summit from './Tool/summit'
import Set from './Tool/SetButton1'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import Plus from './Tool/Plus-PNG-Image.png';
import Up from './components/ImageUpload';


import './App.css';

function App() {
  return (
    
    <div >
    <NavBar/>
    <br></br>
    <Set/>
    <div style = {{padding: 20}}>
    <Logo/>
    <Up/>
    <History/>
    <Us/>

    </div>
    <div align="center">
    <Summit/>
   </div>
 
    </div>
  
  
  // <div>
  //   <Up/>
  // </div>

    
    
  );
}

export default App;

