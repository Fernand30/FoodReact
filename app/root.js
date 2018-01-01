import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,  Scene} from 'react-native-router-flux'

import Home from './screens/Home';
import Restaurants from './screens/Restaurants';
import Cart from './screens/Cart';
import Menu from './screens/Menu';
import MenuItem from './screens/MenuItem';
import Profile from './screens/Profile';
import CartOptions from './screens/CartOptions';
import Qty from './screens/Qty';
import QtyList from './screens/QtyList';
import YourCart from './screens/YourCart';
import ReviewAddress from './screens/ReviewAddress';
import PaymentMethod from './screens/PaymentMethod';
import ConfirmOrder from './screens/ConfirmOrder';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "home" component = {Home} hideNavBar={true} {...this.props} initial/>
      <Scene key = "restaurants" component = {Restaurants} hideNavBar={true} {...this.props} />  
      <Scene key = "cart" component = {Cart} hideNavBar={true} {...this.props} />
      <Scene key = "menu" component = {Menu} hideNavBar={true} {...this.props} />
      <Scene key = "menuitem" component = {MenuItem} hideNavBar={true} {...this.props} />
      <Scene key = "profile" component = {Profile} hideNavBar={true} {...this.props} />
      <Scene key = "cartoptions" component = {CartOptions} hideNavBar={true} {...this.props} />
      <Scene key = "qty" component = {Qty} hideNavBar={true} {...this.props} />
      <Scene key = "qtylist" component = {QtyList} hideNavBar={true} {...this.props} />
      
      <Scene key = "yourcart" component = {YourCart} hideNavBar={true} {...this.props} />
      <Scene key = "reviewaddress" component = {ReviewAddress} hideNavBar={true} {...this.props} />
      <Scene key = "paymentmethod" component = {PaymentMethod} hideNavBar={true} {...this.props} />
      <Scene key = "confirmorder" component = {ConfirmOrder} hideNavBar={true} {...this.props} />
    </Scene>
 </Router>


);

export default Routes