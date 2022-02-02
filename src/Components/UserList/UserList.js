
import React from "react";
import {NavLink} from 'react-router-dom';
import './UserList.css';  
import {getUserList} from  "../../dummyAPI";
import { useState } from 'react';
import { useEffect } from 'react';


function UserList(){

  const [postData, setPostData] = useState([]);

  useEffect(()=>{
    getUserList().then((result)=>{
      if(result){
        const {data} = result;
        setPostData(data?.data);
      }

    });
  },[]);

  return(
    <div>
       
   
    <div data-testid="userList" className="up">

      <div className="container">
          {postData.map((postProcess,index)=>(
            <div className="box" key={index}>
              <div className="image">
              <img src={postProcess.picture} alt="" height="100px" width="100px"/>
              </div>
              <div className="name_jobs">
                
              <h4>{postProcess.id}</h4>
              <div className="linkNone">
              <NavLink to={`/user/${postProcess.id}`}>
              <h4 className="userTag">{postProcess.title} {postProcess.firstName} {postProcess.lastName}</h4>  
              </NavLink>
              </div>
              
              </div>
            
            </div>
            ))}
          </div>
        </div>

    </div>
    
 
    
  )
}

export default UserList

