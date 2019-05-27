import { getCoinList, getCoin, searchCoin } from '../services/coinApi'
import { currencyConstants } from '../constants/currencyConstants';

export const getAll=(page,perPage)=> {
    return dispatch => {
        dispatch(request());
        getCoinList({ page, perPage })
            .then(result => {
                dispatch(success(result));
            })
            .catch(error => {
                dispatch(failure(error.toString()));
            })
    };
    function request() { return { type: currencyConstants.GETALL_REQUEST } }
    function success(result) { return { type: currencyConstants.GETALL_SUCCESS, payload:{result,page } }};
    function failure(error) { return { type: currencyConstants.GETALL_FAILURE, error } };
}
export const getById=(id)=> {
    return dispatch => {
        dispatch(request(id));
        getCoin(id)
            .then(currency => {
                dispatch(success(currency));
            })
            .catch(error => {
                dispatch(failure(error.toString()));
            })
    };
    function request(id) { return { type: currencyConstants.GETBYID_REQUEST } }
    function success(currency) { return { type: currencyConstants.GETBYID_SUCCESS,currency  } };
    function failure(error) { return { type: currencyConstants.GETBYID_FAILURE, error } };
}
export const searchQuery=(query)=>{
    return dispatch => {
        dispatch(request(query));
        searchCoin(query)
            .then(result => {
                dispatch(success(result));
            })
            .catch(error => {
                dispatch(failure(error.toString()));
            })
    };
    function request(query) { return { type: currencyConstants.SEARCHQUERY_REQUEST, query } }
    function success(currencies) { return { type: currencyConstants.SEARCHQUERY_SUCCESS, payload:{currencies,query} } };
    function failure(error) { return { type: currencyConstants.SEARCHQUERY_FAILURE, error } };
}
export const resetSearch=()=>{
    return{type: currencyConstants.SEARCHQUERY_RESET}
}