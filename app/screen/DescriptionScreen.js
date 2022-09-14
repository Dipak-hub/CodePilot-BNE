
import { style } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View,Linking } from 'react-native'
import Header from '../Component/Header'
import { heightToDp, scale, widthToDp } from '../utils' 
import HtmlText from 'react-native-html-to-text'
import colors from '../utils/responsive/colors'

function DescriptionScreen({route}) {
  const {slug}=route.params

  const [data,setData]=useState({})

  const [loading,setLoading]=useState(false)

  const fetchPostBySLug=async()=>{
    const res=await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    setData(res.data)
    setLoading(true)
  }
  useEffect(()=>{
    fetchPostBySLug()
  },[])
  return (
<>
    <Header
     hasLogo={false}
     hasBackButton={true}/>
{
  loading?(
    <>
    <ScrollView style={styles.container}>
    <Image resizeMode='cover'style={styles.bannerImage} source={{uri: data[0]?.yoast_head_json?.og_image[0]?.url}} ></Image>
    <Text style={styles.headLine}>{data[0]?.title?.rendered}</Text>
    <View style={{borderBottomColor:'gray',borderBottomWidth:1,marginTop:widthToDp(5),flexDirection:'row'}}>
      <Image source={require('../assets/favicon.png')} style={{width:widthToDp(6),height:heightToDp(4)}}/>
      <Text style={{color:'gray',marginTop:heightToDp(1)}}> {new Date(data[0]?.date).toDateString()}</Text>

    </View>
    <HtmlText style={styles.content} html={data[0]?.content?.rendered}></HtmlText>
    </ScrollView>
    </>
  ):(
    <ActivityIndicator size={'large'} color={colors.primary} />
  )
}
  
   </>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'column'
  },
  bannerImage:{
    padding:0,
    width:widthToDp(100),
    height:heightToDp(30),
    margin:0,
  },
  headLine:{
    paddingLeft:widthToDp(2),
    paddingRight:widthToDp(2),
    fontSize:scale(4.8),
    color:'black',
    fontWeight:'bold',
  },
  content:{
    padding:0,
    marginBottom:widthToDp(-4),
    color:'gray'
  }
})
export default DescriptionScreen