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

  goY(){
    Actions.yourcart()
  }

  render() {
    let cart = JSON.stringify(this.props.cart)
    return (
      <View style = {styles.container}>
          <Image source={Images.food} style={styles.foodImage}/>
          <View style={styles.absoluteView}>
               <View style={styles.shadowView}>
                   <View style={styles.commonColumnView}>
                        <Text style={styles.columnText}>Godzilla Burrito Jalapeno</Text>
                        <Text style={styles.smallshaText}>Big fat Burrito handcrafted by{'\n'}crazy....</Text>
                   </View>
                   <View>
                        <Text style={styles.columnText}>$10.95</Text>
                   </View>
               </View>
               <Text style={styles.itemText}>Meat (Select1)</Text>
               <View style={styles.columnView}>
                   <View style={styles.rowView}>
                      <TouchableOpacity onPress={this.radioButton1.bind(this)}>
                          <View style={styles.redio}>
                              {(this.state.radio1)?<View style={styles.commaView}/>:null}
                          </View>
                      </TouchableOpacity>
                      <Text>Dennis Spencer</Text>
                  </View>
                  <View style={styles.rowView}>
                      <TouchableOpacity onPress={this.radioButton2.bind(this)}>
                          <View style={styles.redio}>
                              {(this.state.radio2)?<View style={styles.commaView}/>:null}
                          </View>
                      </TouchableOpacity>
                      <Text>Daniel Grant</Text>
                  </View>
                  <View style={styles.rowView}>
                      <TouchableOpacity onPress={this.radioButton3.bind(this)}>
                          <View style={styles.redio}>
                              {(this.state.radio3)?<View style={styles.commaView}/>:null}
                          </View>
                      </TouchableOpacity>
                      <Text>Heather Jacobers</Text>
                  </View>
                  </View>
                  <Text style={styles.itemText}>Toppings (Select as many as you want)</Text>
                  <View style={styles.columnView}>
                      <View style={styles.rowView}>
                          <TouchableOpacity onPress={this.checkButton1.bind(this)}>
                              <View style={styles.check}>
                                  {(this.state.check1)?<View style={styles.checked}><Image source={Images.check}/></View>:null}
                              </View>
                          </TouchableOpacity>
                          <Text>Brian Tucker ($0.05+)</Text>
                      </View>
                      <View style={styles.rowView}>
                          <TouchableOpacity onPress={this.checkButton2.bind(this)}>
                              <View style={styles.check}>
                                  {(this.state.check2)?<View style={styles.checked}><Image source={Images.check}/></View>:null}
                              </View>
                          </TouchableOpacity>
                          <Text>Dennis Spencer ($0.05+)</Text>
                      </View>
                      <View style={styles.rowView}>
                          <TouchableOpacity onPress={this.checkButton3.bind(this)}>
                              <View style={styles.check}>
                                  {(this.state.check3)?<View style={styles.checked}><Image source={Images.check}/></View>:null}
                              </View>
                          </TouchableOpacity>
                          <Text>Daniel Grant ($0.05+)</Text>
                      </View>
                  </View>
                  <Text style={styles.itemText}>Special Instructions</Text>
                  <View style={styles.columnView1}>
                      <Text>Any request on how you want this item prepared ...</Text>
                  </View> 
                  <View style={styles.centerView}> 
                      <View style={styles.addButton}>
                          <Text style={styles.addbuttonText}>-</Text>
                          <Text style={styles.addbuttonText}>1</Text>
                          <Text style={styles.addbuttonText}>+</Text>
                      </View>
                  </View>  
                  <View style={styles.bbView}> 
                      <TouchableOpacity onPress={this.goY.bind(this)}>
                          <View style={styles.bottomButton}>
                              <Text style={styles.addbottomText}>ADD TO CART</Text>
                              <Text style={styles.numberText}>($11.0)</Text>
                          </View>
                      </TouchableOpacity>    
                  </View>      
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
