import React from 'react'
import {View,Text,StyleSheet, StatusBar} from 'react-native'
import { Provider } from 'react-redux'
import Routes from './app/navigation/Routes'
import store from './app/store/store'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'#c23c45'} />
      <Routes/>
    </View>
    </PersistGate>
    </Provider>
 
  )
}

export default App