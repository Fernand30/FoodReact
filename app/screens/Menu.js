import React, { Component } from 'react';
import { View, Text, StyleSheet ,StatusBar} from 'react-native'

import { connect } from 'react-redux'
import { fetchDishesFromAPI, fetchDealsFromAPI } from '../actions/plates'

import MenuFlatList from '../components/MenuFlatList'
import Container from '../components/Container'

import PropTypes from 'prop-types'


class Menu extends Component{
  constructor(props){
    super(props)
    this.props.getDishes(this.props.restaurantId)
    this.props.getDeals(this.props.restaurantId)

    this.buttonDishComponent = () => <Text>Dish</Text>
    this.buttonDealComponent = () => <Text>Deal</Text>
  }

  handleItemPress = (plate) => {
    this.props.navigator.push({
      screen:'MenuItem',
      title: 'MenuItem',
      passProps: plate
    })
  }

  handleDishRefresh = () => {
    this.props.getDishes(this.props.restaurantId)
  }

  handleDealRefresh = () => {
    this.props.getDeals(this.props.restaurantId)
  }

  sortItemByCategories = () => {
      return null
  }

  render(){
    return(
      <View style = {{flex: 1,backgroundColor:"#F5F5F5"}}>
        < MenuFlatList
          onDishRefresh={this.handleDishRefresh}
          onDealRefresh={this.handleDealRefresh}
          onItemPress={this.handleItemPress}
        />
      </View>
    )
  }
}

Menu.contextTypes = {
  store: PropTypes.object
}

function mapStateToProps (state){
  return {
    dishes: state.dishes,
    deals: state.deals
  }
}

function mapDispatchToProps (dispatch, restaurantId){
  return {
    getDishes: (restaurantId) => dispatch(fetchDishesFromAPI(restaurantId)),
    getDeals: (restaurantId) => dispatch(fetchDealsFromAPI(restaurantId))
  }
}
export default connect(
  mapStateToProps,
   mapDispatchToProps)(Menu)
