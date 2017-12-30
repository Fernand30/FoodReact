import { FACEBOOK_LOGIN_CLEAR, FACEBOOK_LOGIN_SUCCESS , FACEBOOK_LOGIN_FAILURE, FACEBOOK_LOGIN_PROCESSING} from '../constants/facebooklogin'

const initialState = {
  user: {},
  error:false
}

export default function facebookloginReducer (state = initialState, action)
{
    switch(action.type){
      case FACEBOOK_LOGIN_CLEAR:
        return{
          ...state,
          error: false,
          user: action.data
        }
      case FACEBOOK_LOGIN_PROCESSING:
        return{
          ...state
        }
      case FACEBOOK_LOGIN_SUCCESS:
        return{
          ...state,
          user: action.data,
          error:false
        }
      case FACEBOOK_LOGIN_FAILURE:
        return{
          ...state,
          error:false,
          user:{}
        }
      default:
        return state
    }
}
