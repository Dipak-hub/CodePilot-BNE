import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/responsive/colors'
import NewsCard from '../News-Card/News-Card'

function Northeast() {

  const [page,setPage]=useState(10)
  const [posts,setPosts]=useState([])

  const fetchPost=async()=>{
 
      const res = await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?categories=21&_embed&per_page=${page}&filter[orderby]=date&order=desc`)
      setPosts(res.data)
  }

  const fetchMoreData=()=>{
    setPage(page+2)
   }

   function renderLoader(){
    return(
      <View style={styles.ActivityIndicator}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
    )
    
  }
  useEffect(()=>{
    fetchPost()
  },[page])
  return (
    <View>
    <FlatList
    contentContainerStyle={{flexGrow:1}}
    keyExtractor={item=>item.id}
    data={posts}
    renderItem={({item})=>(
      <NewsCard news={item} />
    )}
    ListFooterComponent={renderLoader}
    onEndReachedThreshold={0.2}
    onEndReached={fetchMoreData}
   
    />
    </View>
  )
}
const styles = StyleSheet.create({
  ActivityIndicator:{
    marginVertical:45,
    alignItems:'center'
  }
})


export default Northeast