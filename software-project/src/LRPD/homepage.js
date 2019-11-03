import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import LoginReg from "./log-reg_page";
import { useSelector } from 'react-redux';
// import {ProfileUser} from "./components/edit_profileuser/profile_user"
// import {ImageUpload} from "./components/edit_profileuser/imgupload"
// import {DownloadUser} from "./components/download/download_user"
// import './homepage.css';


function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  return (
    <div>
    <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
    <LoginReg/>
    {/* <ProfileUser/> */}
    {/* <DownloadUser/> */}
    {/* <ImageUpload/> */}
  </div>
  );
}

export default App;
