import {API_URL} from '../config'
import {getHttp} from '../helpers/http'
export const getCoinList =({page,perPage})=>{
    return getHttp(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
}
export const getCoin=(currencyId)=>{
    return getHttp(`${API_URL}/cryptocurrencies/${currencyId}`)
}
export const searchCoin=(searchQuery)=>{
    return getHttp(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
}