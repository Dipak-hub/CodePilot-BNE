import { style } from '@mui/system';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Floatingbutton from '../Component/Floating-button/Floating-button';
import Header from '../Component/Header';
import { scale } from '../utils';
import colors from '../utils/responsive/colors';

function ContactScreen() {

  const navigation=useNavigation()
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  return (
    <>
  <View style={styles.container}>
<Text style={styles.headline}>BUSINESS NORTHEAST</Text>
<Text style={styles.adrress}>Golden Woods Convenient, 2nd floor, Opposite Janambhumi Press, Manik Nagar, R.G Baruah Road, Guwahati, Assam – 781005</Text>
<Text style={styles.email}> mail@business-northeast.com</Text>
  </View>
  <Floatingbutton />
  </>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headline:{
    color:colors.primary,
    fontSize:scale(5),
    fontWeight:'bold'
  },
  adrress:{
    color:'gray'
  },
  email:{
    color:'blue'
  }
})
export default ContactScreen