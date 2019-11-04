import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import LoginReg from "./log-reg_page";
import { useSelector } from 'react-redux';
import ContactUs from '../Theme/Tool/contactUs';

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const codeBGcolor = useSelector(state => state.codeBGcolor);

  return (
    <div>
      <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /><br />
      <LoginReg codeBGcolor={codeBGcolor} TXcolor={TXcolor} /><br />
      <ContactUs bgcolor={BGcolor} />
    </div>
  );
}

export default App;
