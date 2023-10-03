import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import {styles} from "../../screens/stylefolder/mainstyle.js"
import bookcoverrandom from "../Books/BooksImages/bookcover1.jpeg"


const SelectedBook = () => {
  return (
    <View style={styles.selectedBookBox}>
        <View style={styles.selectedBookCoverBox}>
            <Image source={bookcoverrandom} style={styles.selectedBookCover}/>
        </View>
        <View style={styles.selectedBookContent}>
            <Text style={styles.selectedBookHeader}>The 48 Laws of The Power</Text>
            <Text style={styles.selectedBookDescription}>This book is recommend us 48 laws of power which we need to follow to get better results in life.</Text>
            <View style={styles.libPlayBtnBox}>
                <TouchableOpacity style={styles.libHeartBtn}>
                    <HeartIcon size={30} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.libPlayBtn}>
                    <Text style={styles.libPlayBtnText}>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SelectedBook