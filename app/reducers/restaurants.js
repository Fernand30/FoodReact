import { FETCHING_RESTAURANTS, FETCHING_RESTAURANTS_SUCCESS, FETCHING_RESTAURANTS_FAILURE } from '../constants/restaurants'

const initialState = {
  restaurants: [],
  isFetching: false,
  page: 1,
  seed: 1,
  refreshing: false,
  error: false
}

export default function restaurantsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_RESTAURANTS:
      return {
        ...state,
        restaurants: [],
        isFetching: true
      }
    case FETCHING_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        refreshing: false,
        restaurants: action.data
      }
    case FETCHING_RESTAURANTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        refreshing: false,
        error: true
      }
    default:
      return state
  }
}
