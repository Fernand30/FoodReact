import React, {Component} from 'react';
import { View, Text} from 'react-native'
import { ListItem } from 'react-native-elements'

import PropTypes from 'prop-types'
import styles from './styles'


class MenuFlatListItem extends Component{


  handlePress = () => {
    const {item} = this.props
    this.props.onPress(item)
  }

  render(){
    const {item} = this.props
    return(
      <ListItem
        title = {item.name}
        rightIcon = {<Text>{item.options.base_cost}$</Text>}
        containerStyle = {styles.container}
        onPress = {this.handlePress}
      />
    );
  }
}

export default MenuFlatListItem
