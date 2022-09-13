import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
const YoutubeComponent = () => {

  return (
    <View>
    <YoutubePlayer
      height={250}
      play={false}
      videoId={'4t6HXzmVAsc'}
    />
  </View>
  )
}

export default YoutubeComponent

const styles = StyleSheet.create({})