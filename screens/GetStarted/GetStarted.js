import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { styles } from "../stylefolder/mainstyle.js"
import getstartedbackground from "./GetStartedImages/kitabifygetstartedbackground.png"
export default function GetStarted() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

    const handleGetStartButton = () => {
        navigation.navigate("AboutUs")
    }

  return (
    <>
        <SafeAreaView>
            <View style={styles.getStartedScreen}>
                <Image source={getstartedbackground} style={styles.getStartedBackground}/>
                <View style={styles.getStartedContainer}>
                    <View style={styles.getStartedTextBox}>
                        <Text style={styles.getStartedHeader}>
                            15 dəqiqə içində kitabları dinləməyə başla.
                        </Text>
                        <Text style={styles.getStartedText}>
                            Mümkün qədər qısa zaman içindi yeni kitablar kəşf edib, biliyinizi artırın. 
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.getStartedBtn} onPress={handleGetStartButton}>
                        <Text style={styles.getStartedBtnText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.getStartedBtn}>
                        <Text style={styles.getStartedBtnText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
  )
}