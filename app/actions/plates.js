import {
  FETCHING_DEALS, FETCHING_DEALS_SUCCESS, FETCHING_DEALS_FAILURE,
  FETCHING_DISHES, FETCHING_DISHES_SUCCESS, FETCHING_DISHES_FAILURE,
} from '../constants/plates'

export function fetchDealsFromAPI(restaurantId) {
  const queryString = require('query-string')
  return (dispatch) => {
    dispatch(getDeals())
    fetch("http://10.0.2.2:8000/api/deal/results/",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        providerID: restaurantId
      }),
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getDealsSuccess(json.deals))
    })
    .catch(error => {
      console.log(error)
      dispatch(getDealsFailure(error))
    })
  }
}

export function fetchDishesFromAPI(restaurantId) {
  const queryString = require('query-string')
  return (dispatch) => {
    dispatch(getDishes())
    fetch("http://10.0.2.2:8000/api/dish/results/",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        providerID: restaurantId
      }),
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getDishesSuccess(json.dishes))
    })
    .catch(error => {
      dispatch(getDishesFailure(error))
    })
  }
}

export function getDeals() {
  return {
    type: FETCHING_DEALS
  }
}

export function getDealsSuccess(data) {
  return {
    type: FETCHING_DEALS_SUCCESS,
    data
  }
}

export function getDealsFailure() {
  return {
    type: FETCHING_DEALS_FAILURE
  }
}
export function getDishes() {
  return {
    type: FETCHING_DISHES
  }
}

export function getDishesSuccess(data) {
  return {
    type: FETCHING_DISHES_SUCCESS,
    data,
  }
}

export function getDishesFailure() {
  return {
    type: FETCHING_DISHES_FAILURE
  }
}
