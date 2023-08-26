import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image } from 'react-native'
import {styles} from "../stylefolder/mainstyle.js"
import img01 from "./LoadingScreenImages/kitabifylogo.png"
import loadingbackground from './LoadingScreenImages/loadingscreenbackground.png'

const LoadingScreen = () => {

  const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <View style={styles.loadingscreen}>
        <Image source={loadingbackground} style={styles.loadingbackgroundimg}/>
        <Image source={img01} style={styles.loadinglogo}/>
        <Text style={styles.brandtext}>Kitabify</Text>
    </View>
  )
}

export default LoadingScreen