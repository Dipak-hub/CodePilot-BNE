import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import {Appbar} from 'react-native-paper'
import { heightToDp, scale, widthToDp } from '../utils'
import colors from '../utils/responsive/colors'

function Header({hasLogo,hasBackButton,hasDrawer,openDrawer,hasScreenName,screeName}) {
 
 const navigation=useNavigation()
  return (
    <View style={styles.container}>
      {
        hasDrawer &&(
        <Appbar.Action
        style={{marginLeft:widthToDp(1)}}
        onPress={openDrawer}
        color='white'
        icon={require('../assets/drawer-icon.png')}
         />
        )
      }
  
      {
        hasBackButton?(
          <Appbar.BackAction
          color="white"
          onPress={() => {
           navigation.goBack()
          }}
        />
        ):null
      }
      {hasLogo?(
       <Image
       resizeMode='contain'
       style={styles.logo}
       source={require('../assets/logo_bne_white.png')}/>
      ):(
        hasScreenName?(
            <Text style={[styles.textStyle,{marginLeft:widthToDp(3),letterSpacing:1.5}]}>{screeName}</Text> 
          ):(
            <Text style={styles.textStyle}>Business Northeast</Text> 
          ) 
         
      )}
     
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      height: heightToDp(6),
      width: widthToDp(100),
    backgroundColor:colors.primary,
    },
    logo:{
      color:'white',
      height:heightToDp(4),
      marginLeft:widthToDp(8)
    },
    textStyle:{
        fontFamily:'open-sans',
        color:'white',
        fontSize:scale(5.5),
        fontWeight:'100'
    }
})

export default Header