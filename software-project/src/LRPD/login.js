import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import LoginReg from "./log-reg_page";
import { useSelector } from 'react-redux';

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const codeBGcolor = useSelector(state => state.codeBGcolor);
  return (
    <div>
    <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
    <LoginReg codeBGcolor={codeBGcolor}/>
  </div>
  );
}

export default App;
