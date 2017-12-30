import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BasicButton from '../components/BasicButton'

import {removePlateFromCart} from '../actions/cart'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Cart extends Component {
  constructor(props){
    super(props)
  }

  handleButtonPress = () => {
    console.log("Button is Press yayayayayayay")
  }

  render() {
    let cart = JSON.stringify(this.props.cart)
    return (
      <View>
        <Text>For now</Text>
        <Text>cart</Text>
        <BasicButton
          text= 'Remove from cart '
          onPress = {() => this.handleButtonPress()}
        />
      </View>
    );
  }
}
Cart.contextTypes = {
  store: PropTypes.object
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch, plate){
  return{
    removeFromCart: (plate) => dispatch(removePlateFromCart(plate))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Cart);
