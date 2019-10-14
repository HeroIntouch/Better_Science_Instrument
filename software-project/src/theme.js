import React from 'react';
import NavBar from './Tool/navBar';
import { Component } from 'react';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import { Button } from 'reactstrap';
import './Tool/Tool.css';

class Theme extends Component {
  constructor(){
    super();
    this.state={
      bgColor:"secondary",
      txColor:"#ffffff",
      log:"Log in"
    };
    this.changeColor1=this.changeColor1.bind(this);
    this.changeColor2=this.changeColor2.bind(this);
    this.changeColor3=this.changeColor3.bind(this);
    this.changeColor4=this.changeColor4.bind(this);
    this.changeColor5=this.changeColor5.bind(this);
    this.changeColor6=this.changeColor6.bind(this);
    this.changeColor7=this.changeColor7.bind(this);
    this.changeColor8=this.changeColor8.bind(this);
  }

  changeColor1(){
    this.setState({bgColor:"primary"});
  }
  changeColor2(){
    this.setState({bgColor:"secondary"});
    this.setState({txColor:"#ffffff"});
  }
  changeColor3(){
    this.setState({bgColor:"success"});
    this.setState({txColor:"#ffffff"});
  }
  changeColor4(){
    this.setState({bgColor:"danger"});
    this.setState({txColor:"#ffffff"});
  }
  changeColor5(){
    this.setState({bgColor:"warning"});
    this.setState({txColor:"#000000"});
  }
  changeColor6(){
    this.setState({bgColor:"info"});
    this.setState({txColor:"#ffffff"});
  }
  changeColor7(){
    this.setState({bgColor:"light"});
    this.setState({txColor:"#000000"});
  }
  changeColor8(){
    this.setState({bgColor:"dark"});
    this.setState({txColor:"#ffffff"});
  }
  render(){
    return (
      <div>
        <NavBar logo="BetterExhibition" log={this.state.log} bgcolor={this.state.bgColor} txColor={this.state.txColor}/><br/>
        <EditMenu bgcolor={this.state.bgColor}/>
        <center>
          <Button color="primary"   className="colorButton" onClick={this.changeColor1}><h3 className='font'>Primary</h3></Button>
          <Button color="secondary" className="colorButton" onClick={this.changeColor2}><h3 className='font'>Secondary</h3></Button>
          <Button color="success"   className="colorButton" onClick={this.changeColor3}><h3 className='font'>Success</h3></Button>
          <Button color="danger"    className="colorButton" onClick={this.changeColor4}><h3 className='font'>Danger</h3></Button>
          <Button color="warning"   className="colorButton" onClick={this.changeColor5}><h3 className='font'>Warning</h3></Button>
          <Button color="info"      className="colorButton" onClick={this.changeColor6}><h3 className='font'>Info</h3></Button>
          <Button color="light"     className="colorButton" onClick={this.changeColor7}><h3 className='font'>Light</h3></Button>
          <Button color="dark"      className="colorButton" onClick={this.changeColor8}><h3 className='font'>Dark</h3></Button>
        </center>
        <div>
          <Contact bgcolor={this.state.bgColor}/>
        </div>
      </div>
    );
  }
}

export default Theme;
