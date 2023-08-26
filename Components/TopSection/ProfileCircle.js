import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import { UserCircleIcon } from 'react-native-heroicons/solid'

const ProfileCircle = () => {
  return (
    <View style={styles.profilecircle}>
        <TouchableOpacity>
          <UserCircleIcon size={50} style={styles.icon} />
        </TouchableOpacity>
    </View>
  )
}

export default ProfileCircle