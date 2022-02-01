
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssTemplate/FullUserProfileCss.css';  
import { useState } from 'react';
import { useEffect } from 'react';
import getFullUserProfile from  "../dummyAPI";
import { useParams } from "react-router";


export default function FullUserProfile(){

  let {id}= useParams();
  const [postData, setPostData] = useState([]);

  useEffect(()=>{
    let dummyAPI = new getFullUserProfile();
    dummyAPI.getFullUserProfile(id).then((result)=>{
      console.log(result)
      if(result){
        const {data} = result;
        setPostData(data);
      }

    });
  },[]);

  console.log(postData)
      return(
        
          <div className="Card">
           
          <div className="upper-container">
            <div className="image-container">
              <img src={postData.picture} size="small" alt="" height="100px" width="100px"/>
            </div>
          </div>
        <div className="lower-container">
            <h4>{postData.id ? "ID:" + postData.id : ""}</h4>
            <h4>ms. Sara Anderson</h4>
            <h4 data-testid="gender" >Gender:</h4>
            <h4>Date of birth:</h4>
            <h4>Register date:</h4>
            <h4><br></br> </h4>
            <h4>Email:</h4>
            <h4>Phone:</h4>

            
        </div>
        <div className="low-container">
                <h4>Address:</h4>
                <h4>State:</h4>
                <h4>Street:</h4>
                <h4>City:</h4>
                <h4>Country:</h4>
                <h4>Timezone:</h4>
            </div>
        </div>
        
   
        
      )
}

