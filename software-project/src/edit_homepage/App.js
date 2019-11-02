import React, { useState, Component } from 'react';
import NavBar from './Tool/navBar';
import Logo from './Tool/edit_home';
import ModalExample from './Tool/promotion_new';
import History from './Tool/history'
import Us from './Tool/aboutus'
import Summit from './Tool/summit'
import Set from './Tool/SetButton1'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label, Popover, PopoverHeader, PopoverBody, Container, Row, Col } from 'reactstrap';
import Plus from './Tool/Plus-PNG-Image.png';
import Up from './components/ImageUpload';
import Pic1 from './components/pic1';
import Pic2 from './components/pic2';
import Pic3 from './components/pic3';


import './App.css';

function App() {
  return (

    <div >
      <NavBar />
      <br></br>
      <Set />

      <div style={{ padding: 20 }}>
        <Logo />
        <h2> Promotion </h2>
        <Container style={{ margin: "0px" }}>
          <Row>
            <Col lg="2.5"> <Pic1 /> </Col>
            <Col lg="2.5" > <Pic2 /> </Col>
            <Col lg="2.5" > <Pic3 /> </Col>
          </Row>

        </Container>
        <History />
        <Us />

      </div>
      <div align="center">
        <Summit />
      </div>

    </div>


    // <div>
    //   <Up/>
    // </div>



  );
}

export default App;

