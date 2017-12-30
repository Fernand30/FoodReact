import { FETCHING_RESTAURANTS, FETCHING_RESTAURANTS_SUCCESS, FETCHING_RESTAURANTS_FAILURE } from '../constants/restaurants'

export function fetchRestaurantsFromAPI() {
  const queryString = require('query-string');
  return (dispatch) => {
    dispatch(getRestaurants())
    fetch("http://10.0.2.2:8000/api/providers_results/",{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: queryString.stringify({
        lat: '40.7993006',
        lng: '-77.85784539999997',
        type: 'delivery'
      }),
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getRestaurantsSuccess(json.providers))
    })
    .catch(error => {
      console.log(error)
      dispatch(getRestaurantsFailure(error))
    })
  }
}

export function getRestaurants() {
  return {
    type: FETCHING_RESTAURANTS
  }
}

export function getRestaurantsSuccess(data) {
  return {
    type: FETCHING_RESTAURANTS_SUCCESS,
    data,
  }
}

export function getRestaurantsFailure() {
  return {
    type: FETCHING_RESTAURANTS_FAILURE
  }
}
