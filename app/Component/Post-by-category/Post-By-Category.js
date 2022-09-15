import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByCategory } from '../../store'
import axios from 'axios'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../../utils/responsive/colors'
import NewsCard from '../News-Card/News-Card'

const PostByCategory = ({route}) => {
    const {id,screenName}=route.params
    const [posts,setPosts]=useState([])
    const [page,setPage]=useState(10)

    console.log(id)

    const fetchPostByCategory=async()=>{
      const res=await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?categories=${id}&_embed&per_page=${page}&filter[orderby]=date&order=desc`)
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
      fetchPostByCategory()
    },[page])
  return (
    <>
    <Header
    hasScreenName={true}
    screeName={screenName}
    hasBackButton={true}
    />
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
    </>
  )
}
const styles = StyleSheet.create({
  ActivityIndicator:{
    marginVertical:45,
    alignItems:'center'
  }
})

export default PostByCategory

