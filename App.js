import React from 'react'
import {View,Text,StyleSheet, StatusBar, SafeAreaView} from 'react-native'
import { Provider } from 'react-redux'
import Routes from './app/navigation/Routes'
import store from './app/store/store'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import colors from './app/utils/responsive/colors'

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={colors.primary} />
      <Routes/>
    </SafeAreaView>
    </PersistGate>
    </Provider>
 
  )
}

export default App