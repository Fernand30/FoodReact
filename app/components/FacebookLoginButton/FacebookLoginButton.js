import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import styles from './styles'
import {PropTypes} from 'prop-types'

class FacebookLoginButton extends Component{
  static contextTypes = {
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
    props: PropTypes.shape({})
  }
  constructor(props){
    super(props)
  }

  handleOnPress = () => {
    if(!this.context.isLoggedIn){
      this.context.login()
    }
    else{
      this.context.logout()
    }
  }

  render(){
    return(
      <View>
        <SocialIcon
          title = 'Facebook Login'
          button
          onPress = {this.handleOnPress}
          type = 'facebook'
          style = {styles.button}
        />
      </View>
    )
  }
}
export default FacebookLoginButton
