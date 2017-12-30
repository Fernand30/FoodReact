import React, { Component } from 'react';
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import BasicButton from '../../components/BasicButton'
import {removePlateFromCart} from '../../actions/cart'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List, ListItem, SearchBar, ButtonGroup,CheckBox} from "react-native-elements"
import { Actions } from 'react-native-router-flux'
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"

import styles from './styles'


class Cart extends Component {
  constructor(props){
    super(props)
    this.state=({
      radio1: true,
      radio2: false,
      radio3: false,
      check1: true,
      check2: false,
      check3: false,
    })
}
  
  handleButtonPress = () => {
    console.log("Button is Press yayayayayayay")
  }

  radioButton1(){
    this.setState({
      radio1 : true,
      radio2: false,
      radio3: false
    })
  }

  radioButton2(){
    this.setState({
      radio1 : false,
      radio2: true,
      radio3: false
    })
  }

  radioButton3(){
    this.setState({
      radio1 : false,
      radio2: false,
      radio3: true
    })
  }

  checkButton1(){
    this.setState({
      check1 : !this.state.check1
    })
  }
  checkButton2(){
    this.setState({
      check2 : !this.state.check2
    })
  }
  checkButton3(){
    this.setState({
      check3 : !this.state.check3
    })
  }
  goback(){
    Actions.pop()
  }

  render() {
    let cart = JSON.stringify(this.props.cart)
    return (
      <View style = {styles.container}>
          <View style={{height:20}} style={styles.headerView}/>
          <View style={styles.headerView}>
              <TouchableOpacity onPress={this.goback.bind(this)}>
                  <Image source={Images.close}/>
              </TouchableOpacity>
              <Text style={styles.titleText}>Select Payment Method</Text>
              <View />  
           </View>
           <View style={styles.rowView}>
               <View style={styles.firstView}>
                    <Image source={Images.done}/>
               </View>
               <View style={styles.lineView1}/>
               <View style={styles.firstView}>
                    <View style={styles.commaView}/>
               </View>
               <View style={styles.lineView2}/>
               <View style={styles.secondView}>
                    
               </View>
           </View>
           <View style={styles.rowView1}>
              <View style={{flex:1}}>
               <Text style={styles.smallRedText}>Review</Text>
              </View> 
               <View style={{flex:1}}/>
              <View style={{flex:1}}>
               <Text style={styles.smallRedText}>Select</Text>
              </View>  
               <View style={{flex:1}}/>
              <View style={{flex:1}}>
               <Text style={styles.smallBlackText}>Confirm</Text>
              </View>  
           </View>
           <View style={styles.shadowView}>
               <Text style={styles.smallText}>Choose from your saved{'\n'}address</Text>
               <Image source={Images.dropdown}/>
           </View>
           <Text style={styles.itemText}>Your Street Address</Text>
           <View style={styles.shadowColumnView}>
               <View style={styles.underlineView}>
                  <Text style={styles.smallText}>Street Address</Text>
               </View>
               <View style={styles.underlineView}>
                  <Text style={styles.smallText}>Apt No / Room No / Suite</Text>
               </View>
               <View style={styles.underlineView}>
                  <Text style={styles.smallText}>City</Text>
               </View>
               <View style={styles.underlinerowView}>
                  <View style={styles.leftView}>
                      <Text style={styles.smallText}>Zip Code</Text>
                  </View>
                  <View style={styles.rightView}>
                      <Text style={styles.smallText}>State</Text>
                      <Image source={Images.dropdown}/>
                  </View>
               </View>
           </View>
           <Text style={styles.itemText}>Delivery Instructions</Text>
           <View style={styles.shadowColumnView1}>               
               <Text style={styles.smallText}>Address code,parking,directions or any{'\n'}notes...</Text>               
           </View>
           <View style={styles.bottomView}>
              <TouchableOpacity style={styles.buttonView} >
                  <Text style={styles.buttonText}>CONTINUE TO CONFIRM</Text>
                  <Text style={styles.numberText}> ($13.59)</Text>
              </TouchableOpacity>
           </View>  
      </View>
    )
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
