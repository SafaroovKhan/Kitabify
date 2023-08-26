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
        <Slider style={styles.playerslider}  minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="#000000" />
      </View>
      <View style={styles.playericonbox}>
        <TouchableOpacity style={styles.iconbox}>
          <ChevronDoubleLeftIcon size={50} style={styles.playericon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <PlayIcon size={50} style={styles.playericon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <ChevronDoubleRightIcon size={50} style={styles.playericon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Player