import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import Slider from '@react-native-community/slider';
import { ChevronDoubleLeftIcon } from 'react-native-heroicons/solid'
import { ChevronDoubleRightIcon } from 'react-native-heroicons/solid'
import { PlayIcon } from 'react-native-heroicons/solid'

const Player = () => {
  return (
    <View style={styles.playerbox}>
      <View style={styles.sliderbox}>
        <Slider style={styles.playerslider}  
        value={10}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#ff9900"
        maximumTrackTintColor="#000000"
        thumbTintColor='#ff9900'
        onSlidingComplete={() => {}}
         />
         <View style={styles.playerBoxDurations}>
          <Text style={styles.durationText}>00:00</Text>
          <Text style={styles.durationText}>00:00</Text>
         </View>
      </View>
      <View style={styles.playericonbox}>
        <TouchableOpacity style={styles.iconbox}>
          <ChevronDoubleLeftIcon size={30} style={styles.playericon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <PlayIcon size={40} style={styles.playericon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <ChevronDoubleRightIcon size={30} style={styles.playericon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Player