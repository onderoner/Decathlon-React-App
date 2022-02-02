import React from "react";
import './HomePage.css';  
import { useState } from 'react';
import { useEffect } from 'react';
import {getPostList} from  "../../dummyAPI";



export default  function HomePage(){

  const [postData, setPostData] = useState([]);
  useEffect(async ()=>{
    const result = await getPostList()
    console.log(result)
    if(result){
      const {data} = result;
      setPostData(data?.data);
    }
  },[]);


  return(
    <div data-testid="home">
    <div className="up-Container">
    <div className="containerHome">
      {postData.map((postProcess,userdetail)=>(
      <div className="boxHome" key={userdetail}>
        <div className="image">
          <img src={postProcess.owner.picture} alt="" />
        </div>
        <div className="name_job">  <h4> {postProcess.owner.firstName} {postProcess.owner.lastName} </h4></div>
        <strong>{postProcess.publishDate}</strong>
        <div className="imgs">
          <img src={postProcess.image} alt="" alt="" height="200px" width="200px"/>
        </div>
        <p>{postProcess.text}</p>
        <div className="btns">
       <div> {postProcess.tags.map((label,userdetail) =>(
          <small key={userdetail}>
            {label}
          </small>
       ))}
       
        <i  id="icon" className="fa fa-thumbs-up"> {postProcess.likes}</i>
       </div>     
        </div>
      </div>
      ))}
    </div>
  </div>
    </div>
   
  )
}

