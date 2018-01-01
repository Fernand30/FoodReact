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

  goReview(){
    Actions.reviewaddress()
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
              <Text style={styles.titleText}>Confirm Order</Text>
              <View/>  
           </View>
           <View style={styles.rView}>
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
               <View style={styles.rowView}>
                    <Text style={styles.largeText}>Califonia Tortilla</Text>
               </View>
               <View style={styles.rowView}>
                    <Image source={Images.Oval}/>
                    <Text style={styles.shaText}>Delivery (ASAP) / Switch to Pickup</Text>
               </View>
               <View style={styles.rowView}>
                    <Image source={Images.Oval}/>
                    <Image source={Images.clock} style={{marginLeft: 10}}/>
                    <Text style={styles.shaText}>30 - 40 mins</Text>
               </View>
               <View style={styles.rowView}>
                    <Image source={Images.greencheck}/>
                    <Text style={styles.shaText}>Order Tracking Available</Text>
                    <Text style={styles.redText}>ADD MORE FOOD?</Text>
               </View>
           </View>
           <View style={styles.shadowView1}>
               <View style={styles.rowflexView}>
                    <Image source={Images.addcheck}/>
                    <Text style={styles.commonText}>1 x Jalapeno Burger w/Drink</Text>
                    <Text style={styles.commonText1}>$4.00</Text>  
               </View>
               
               <View style={styles.rowflexView}>
                    <View style={{width:10}}/>
                    <Text style={styles.commonText2}>Coke</Text>
                    <View style={{flex:1}}/>
               </View>
           </View>
           <View style={styles.shadowView1}>
               <View style={styles.rowflexView}>
                    <Image source={Images.addcheck}/>
                    <Text style={styles.commonText}>1 x Mashroom Burrito w / Drink</Text>
                    <Text style={styles.commonText1}>$9.95</Text>  
               </View>
               <View style={styles.rowflexView}>
                    <View style={{width: 10}}/>
                    <Text style={styles.commonText2}>Sprits</Text>
                    <View style={{flex:1}}/>
               </View>
               <View style={styles.rowflexView}>
                    <View style={{width:10}}/>
                    <Text style={styles.commonText2}>Extra Sauce</Text>
                    <View style={{flex:1}}/>
               </View>
           </View>
           <View style={styles.tiprowView}>
              <View style={styles.tipeachView1}>
                <Text style={styles.tipText1}>Tip</Text>
                <Text style={styles.tipText1}>15%</Text>
              </View>
              <View style={styles.tipeachView2}>
                <Text style={styles.tipText}>Tip</Text>
                <Text style={styles.tipText}>20%</Text>
              </View>
              <View style={styles.tipeachView2}>
                <Text style={styles.tipText}>Tip</Text>
                <Text style={styles.tipText}>25%</Text>
              </View>
              <View style={styles.tipeachView3}>
                <Text style={styles.tipText2}>Confirm Tip</Text>
                <Text style={styles.tipText3}>$2.29</Text>
              </View>
           </View>
           <View style={styles.columnView}>
               <View style={styles.rowflexView}>
                    <Text style={styles.commonText2}>Sub Total</Text>
                    <Text style={styles.commonText}>$10.00</Text>
                    
               </View>
               <View style={[styles.rowflexView,{marginTop:10}]}>
                     <Text style={styles.commonText2}>Delivery Fee</Text>
                    <Text style={styles.commonText}>$2.99</Text>
               </View>
               <View style={[styles.rowflexView,{marginTop:10}]}>
                     <Text style={styles.commonText2}>Taxes</Text>
                     <Text style={styles.commonText}>$0.61</Text>
               </View>
           </View>
           <View style={styles.totalView}>
              <Text style={styles.commonText2}>Total</Text>
              <Text style={styles.commonText}>$13.59</Text>
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
