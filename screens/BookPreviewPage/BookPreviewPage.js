import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {styles} from "../stylefolder/mainstyle.js"
import { HeartIcon } from 'react-native-heroicons/solid'
import bookcoverrandom1 from "../../Components/Books/BooksImages/bookcover1.jpeg"
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const BookPreviewPage = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { imgUrl, bookHeader,  bookAuthor, bookAboutText } = route.params;

    const handleBookPage = () => {
        navigation.navigate("BookPage" ,{imgUrl})
    }

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        })
    }, []);

    const handleGoBack = () => {
        navigation.goBack();
      }


  return (
    <SafeAreaView style={styles.androidsafearea}>
        <ScrollView style={styles.bookPreviewPage}>
            <View style={styles.bookPreviewCoverBox}>
                <View style={styles.bookPreviewtopbar}>
                    <TouchableOpacity style={styles.gobackbtn} onPress={handleGoBack}>
                        <ChevronLeftIcon  size={30} style={styles.gobackicon}/>
                    </TouchableOpacity>
                </View>
                <Image source={imgUrl} style={styles.bookCover}/>
            </View>
            <View style={styles.bookPreviewContent}>
                <View style={styles.bookPreviewBtnBox}>
                    <TouchableOpacity style={styles.bookPreviewBtn} onPress={handleBookPage}>
                        <Text style={styles.bookPreviewTxt}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookPreviewIconBtn}>
                        <HeartIcon size={25} style={styles.bookPreviewIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookPreviewAboutBox}>
                    <View style={styles.bookPreviewBookHeaderBox}>
                        <Text style={styles.bookPreviewBookHeader}>{bookHeader}</Text>
                        <Text style={styles.bookPreviewBookAuthor}>{bookAuthor}</Text>
                    </View>
                    <View style={styles.bookPreviewAboutSection}>
                        <Text style={styles.bookPreviewAboutHeader}>What is this book about?</Text>
                        <Text style={styles.bookPreviewAboutTxt}>{bookAboutText}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default BookPreviewPage