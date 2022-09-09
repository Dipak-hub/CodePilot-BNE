import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native'
import Header from '../Component/Header';

function ContactScreen() {

  const navigation=useNavigation()
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  return (
    <Text>Contact</Text>
  )
}

export default ContactScreen