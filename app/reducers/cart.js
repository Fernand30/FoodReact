import {
  ADDING_TO_CART,
  ADDING_TO_CART_FAILURE,
  ADDING_TO_CART_SUCCESS,
  REMOVING_FROM_CART,
  REMOVING_FROM_CART_FAILURE,
  REMOVING_FROM_CART_SUCCESS,
  FETCHING_CART, FETCHING_CART_SUCCESS,
  FETCHING_CART_FAILURE
} from '../constants/cart'

const initialState = {
  plates: {},
  isAdding: false,  //adding item to server
  isRemoving: false, //removing item from server
  isGetting: false, //getting item from server
  error: false,
}

export default function cartReducer (state = initialState, action){
  switch (action.type){
    case ADDING_TO_CART:
      return{
          ...state,
          isAdding:true,
          isRemoving:false,
          isGetting:false,
      }
    case ADDING_TO_CART_SUCCESS:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false
      }
    case ADDING_TO_CART_FAILURE:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false,
          error:true
      }
    case REMOVING_FROM_CART:
      return{
          ...state,
          isAdding:false,
          isRemoving:true,
          isGetting:false
      }
    case REMOVING_FROM_CART_SUCCESS:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false,
          plates: action.data
      }
    case REMOVING_FROM_CART_FAILURE:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false,
          error:true
      }
    case FETCHING_CART:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:true,
      }
    case FETCHING_CART_SUCCESS:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false,
          plates:action.data
      }
    case FETCHING_CART_FAILURE:
      return{
          ...state,
          isAdding:false,
          isRemoving:false,
          isGetting:false,
      }
  default:
    return state
  }
}
