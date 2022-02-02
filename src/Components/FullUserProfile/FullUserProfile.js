import React, { useEffect, useState } from "react";
import { getFullUserProfile } from "../../dummyAPI";
import { useParams } from "react-router-dom";
import './FullUserProfile.css';


const FullUserProfile = ()=>{

  let { id } = useParams();
  const [user, setuser] = useState({
    location:{
      state :"",
      street:"",
      city:"",
      country:"",
      timezone:""
    }
  });
  const handleGetUser = async ()=>{
    const userData = await getFullUserProfile(id);
    setuser(userData)
  }
  useEffect(() => {
    handleGetUser();
  }, []);
  

  return (
    <div className="test">
       <div className="containerFullUserList">
         <div className="boxFullUserList">
           <div className="up-div">
           <div className="imageFullUserList">
           <img src={user.picture} size="small" alt="" height="100px" width="100px"/>
           </div>
           <div className="name_jobss">{user.firstName} {user.lastName}</div>

           </div>
           <div className="up-divs">
                <h6> <b>{user.id ? "ID:" + user.id : ""}</b></h6>
                 <h6 data-testid="gender" ><b>Gender: &nbsp;</b>{user.gender}</h6>
                 <h6><b>Date of Birth: &nbsp;</b>{user.dateOfBirth}</h6>
                 <h6><b>Register Date: &nbsp;</b>{user.registerDate}</h6>
                 <h6><b>Email: &nbsp;</b>{user.email}</h6>
                 <h6><b>Phone: &nbsp;</b>{user.phone}</h6>

           </div>
                 <div className="down-div">
                    <h6><b>Address &nbsp;</b></h6>
                    <h6><b>State: &nbsp;</b>{user.location.state}</h6>
                    <h6><b>Street: &nbsp;</b>{user.location.street}</h6>
                    <h6><b>City: &nbsp;</b>{user.location.city}</h6>
                    <h6><b>Country: &nbsp;</b>{user.location.country}</h6>
                    <h6><b>Timezone: &nbsp;</b>{user.location.timezone}</h6>
                 </div>
                 
         </div>
       </div>
     </div>
        
  )
}

export default FullUserProfile 