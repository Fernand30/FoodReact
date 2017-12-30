
import React, {Component} from 'react';
import { TouchableHighlight, Text} from 'react-native'

import PropTypes from 'prop-types'
import styles from './styles'


class BasicButton extends Component{
  render(){
    const {text, onPress} = this.props
    return(
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
}

BasicButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  store: PropTypes.object
};

BasicButton.defaultProps = {
  text: 'Button Text',
  onPress: () => console.log('Button Pressed'),
};

export default BasicButton
