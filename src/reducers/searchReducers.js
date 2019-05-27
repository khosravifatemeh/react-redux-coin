import { currencyConstants } from '../constants/currencyConstants';
const initialState = { error: null, loading: false, query: '', searchResults: [] };
export function search(state=initialState, action) {
    switch (action.type) {
        case currencyConstants.SEARCHQUERY_REQUEST:
            return {
                loading: true,
                query: action.query
            };
        case currencyConstants.SEARCHQUERY_SUCCESS:
            return {
                query: action.payload.query,
                searchResults: action.payload.currencies,
                loading: false,
                error: ''
            };
        case currencyConstants.SEARCHQUERY_FAILURE:
            return {
                error: action.error
            };
        case currencyConstants.SEARCHQUERY_RESET:
            return {
                query: '',
                searchResults: []
            };
        default:
            return state
    }

}