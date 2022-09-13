import React from 'react'
import { Text } from 'react-native'
import Header from '../Component/Header'

function DescriptionScreen({route}) {
  const {slug}=route.params
  return (
<>
    <Header
     hasLogo={false}
     hasBackButton={true}/>
   <Text style={{color:'black'}}>{slug}</Text>
   </>
  )
}

export default DescriptionScreen