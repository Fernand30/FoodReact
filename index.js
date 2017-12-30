import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/config/store'
import Root from './app/root'

const store = configureStore()

const FoodReact = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

AppRegistry.registerComponent('FoodReact', () => FoodReact);
