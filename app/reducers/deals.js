import { FETCHING_DEALS, FETCHING_DEALS_SUCCESS, FETCHING_DEALS_FAILURE,} from '../constants/plates'

const initialState = {
  deals: [],
  isFetching: false,
  page: 1,
  seed: 1,
  refreshing: false,
  error: false
}

export default function dealsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DEALS:
      return {
        ...state,
        deals: [],
        isFetching: true
      }
    case FETCHING_DEALS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        refreshing: false,
        deals: action.data
      }
    case FETCHING_DEALS_FAILURE:
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
