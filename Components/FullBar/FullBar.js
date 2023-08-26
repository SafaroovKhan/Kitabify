import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import { HomeIcon } from 'react-native-heroicons/solid'
import {MagnifyingGlassIcon} from "react-native-heroicons/solid"
import {BookOpenIcon} from "react-native-heroicons/solid"
import {UserCircleIcon} from "react-native-heroicons/solid"

const FullBar = () => {
  return (
    <View style={styles.fullbar}>
      <TouchableOpacity>
        <HomeIcon  style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <MagnifyingGlassIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <BookOpenIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <UserCircleIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
    </View>
  )
}

export default FullBar;