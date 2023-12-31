import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from "../../screens/stylefolder/mainstyle.js"
import { useNavigation } from '@react-navigation/native';

const Book = ({ imgUrl, bookHeader, bookAuthor, bookAboutText}) => {
  const navigation = useNavigation();

  const handleBookPress = () => {
    navigation.navigate("BookPreview", {imgUrl, bookHeader,  bookAuthor, bookAboutText}); // Pass imgUrl as a parameter
  };

  return (
    <TouchableOpacity style={styles.bookpreview} onPress={handleBookPress}>
      <Image source={imgUrl} style={styles.bookpreviewcover} />
    </TouchableOpacity>
  )
}

export default Book;
