import axios from "axios"

export default class GetUserData{
    getPostList(){
        return axios.get("https://dummyapi.io/data/v1/post?limit=10", {
            headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
        });
    }
    getUserList(){
        return axios.get("https://dummyapi.io/data/v1/user?limit=10", {
            headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
        });
      }
      getFullUserProfile(id){
        return axios.get("https://dummyapi.io/data/v1/user/"+id, {
            headers:{ 'app-id': '61f2fedbce738d863ac84bda'}
        });
      }
}


