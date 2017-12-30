import { Navigation } from 'react-native-navigation';

import Home from './screens/Home'
import Menu from './screens/Menu'
import MenuItem from './screens/MenuItem'
import Profile from './screens/Profile'
import Cart from './screens/Cart'

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './config/store'

const store = configureStore()
export default () => {
  Navigation.registerComponent('Home', () => Home, store, Provider)
  Navigation.registerComponent('Menu', () => Menu, store, Provider)
  Navigation.registerComponent('MenuItem', () => MenuItem, store, Provider)
  Navigation.registerComponent('Profile', () => Profile, store, Provider)
  Navigation.registerComponent('Cart', () => Cart, store, Provider)
  Navigation.startTabBasedApp({
    tabs:[
      {
        label: 'Home',
        screen: 'Home',
        icon: require('./images/Home.png'),
        selectedIcon: require('./images/Home.png'),
        title: 'Home Page'
      },
      {
        label: 'My Profile',
        screen: 'Profile',
        icon: require('./images/profile.png'),
        selectedIcon: require('./images/profile.png'),
        title: 'User Profile'
      },
      {
        label: 'My Bag',
        screen: 'Cart',
        icon: require('./images/bag.png'),
        selectedIcon: require('./images/bag.png'),
        title: 'Orders'
      },
    ],
    tabsStyle:{
      tabBarSelectedButtonColor:'#fa7d64'
    }
  })
}
