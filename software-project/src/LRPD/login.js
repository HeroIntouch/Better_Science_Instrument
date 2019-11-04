import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import LoginReg from "./log-reg_page";
import { useSelector } from 'react-redux';
import ContactUs from '../Theme/Tool/contactUs';
import { user_state, admin_state } from './components/login';
import { useDispatch } from 'react-redux';
import { changeUserStateLogin, changeAdminStateLogin, changeUserStateLogout, changeAdminStateLogout } from '../actions';

const input = document.querySelector('#input')

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const codeBGcolor = useSelector(state => state.codeBGcolor);
  const dispatch = useDispatch()

  console.log(user_state + ", " + admin_state)
  if (user_state == -1) {
    dispatch(changeUserStateLogout())
  } else {
    dispatch(changeUserStateLogin())
  }
  if (admin_state == -1) {
    dispatch(changeAdminStateLogout())
  } else {
    dispatch(changeAdminStateLogin())
  }

  return (
    <div>
      <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /><br />
      <LoginReg codeBGcolor={codeBGcolor} TXcolor={TXcolor} /><br />
      <ContactUs bgcolor={BGcolor} />
    </div>
  );
}

export default App;
