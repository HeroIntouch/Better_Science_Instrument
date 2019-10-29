import React from 'react';
import NavBar from './Tool/navBar';
import Contact from './Tool/contactUs';
import EditMenu from './Tool/editMenu';
import { Button } from 'reactstrap';
import './Tool/Tool.css';
import { useSelector, useDispatch } from 'react-redux';
import { changePrimary, changeSecondary, changeDanger, changeDark, changeInfo, changeLight, changeSuccess, changeWarning } from '../actions';

function Theme() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /><br />
      <EditMenu bgcolor={BGcolor} />
      <center>
        <Button color="primary" className="colorButton" onClick={() => { dispatch(changePrimary()) }}><h3 className='font'>Primary</h3></Button>
        <Button color="secondary" className="colorButton" onClick={() => { dispatch(changeSecondary()) }}><h3 className='font'>Secondary</h3></Button>
        <Button color="success" className="colorButton" onClick={() => { dispatch(changeSuccess()) }}><h3 className='font'>Success</h3></Button>
        <Button color="danger" className="colorButton" onClick={() => { dispatch(changeDanger()) }}><h3 className='font'>Danger</h3></Button>
        <Button color="warning" className="colorButton" onClick={() => { dispatch(changeWarning()) }}><h3 className='font'>Warning</h3></Button>
        <Button color="info" className="colorButton" onClick={() => { dispatch(changeInfo()) }}><h3 className='font'>Info</h3></Button>
        <Button color="light" className="colorButton" onClick={() => { dispatch(changeLight()) }}><h3 className='font'>Light</h3></Button>
        <Button color="dark" className="colorButton" onClick={() => { dispatch(changeDark()) }}><h3 className='font'>Dark</h3></Button>
      </center>
      <div>
        <Contact bgcolor={BGcolor} />
      </div>
    </div>
  );
}

export default Theme;
