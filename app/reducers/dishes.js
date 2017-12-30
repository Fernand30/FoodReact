import { FETCHING_DISHES, FETCHING_DISHES_SUCCESS, FETCHING_DISHES_FAILURE,} from '../constants/plates'

const initialState = {
  dishes: [],
  isFetching: false,
  page: 1,
  seed: 1,
  refreshing: false,
  error: false
}

export default function dealsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DISHES:
      return {
        ...state,
        dishes: [],
        isFetching: true
      }
    case FETCHING_DISHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        refreshing: false,
        dishes: action.data
      }
    case FETCHING_DISHES_FAILURE:
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
