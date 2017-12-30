import React, { Component } from 'react';
import { View, Text, StyleSheet ,StatusBar} from 'react-native'

import { connect } from 'react-redux'
import { fetchRestaurantsFromAPI } from '../actions/restaurants'
import Search from '../components/Search'

import PropTypes from 'prop-types'

class Home extends Component{
  constructor(props){
    super(props)
  }

  render() {
    
    return (
      <View style = {{flex: 1}}>
      
        <Search/>
      </View>
    )
  }
}

export default Home