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
//Function calls

//Check Server Response for either success or failure


//POST to server and add it to the session
export function addPlateToCart(plate){
  const queryString = require('query-string')
  return (dispatch) => {
    dispatch(addToCart())
    fetch("http://10.0.2.2:8000/api/food/cart_add/",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        quantity: plate.quantity,
        options: plate.options,
        special_instruction: plate.special_instruction,
        update: plate.update,
        plate_id: plate.id
      }),
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        dispatch(addToCartSuccess())
        dispatch(getCartFromAPI())
      }
      else{
        dispatch(addToCartFailure(response.error_message))
      }
    })
    .catch(error => {
      console.log(error)
      dispatch(addToCartFailure(error))
    })
  }
}

//POST to server and remove it from the session
export function removePlateFromCart(plate){
  const queryString = require('query-string')
  return (dispatch) => {
    dispatch(removeFromCart())
    fetch("http://10.0.2.2:8000/api/food/cart_remove/",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        plate_id: plate.id
      }),
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        dispatch(removeFromCartSuccess())
        dispatch(getCartFromAPI())
      }
      else{
        dispatch(removeFromCartFailure(response.error_message))
      }
    })
    .catch(error => {
      console.log(error)
      dispatch(removeFromCartFailure(error))
    })
  }
}

//POST to server and get the cart from the session
export function getCartFromAPI(){
  const queryString = require('query-string')
  return (dispatch) => {
    dispatch(getCart())
    fetch("http://10.0.2.2:8000/api/food/cart_detail/")
    .then(response => response.json())
    .then(response => {
      console.log("Success",response)
      if(response.success){
        dispatch(getCartSuccess())
      }
      else{
        dispatch(getCartFailure(response.error_message))
      }
    })
    .catch(error => {
      console.log(error)
      dispatch(getCartFailure(error))
    })
  }
}

// adding item to cart
export function addToCart(){
  return {
    type: ADDING_TO_CART
  }
}
export function addToCartSuccess(){
  return {
    type: ADDING_TO_CART_SUCCESS
  }
}
export function addToCartFailure(){
  return {
    type: ADDING_TO_CART_FAILURE
  }
}

// Removing an item from Cart
export function removeFromCart(){
  return{
    type:REMOVING_FROM_CART
  }
}
export function removeFromCartSuccess(){
  return{
    type:REMOVING_FROM_CART_SUCCESS
  }
}
export function removeFromCartFailure(){
  return{
    type:REMOVING_FROM_CART_FAILURE
  }
}

// Getting cart from server session
export function getCart(){
  return {
    type: FETCHING_CART
  }
}
export function getCartSuccess(data){
  return {
    type: FETCHING_CART_SUCCESS
  }
}
export function getCartFailure(){
  return {
    type: FETCHING_CART_FAILURE
  }
}
