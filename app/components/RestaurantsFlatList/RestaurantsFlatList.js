import React, { Component } from "react"
import { View, ScrollView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from "react-native"
import { List, ListItem, SearchBar, Icon} from "react-native-elements"
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"

import RestaurantFlatListItem from '../RestaurantFlatListItem'
import DealFlatListItem from '../DealFlatListItem'
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types'
import styles from './styles'

//fix refreshing and load more (pages, seeds)
class RestaurantsFlatList extends Component {
  constructor(props){
    super(props)

    this.state = {isRestaurant: true, searchText: '', data: this.props.restaurants}
  }

  handleDealRestaurantButtonPress = () => {
    console.log("State:",this.state)
    this.setState(previousState => {
      return {...this.state, isRestaurant: !previousState.isRestaurant}
    })
  }

  handleSearchChangeText = (text) => {
    this.setState({...this.state, searchText:text})
  }

  filterData = () => {
    restaurants = [...this.props.restaurants]
    var re = new RegExp(this.state.searchText);
    var newRestaurantsList = []
    console.log("weird", this.state.searchText)
    for (i=0; i<restaurants.length; i++){
      if(re.test(restaurants[i].description) || re.test(restaurants[i].restaurantName)) {
        newRestaurantsList.push(restaurants[i])
      }
    }
    console.log("filterData:", newRestaurantsList)
    return newRestaurantsList
  }

  renderSeperator = () => {
    return(
      <View
        style={styles.renderSeperator}
      />
    )
  }

  renderFooter = () => {
    const { store } = this.context
    const state = store.getState().restaurants

    if (!state.isFetching) return null
    return <View style={styles.renderFooter} />
  }

  renderCards = () => {
    return this.props.restaurants.map(item => {
      return this.props.renderCard(item)
    })
  }

  render(){
    const { store } = this.context
    const state = store.getState().restaurants

    let buttonIcon = this.state.isRestaurant ? <Image source={Images.ticket} style={styles.ticketImage}/>:<Image source={Images.cornerup} style={styles.cornerup}/>
    let buttonText = this.state.isRestaurant ? "   Looking for Special Deals?":" Browse All Restaurants"
    data = this.filterData()
    console.log("filterDatMaina:", data)
    data =  [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}]
    return(
      <View style = {styles.container}>
          <View style={{height:20,}}/>
          <View style={styles.headerView}>
              <Image source={Images.menu_hamburger} style={styles.hamburgerImage}/>
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
           <View style={styles.TabView}>
              <Image source={Images.Rectangle} style={styles.rectangleImage}/>
              <Text style={styles.selecTabText}> Nearby</Text>
              <Text style={styles.tabText}> Best Reviews</Text>
              <Text style={styles.tabText}> Fast Delivery</Text>
              <Text style={styles.tabText}> Delivery</Text>
           </View>
           <View style={styles.scrollView}>
              <TouchableOpacity onPress={this.handleDealRestaurantButtonPress} style={styles.lookButton}>
                  {buttonIcon}
                  <Text style={styles.buttonText}>{buttonText}</Text>
              </TouchableOpacity>
              <ScrollView style={{marginTop: 10,backgroundColor:'#f5f5f8',marginHorizontal: 20,}} >
                
                    <FlatList
                      data = {data}
                      renderItem={({ item }) => (
                      this.state.isRestaurant?<RestaurantFlatListItem
                                              item = {item}
                                              onPress = {this.props.onPress}
                                            />

                          :<DealFlatListItem
                                              item = {item}
                                              onPress = {this.props.onPress}
                                            />
                      )}
                      keyExtractor={(item)=>item.id}
                      itemSeperatorComponent={this.renderSeperator}
                      ListFooterComponent = {this.renderFooter}
                      refreshing = {state.refreshing}
                      onRefresh = {this.props.onRefresh}
                    />
                  
              </ScrollView>
           </View>
      </View>
    )
  }
}


RestaurantsFlatList.contextTypes = {
  store: PropTypes.object
}

export default RestaurantsFlatList
