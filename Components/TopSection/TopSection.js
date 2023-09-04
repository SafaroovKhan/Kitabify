import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import ProfileCircle from './ProfileCircle'

const TopSection = () => {
  return (
    <View style={styles.topsection}>
        <Text style={styles.topheadertext}>Xoş Gəldin, Xan!</Text>
    </View>
  )
}

export default TopSection