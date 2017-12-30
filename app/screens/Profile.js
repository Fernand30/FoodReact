import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { facebookLogin, facebookClearCredentials, facebookLoginSuccess, facebookLoginFailure } from '../actions/facebooklogin'
import FacebookLoginButton from '../components/FacebookLoginButton'

class Profile extends Component {
  handleFacebookButtonPress = () => {
    console.log('Facebook button pressed')
  }
  render() {
    console.log("PROFILE PROPS:",this.props)
    return (
      <View>
        <FBLogin
        buttonView = {<FacebookLoginButton />}
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            permissions={["email"]}
            onLogin={(data) => {this.props.onFacebookLogin(data)}}
            onLoginFound={(data) => {this.props.onFacebookLoginFound(data)}}
            onLoginNotFound={this.props.onFacebookLoginNotFound}
            onLogout={this.props.onFacebookLogout}
            onCancel={this.props.onFacebookLoginCancel}
            onPermissionsMissing={this.props.onPermissionsMissing}
          />
      </View>
    );
  }
}

function mapStateToProps (state){
  return{
    user: state.user
  }
}

function mapDispatchToProps(dispatch, data){
  return{
    onFacebookLogin: (data) => dispatch(facebookLogin(data)),
    onFacebookLoginFound: (data) => dispatch(facebookLoginSuccess(data)),
    onFacebookError: (data) => dispatch(facebookLoginFailure(data)),
    onFacebookLoginNotFound: () => dispatch(facebookClearCredentials()),
    onFacebookLogout: () => dispatch(facebookClearCredentials()),
    onFacebookLoginCancel: () => dispatch(facebookClearCredentials()),
    onPermissionsMissing: () => dispatch(facebookClearCredentials())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
