
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';  
import {NavLink} from 'react-router-dom';

function Header(){
  return(
  
    <div  data-testid="header"   class="topnav" id="myTopnav">
      <NavLink className={"active"} to="/">
        Home Page
      </NavLink>
      <NavLink  className={"active"} to="/users">
        User List Page
      </NavLink>
    <p>Önder Öner React Project - Decathlon</p>
  </div>
  )
}

export default Header