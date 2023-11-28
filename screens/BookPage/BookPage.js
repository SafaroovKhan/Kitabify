import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {styles} from "../stylefolder/mainstyle.js"
import Player from '../../Components/Player/Player.js';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const BookPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imgUrl, bookHeader,  } = route.params; // Get the imgUrl parameter from the route

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.androidsafearea}>
      <View style={styles.bookpage}>
        <View style={styles.bookpagecoverbox}>
          <View style={styles.bookpagetopbar}>
            <TouchableOpacity style={styles.gobackbtn} onPress={handleGoBack}>
              <ChevronLeftIcon  size={30} style={styles.gobackicon}/>
            </TouchableOpacity>
          </View>
          <Image source={imgUrl}  style={styles.bookCover}/>
        </View>
        <View style={styles.bookpageplayerbox}>
          <Player/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookPage;
