import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../Component/Header';
import { heightToDp, widthToDp } from '../utils';

function AboutScreen() {

  const navigation=useNavigation()
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  return (
  <Image resizeMode='contain' source={require('../assets/bne_about.jpg')} style={styles.aboutImage}></Image>
  )
}
const styles=StyleSheet.create({
  aboutImage:{
    width:widthToDp(100),
    marginBottom:heightToDp(-60)
  }
})
export default AboutScreen