import { userConstants } from '../constants/userConstants';
import * as authentication from '../services/authentication';
let userToken = authentication.getAuthState()
const initialState = userToken ? { loggedIn: false,error:'', userToken,loading:false } : {};

export function login(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {...state,
                loggedIn: true,
                userToken: action.result,
                loading:false
            };
        case userConstants.LOGIN_FAILURE:
            return {...state,error:action.error};
        case userConstants.LOGIN_REQUEST:
            return {...state,loading:true};
        case userConstants.LOGOUT:
            return {userToken:null,loggedIn:false};
        default:
            return state
    }
}