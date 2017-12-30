import React, { Component } from 'react'
import{ Icon, Text, View } from 'native-base'

import PropTypes from 'prop-types'
import styles from './styles'


class FormMessage extends Component{
  render(){
    const colors = {error: 'red', warning: 'yellow'}
    if (props.message){
      return(
        <View style={styles.errorContainer}>
          <Icon name="ios-warning" style={[styles.error, style]} />
          <Text style={[styles.error, style]}>
            {props.message}
          </Text>
        </View>
      );
    }
  }
}

FormMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

BasicButton.defaultProps = {
  type:'error'
};

export default FormMessage
