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
    <View>
  <Image resizeMode='contain' source={require('../assets/bne_about.jpg')} style={styles.aboutImage}></Image>
  <Text style={styles.content}> There is NO business portal addressing the potential of business capability of North East Region. We are taking the informative content data through social media platform to all citizens for their awareness and benefits.</Text>
        <Text style={styles.nextLineContent}>Focusing on providing more and more awareness to the citizens regarding Govt. policies and schemes to help, build &amp; encourage entrepreneurship.</Text>

        <Text  style={styles.nextLineContent}>  We are taking the informative content data through social media platform to all citizens for their awareness and benefits. Innovative Services – Providing Information -as-a-Service.</Text>

        <Text  style={styles.nextLineContent}>  We envisaged ourselves to become service provider which is informative content based on researched data upon interacting with all sectors companies capturing their vision, growth as on continuous process and broadcast to the citizens.</Text>
  </View>
  )
}
const styles=StyleSheet.create({
  aboutImage:{
    padding:5,
    width:widthToDp(100),
    marginTop:heightToDp(-55)
  },
  content:{
    marginTop:heightToDp(-50)
  },
  nextLineContent:{
    marginTop:heightToDp(5)
  }
})
export default AboutScreen