import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import BasicButton from '../components/BasicButton'

import {addPlateToCart} from '../actions/cart'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class MenuItem extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      plate:{
        quantity: 1,
        special_instruction: "No Special Instruction",
        update: false,
        id:this.props.id,
        
      }
    }

    console.log(this.state)
  }

  handleButtonPress = () =>{
    console.log(this.state.plate)
    this.props.addToCart(this.state.plate)
  }

  render(){
    console.log(this.props)
    
    return(
      <View>
        <Text>You are in menu item with name {this.props.name} with id {this.props.id}</Text>
        <Text>Quantity</Text>
        <BasicButton
        text= 'Add To Cart'
        onPress = {() => this.handleButtonPress()}
        />
        
        <Text>Special Instruction....</Text>
      </View>
    )
  }
}

MenuItem.contextTypes = {
  store: PropTypes.object
}

function mapStateToProps (state){
  return {
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch, plate){
  return {
    addToCart: (plate) => dispatch(addPlateToCart(plate))
  }
}

export default connect(
  mapStateToProps,
   mapDispatchToProps)(MenuItem)
