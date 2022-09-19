import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightToDp, scale, widthToDp } from '../../utils'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const NewsCard = ({news}) => {
   
   
    const navigation=useNavigation()

    const handlePress=(slug)=>{
        navigation.navigate('Description',{slug:slug})
    }
  return (
  
  
    <TouchableOpacity key={news.id} onPress={()=>handlePress(news?.slug)} style={styles.Container}>
        <View>
        <Image source={news.yoast_head_json.og_image===undefined ?{
            uri:'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'
        }:{
            uri:news.yoast_head_json.og_image[0].url
        }} style={styles.image} />
        </View>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.headline}>{news?.title?.rendered}</Text>
        <Text style={styles.textDate}>{ new Date(news?.date).toDateString()}</Text>
        </View>
      
    </TouchableOpacity>
    

  )
}

export default NewsCard

const styles = StyleSheet.create({
Container:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'white',
    marginBottom:heightToDp(0.5),
    width:widthToDp(100)
},
image:{
    width:widthToDp(30),
    height:heightToDp(15)
},
headline:{
    color:'black',
    fontSize:scale(3.5),
    fontWeight:'bold',
    marginLeft:widthToDp(4),
    width:widthToDp(65)
},
textDate:{
    marginLeft:widthToDp(4),
    color:'#777',
    marginTop:heightToDp(1)
}

})