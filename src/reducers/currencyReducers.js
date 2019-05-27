import { currencyConstants } from '../constants/currencyConstants';
const initialState = { currencies: [], totalPages: 0, perPage: 20, page: 1, error: null, loading: false, currency: {} };
export function currency(state = initialState, action) {
    switch (action.type) {
        case currencyConstants.GETALL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case currencyConstants.GETALL_SUCCESS:
            return {
                ...state,
                currencies: action.payload.result.currencies,
                totalPages: action.payload.result.totalPages,
                error: '',
                page: action.payload.page,
                loading: false
            };
        case currencyConstants.GETALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case currencyConstants.GETBYID_REQUEST:
            return {
                loading: true
            };
        case currencyConstants.GETBYID_SUCCESS:
            return {
                currency: action.currency,
                loading: false,
                error: ''
            };
        case currencyConstants.GETBYID_FAILURE:
            return {
                error: action.error
            }

        default:
            return state
    }
}
