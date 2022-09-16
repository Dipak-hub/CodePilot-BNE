import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {View,Text,Button, StyleSheet, Image} from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../Component/Header'
import { heightToDp, widthToDp } from '../utils'

function SplashScreen() {
  const navigation=useNavigation()


 const {isLoggedIn}=useSelector((state)=>state.auth)


  useEffect(()=>{
    setTimeout(()=>{
      action()
    },2000)
    
  },[])
  function action(){
  if(!isLoggedIn){
    navigation.reset({
      index: 0,
      routes: [{name:'LoginScreen'}],
    });
  }
  else{
    navigation.reset({
      index: 0,
      routes: [{name:'SideBar'}],
    });
  }
  console.log(isLoggedIn)
  }
  return (
    <>
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('../assets/logo.jpg')}
      resizeMode='contain'
      />
        </View>
        </>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:widthToDp(80),
    heightToDp:heightToDp(80)
  }
})

export default SplashScreen