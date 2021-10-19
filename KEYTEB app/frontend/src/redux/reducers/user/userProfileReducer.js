import { USER_PROFILE_FAIL, USER_PROFILE_REQUEST ,  USER_PROFILE_SUCCESS } from "../../actions/actionTypes";

const userProfileReducer =(state={} , action)=>{
  switch (action.type){
   case   USER_PROFILE_REQUEST: 
    return {
        user :null,
        loading: true,
        error :null
    }
    case USER_PROFILE_SUCCESS : 
    return {
        user :action.payload,
        loading: false,
        error :null
    };
    case USER_PROFILE_FAIL :
        return {
            user :null,
            loading: false,
            error :action.payload
        }
        default :
        return state
  }
}


export default userProfileReducer