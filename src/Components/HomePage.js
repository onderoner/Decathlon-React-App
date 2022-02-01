
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssTemplate/HomePageCss.css';  
import { useState } from 'react';
import { useEffect } from 'react';
import dummy from  "../dummyAPI";


export default  function HomePage(){

  const [postData, setPostData] = useState([]);
  useEffect(async ()=>{
    let dummyAPI = new dummy();
    const result = await dummyAPI.getPostList()
    if(result){
      const {data} = result;
      setPostData(data?.data);
    }
  },[]);


  return(
    <div data-testid="home" className="up">
        <div className="contaniners">
      {postData.map((postProcess,userdetail)=>(
           <div className="Cardss" key={userdetail}>
           <div className="upper-containers">
             <div className="image-containers">
               <img  src={postProcess.owner.picture} alt="" height="100px" width="100px"/> {/*image react bak*/}
             </div>
           </div>
            <div className="lower-containers">
             <h4> {postProcess.owner.firstName} {postProcess.owner.lastName} </h4>
             <strong>{postProcess.publishDate}</strong>
             <div>
             <img src={postProcess.image} alt="" height="150px" width="150px"/>
             </div>
             <p>{postProcess.text}</p>
             <div> {postProcess.tags.map((label,userdetail) =>(
                <small key={userdetail}>
                  {label}
                </small>
             ))}
              <i  id="icon" className="fa fa-thumbs-up">{postProcess.likes}</i>
             </div>     
         </div>
         </div>  

      ))}
     
    </div>
    </div>
    
    
  )
}

