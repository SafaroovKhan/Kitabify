import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import SelectedBook from '../../Components/SelectedBook/SelectedBook.js'
import {styles} from "../stylefolder/mainstyle.js"
import FullBar from "../../Components/FullBar/FullBar.js"
const MyLibrary = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={styles.androidsafearea}>
        <View style={styles.myLibrary}>
            <View style={styles.libTopMenu}>
                <TouchableOpacity style={styles.libMenuBtnLeft}>
                    <Text style={styles.libMenuText}>
                        Seçilmişlər
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.libMenuBtnRight}>
                    <Text style={styles.libMenuText}>
                        Oxunmuşlar
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.selectedBookContainer}>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                    <SelectedBook/>
                </View>
            </ScrollView>
        </View>
        <FullBar/>
    </SafeAreaView>
  )
}

export default MyLibrary