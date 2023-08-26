import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {styles} from "../stylefolder/mainstyle.js"
import Player from '../../Components/Player/Player.js';

const BookPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imgUrl } = route.params; // Get the imgUrl parameter from the route

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);

  return (
    <SafeAreaView style={styles.androidsafearea}>
      <View style={styles.bookpage}>
        <View style={styles.bookpagecoverbox}>
          <Image source={imgUrl}  style={styles.bookcoverpage}/>
        </View>
        <View style={styles.bookpageplayerbox}>
          <Player/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookPage;
