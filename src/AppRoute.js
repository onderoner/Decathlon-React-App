import {HomePage,UserList,FullUserProfile} from './Components/İndex';
import React from "react";
import {
  Route,Routes
} from "react-router-dom";

export default function AppRoute() {
  return (
    <Routes>
        <Route path = "/" exact element = {<HomePage/>}  />
        <Route path = "/users" exact element = {<UserList/>}/> 
        <Route path = "/user/:id" exact element = {<FullUserProfile/>}/>
    
    </Routes>
  );
}

