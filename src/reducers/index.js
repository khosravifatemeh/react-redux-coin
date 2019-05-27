import {combineReducers} from 'redux';
import {login} from './userReducers';
import {currency} from './currencyReducers'
import {search} from './searchReducers'
const rootReducer=combineReducers({
    login,currency,search
});
export default rootReducer;