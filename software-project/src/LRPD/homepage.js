import React from 'react';
import NavBar from './Tool/navBar';
// import LoginReg from "./log-reg_page";
import {ProfileUser} from "./components/edit_profileuser/profile_user"
import {ImageUpload} from "./components/edit_profileuser/imgupload"
// import {DownloadUser} from "./components/download/download_user"
// import './homepage.css';


function App() {
  return (
    <div>
    <NavBar/>
    {/* <LoginReg/> */}
    <ProfileUser/>
    {/* <DownloadUser/> */}
    <ImageUpload/>
  </div>
  );
}

export default App;
