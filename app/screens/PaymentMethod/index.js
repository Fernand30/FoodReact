import React, { Component } from 'react';
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import SegmentedControlTab from 'react-native-segmented-control-tab'
import BasicButton from '../../components/BasicButton'
import {removePlateFromCart} from '../../actions/cart'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List, ListItem, SearchBar, ButtonGroup} from "react-native-elements"
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
      isLeft: true,
      selectedIndex: 0,
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

  goConfirm(){
    Actions.confirmorder()
  }

  handleIndexChange = (index) => {
      this.setState({
        selectedIndex: index,
      });
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
               <View style={styles.childRowView}>
                  <Image source={Images.greencheck} style={styles.greenCheck}/>
                  <Text style={styles.smallunshaText}>Saved VISA x-4679</Text>
               </View>
               <View style={styles.childRowView}>
                  <Text style={styles.smallunshaText}>Change</Text>
                  <Image source={Images.dropdown}  style={styles.dropdown}/>
               </View>
           </View>
           <Text style={styles.itemText}>PAYMENT METHOD</Text>
           <View style={styles.selectButtonView}>
              <SegmentedControlTab
                    values={['CredientCard', 'Paypal']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={{color: '#0d9f67'}}
                    tabStyle={{borderColor: '#0d9f67'}}
                    activeTabStyle={{backgroundColor: '#0d9f67'}}
                    />
           </View>
           <View style={styles.shadowColumnView}>
               <View style={styles.underlineView}>
                  <Text style={styles.smallText}>Card Holder Name</Text>
                  <TextInput style={styles.textInput} value='Lousia Simonss'/>
               </View>
               <View style={styles.underlineView}>
                  <Text style={styles.smallText}>Card Number</Text>
                  <TextInput style={styles.textInput} value='2521 5587 3476 4343'/>
               </View>
               <View style={styles.underlinerowView}>
                  <View style={styles.leftView}>
                      <Text style={styles.smallText}>Expiry Date</Text>
                      <Text style={styles.smallText1}>12/18</Text>
                  </View>
                  <View style={styles.rightView}>
                      <Text style={styles.smallText}>CVV</Text>
                      <Text style={styles.smallText}></Text>
                  </View>
               </View>
           </View>
           
           <View style={styles.underlineView1}>
              <View style={{flexDirection:'row'}}>
                  <View style={styles.checkView}>
                      <Image source={Images.check} />
                  </View>
                  <Text style={styles.smallText2}>Don&rsquo;t ask me card details next time</Text>
              </View>   
           </View>
           <View style={styles.underlineView1}>
              <Text style={styles.smallText}>TOTAL:</Text>
              <Text style={styles.smallText1}>$320</Text>
           </View>
           
           <View style={styles.bottomView}>
              <TouchableOpacity onPress={this.goConfirm.bind(this)} style={styles.buttonView} >
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
