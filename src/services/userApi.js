import {validateUser} from '../helpers/http'
import {API_AUTH} from '../config'

export const authUser = (email, password)=>{
    return validateUser(`${API_AUTH}/login`,{email, password})
}