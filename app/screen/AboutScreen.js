import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native'
import Header from '../Component/Header';

function AboutScreen() {

  const navigation=useNavigation()
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  return (
  
 <Text>About</Text>
  )
}

export default AboutScreen