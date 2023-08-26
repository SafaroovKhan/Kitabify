import {styles} from "../stylefolder/mainstyle.js"
import { View, Text, SafeAreaView, ImageBackground, Button, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import Books from "../../Components/Books/Books.js"
import TopSection from "../../Components/TopSection/TopSection.js"
import FullBar from "../../Components/FullBar/FullBar.js"
import Genres from "../../Components/Genres/Genres.js"

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);


  return (

    <SafeAreaView style={styles.androidsafearea} >
      <View style={styles.homescreentop}>
        <TopSection/>
      </View>
      <Genres/>
      <ScrollView style={{height: "100%"}}>
        <Books/>
      </ScrollView>
      <FullBar/>
    </SafeAreaView>
  )
}

export default HomeScreen;