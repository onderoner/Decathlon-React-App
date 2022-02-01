
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import '../CssTemplate/UserListCss.css';  
import getFullUserProfile from  "../dummyAPI";
import { useState } from 'react';
import { useEffect } from 'react';


function UserList(){



  const [postData, setPostData] = useState([]);

  useEffect(()=>{
    let dummyAPI = new getFullUserProfile();
    dummyAPI.getUserList().then((result)=>{
      if(result){
        const {data} = result;
        setPostData(data?.data);
      }

    });
  },[]);

  return(
    <div data-testid="userList" className="up">
         <div className="contaniners">
      {postData.map((postProcess)=>(
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={postProcess.picture} alt="" height="100px" width="100px"/>
        </div>
      </div>
    <div className="lower-container">
        <h4>{postProcess.id}</h4>
        <NavLink to={`/user/${postProcess.id}`}>
        <h4>{postProcess.title} {postProcess.firstName} {postProcess.lastName}</h4>  
        </NavLink>
    </div>
    </div>
     ))}
  </div>
    </div>
 
    
  )
}

export default UserList