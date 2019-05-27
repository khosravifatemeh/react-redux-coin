import {userConstants} from '../constants/userConstants';
import * as authentication from '../services/authentication';
// export const userActions = {
//     login,
//     logout

// };
export const login=(username,password)=>{
    return dispatch=>{
        dispatch(request());

    authentication.login(username,password)
    .then(result=>{
        dispatch(success(result));
    })
    .catch(error=>{
        dispatch(failure(error.toString()));
    })
    
    };
function request() { return { type: userConstants.LOGIN_REQUEST } }
function success(result){return {type:userConstants.LOGIN_SUCCESS,result}}
function failure(error){return{type:userConstants.LOGIN_FAILURE,error}}
}
// export const logout=()=>{
//     authentication.logout();
//     return {type:userConstants.LOGOUT}
// }

