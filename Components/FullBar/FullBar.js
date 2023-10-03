import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import { HomeIcon } from 'react-native-heroicons/solid'
import {MagnifyingGlassIcon} from "react-native-heroicons/solid"
import {BookOpenIcon} from "react-native-heroicons/solid"
import {UserCircleIcon} from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';

const FullBar = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("Home"); 
  };
  const handleSearchPress = () => {
    navigation.navigate("Search"); 
  };
  const handleLibPress = () => {
    navigation.navigate("Library"); 
  };
  const handleProfilePress = () => {
    navigation.navigate("Profile"); 
  };
  return (
    <View style={styles.fullbar}>
      <TouchableOpacity onPress={handleHomePress}>
        <HomeIcon  style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearchPress}>
        <MagnifyingGlassIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLibPress}>
        <BookOpenIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfilePress}>
        <UserCircleIcon style={styles.icon} size={38}/>
      </TouchableOpacity>
    </View>
  )
}

export default FullBar;