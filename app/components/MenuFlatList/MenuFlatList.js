import React, { Component } from "react"
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { Actions } from 'react-native-router-flux';
import { List, ListItem, SearchBar, ButtonGroup} from "react-native-elements"
import MenuFlatListItem from '../MenuFlatListItem'
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"

import PropTypes from 'prop-types'
import styles from './styles'



//fix refreshing and load more (pages, seeds)
class MenuFlatList extends Component {
  constructor(props){
    super(props)
    this.state = {selectedIndex: 0}
    this.updateIndex = this.updateIndex.bind(this)

    this.buttonDishComponent = () => <Text>Dish</Text>
    this.buttonDealComponent = () => <Text>Deal</Text>
  }

  updateIndex(selectedIndex){
      this.setState({selectedIndex})
  }

  renderSeperator = () => {
    return(
      <View
        style={styles.renderSeperator}
      />
    )
  }

  handleSearchChangeText = (text) => {
    this.setState({...this.state, searchText:text})
  }

  renderHeader = () => {
    return (
      <View>
        <SearchBar placeholder="Search menu items..." lightTheme round />
        <Text> Add More Stuff</Text>
      </View>
    )
  }

  goback(){
    Actions.pop()
  }

  goaddcard(){
    Actions.qty()
  }

  render(){
    //Redux Store State items
    const { store } = this.context
    const state = store.getState()

    console.log("STORE MENU:", store.getState())
    //Selected Item for the ButtonGroup
    const {selectedIndex} = this.state
    const buttons = [{element:this.buttonDishComponent}, {element:this.buttonDealComponent}]

    //assign data depending on the Selected Button in ButtonGroup\
    let data = (selectedIndex==0)?state.dishes.dishes:state.deals.deals

    return(
      <View style = {styles.container}>
              <View style={{height:20}} style={styles.headerView}/>
              <View style={styles.headerView}>

              <TouchableOpacity onPress={this.goback.bind(this)}>
                  <Image source={Images.arrow_right} style={styles.hamburgerImage}/>
              </TouchableOpacity>
              <View style={styles.headerTextInputView}>
                  <Image source={Images.Search} style={styles.searchImage}/>
                  <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)' maxLength = {25} style={styles.headerTextInput}
                    placeholder='Search Restaurants & Cuisines Here'
                    onChangeText = {this.handleSearchChangeText}
                  />
              </View>
              <View style={styles.headerRightView}>
                  <View style={styles.notificationview}>
                      <Text style={styles.notificationNumber}>1</Text>
                  </View>
                  <Image source={Images.recycle} style={styles.recycleImage}/>
              </View>    
           </View>
           <View style={styles.imageView}>
                <Image source={Images.food} style={styles.foodImage}/>
                <View style={styles.absoluteView}>
                    <View style={styles.rowView}>
                        <Text style={styles.largeText}>California Tortilla</Text>
                        <Image source={Images.star} style={styles.starImage}/>
                        <View style={styles.columnView}>
                            <Text style={styles.smallText}>4.</Text>
                            <Text style={styles.smallText}>5</Text>
                        </View>
                    </View>
                    <Text style={styles.mexcianText}>mexcian{'\n'}vegetarian</Text>
                    <View style={styles.rowflexView}>
                          <View style={styles.eachView}>
                                <Text style={styles.smallText}>$2.9</Text>
                                <Text style={styles.smallText}>9</Text>
                                <Text style={styles.smallshaText}>Delivery{'\n'}Fee</Text>
                          </View>
                          <View style={styles.empytView}/>
                          <View style={styles.eachView}>
                                <Text style={styles.smallText}>$2.9</Text>
                                <Text style={styles.smallText}>9</Text>
                                <Text style={styles.smallshaText}>Delivery{'\n'}Fee</Text>
                          </View>
                          <View style={styles.empytView}/>
                          <View style={styles.eachView}>
                                <Text style={styles.smallText}>$2.9</Text>
                                <Text style={styles.smallText}>9</Text>
                                <Text style={styles.smallshaText}>Delivery{'\n'}Fee</Text>
                          </View>
                    </View>
                </View>
           </View>
           <View style={{flex:1}}>
               <View style={styles.buttonView}>
                    <View style={styles.buttonColumnView}>
                        <View style={styles.buttonRowView}>
                            <Image source={Images.ticket} style={styles.ticketImage}/>
                            <Text style={styles.text}>5</Text>
                        </View>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                    <View style={styles.buttonColumnView}>
                        <Text style={styles.redText}>Deals Abailable for</Text>
                        <Text style={styles.redText}>Delivery!</Text>
                    </View>
               </View>
               <View style={styles.commonFlexView}>
                  <Text style={styles.columnText}>Burritos</Text>
                  <View style={styles.childRowView}>
                      <Image source={Images.categories} style={styles.categoriesImage}/>
                      <Text style={styles.columnText}>Categories</Text>
                  </View>
               </View>
               <View style={styles.shadowView}>
                    <Image source={Images.Bitmap} style={styles.BitmapImage}/>
                    <View style={styles.commonColumnView}>
                        <Text style={styles.columnText}>Godzilla Burrito Jalapeno</Text>
                        <Text style={styles.smallshaText}>Big fat Burrito handcrafted by{'\n'}crazy</Text>
                    </View>
                    <View style={styles.commonMarginView}>
                        <Text style={styles.columnText}>$10.95</Text>
                    </View>
               </View>
               <View style={styles.shadowView}>
                    
                    <View style={styles.commonColumnView}>
                        <Text style={styles.columnText}>Godzilla Burrito Jalapeno</Text>
                        <Text style={styles.smallshaText}>Big fat Burrito handcrafted by{'\n'}crazy</Text>
                    </View>
                    <View style={styles.commonMarginView}>
                        <Text style={styles.columnText}>$10.95</Text>
                    </View>
               </View>
               <Text style={styles.smallshaText1}>Burritos</Text>
               <View style={styles.bottomView}>
                   <TouchableOpacity onPress={this.goaddcard.bind(this)} style={styles.bottomButton}>
                      <Text style={styles.buttonText}>CONFIRM YOUR ORDER NOW - </Text>
                      <Text style={styles.numberText}>$11.00</Text>
                   </TouchableOpacity>
               </View>
          </View>     
      </View>
    )
  }
}

MenuFlatList.contextTypes = {
  store: PropTypes.object
}

export default MenuFlatList
