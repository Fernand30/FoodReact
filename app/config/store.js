import {createStore, applyMiddleware} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import reducers from '../reducers/';
import thunk from 'redux-thunk';

export default function configureStore(){
  let store = createStore(
    reducers,applyMiddleware(thunk)
  )

  return store
}
