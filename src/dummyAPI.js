import axios from "axios"

export const getPostList =async ()=>{
    return axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
    });
}
export const getUserList =async ()=>{
    return axios.get("https://dummyapi.io/data/v1/user?limit=10", {
        headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
    });
  }
export const getFullUserProfile =async (id)=>{
      const response = await axios.get("https://dummyapi.io/data/v1/user/"+id, {
        headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
    }); 
    
    return  response.status === 200 ? response.data : false
  }