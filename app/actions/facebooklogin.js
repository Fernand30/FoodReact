import { FACEBOOK_LOGIN_CLEAR, FACEBOOK_LOGIN_SUCCESS , FACEBOOK_LOGIN_FAILURE, FACEBOOK_LOGIN_PROCESSING} from '../constants/facebooklogin'
import { AsyncStorage } from 'react-native'

export function facebookLogin(data){
  return (dispatch) => {
    dispatch({type:FACEBOOK_LOGIN_PROCESSING})
    if(data.type == "success"){
      dispatch({type:FACEBOOK_LOGIN_SUCCESS, data})
    }
    else{
      dispatch({type:FACEBOOK_LOGIN_FAILURE, data})
    }

  }
}
export function facebookLoginSuccess(data){
  return (dispatch) => {
    dispatch({type:FACEBOOK_LOGIN_SUCCESS, data})
  }
}
export function facebookLoginFailure(data){
  return (dispatch) => {
    dispatch({type:FACEBOOK_LOGIN_FAILURE, data})
  }
}
export function facebookClearCredentials(){
  return (dispatch) => {
    dispatch({type:FACEBOOK_LOGIN_CLEAR})
  }
}
// export function facebookLogin() {
//   return (dispatch) => {
//     dispatch(facebookLoginProcessing)
//     LoginManager.logInWithReadPermissions(['public_profile','email']).then(
//       function(result){
//         if(result.isCancelled){
//           console.log('Login Canceled')
//         }
//         else{
//           console.log('Succeed:' + result.grantedPermissions.toString())
//         }
//       },
//       function(error){
//         console.log('Error Occured' + error)
//       }
//     )
//   }
// }



// export const facebookLogin = () => async (dispatch) => {
//   let token = await AsyncStorage.getItem('fb_token')
//   if(token){
//     dispatch(facebookLoginSuccess(token))
//   }
//   else{
//       doFacebookLogin(dispatch)
//   }
// }
//
// const doFacebookLogin = async (dispatch) => {
//   let { type, token } = await Facebook.logInWithReadPermissionsAsync('1995283784085829',{
//     permissions: ['public_profile', 'email']
//   })
//
//   if (type == 'cancel'){
//     return dispatch(facebookLoginFailure())
//   }
//
//   await AsyncStorage.setItem('fb_token', token)
//
//   dispatch(facebookLoginSuccess(token))
// }
