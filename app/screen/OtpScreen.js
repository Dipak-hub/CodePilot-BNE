import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Component/Header'
import { login } from '../store/slice/auth-slice'
import { heightToDp, scale, widthToDp } from '../utils'

function OtpScreen() {

  const{otp_sent, otp_sessionId,isLoggedIn}=useSelector((state)=>state.auth)
  const[borderBottomColor,setBottomBorderColor]=useState('gray')
  const [otp, setOtp] = useState('');
  const navigation=useNavigation()
  const dispatch=useDispatch();
  const handleFocus=()=>{
    setBottomBorderColor('green')
  }
  const handleChange=num=>{
  if(num.length===6){
    setOtp(num)
  }
  }

  const verifyOtp=()=>{
    dispatch(login({details:otp_sessionId,otp:otp})).unwrap().then(()=>{
      navigation.reset({
        index: 0,
        routes: [{name:'SideBar'}],
      });
    }).catch((e)=>{
     alert('Something went wrong!!!!')
    })
  }
 
  return (
    <>
    <Header
    hasLogo={false}
    hasBackButton={true}
    />
    <View style={styles.container}>
    <Image resizeMode='contain' style={styles.Image} source={require('../assets/access_account.png')} ></Image>
   <TextInput
   onChangeText={num=>handleChange(num)}
   maxLength={6}
   onFocus={handleFocus}
   keyboardType='phone-pad'
   placeholder='Enter OTP'
   placeholderTextColor={'gray'}
   style={[styles.textInput,{borderBottomColor:borderBottomColor}]}/>
   <TouchableOpacity  onPress={verifyOtp} style={styles.button}>

    <Text style={styles.buttonText}>Verify OTP</Text>
   </TouchableOpacity>
  </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    marginBottom: heightToDp(-6),
    height: heightToDp(50),
    width: widthToDp(50),
  },
  textInput: {
    color: 'black',
    width: widthToDp(95),
    fontSize: scale(5),
    borderBottomWidth: scale(0.5),
  },
  button: {
    marginTop: heightToDp(3),
    justifyContent: 'center',
    width: '95%',
    height: heightToDp(6),
    backgroundColor: '#c23c45',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default OtpScreen