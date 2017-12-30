import { combineReducers } from 'redux'
import restaurants from './restaurants'
import user from './facebooklogin'
import deals from './deals'
import dishes from './dishes'
import cart from './cart'

const rootReducer = combineReducers({
    restaurants,
    user,
    deals,
    dishes,
    cart
})

export default rootReducer
