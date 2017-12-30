import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../themes';
import Styles from '../styles/restaurants.js'
import { connect } from 'react-redux'
import { fetchRestaurantsFromAPI } from '../actions/restaurants'
import RestaurantsFlatList from '../components/RestaurantsFlatList'


import PropTypes from 'prop-types'

class Home extends Component{
  constructor(props){
    super(props)
    this.props.getRestaurants()
    this.state = {
      providerId: null
    }
  }

  handleItemPress = (restaurantId) => {
    // this.props.navigator.push({
    //   screen:'Menu',
    //   title: 'Menu',
    //   passProps: {
    //     restaurantId:restaurantId
    //   }
    // })
    Actions.menu()
  }


  render() {
    const { restaurants } = this.props.restaurants;
    return (
      <View style = {{flex: 1,backgroundColor:"#F5F5F5"}}>
        <RestaurantsFlatList
          restaurants = {restaurants}
          onRefresh={() => this.props.getRestaurants()}
          onPress={this.handleItemPress}
        />
      </View>
    )
  }
}

Home.contextTypes = {
  store: PropTypes.object
}

function mapStateToProps (state) {
  return {
    restaurants: state.restaurants,
  }
}

function mapDispatchToProps (dispatch, restaurantId) {
  return {
    getRestaurants: () => dispatch(fetchRestaurantsFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
