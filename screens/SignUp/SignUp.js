import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import {styles} from "../stylefolder/mainstyle.js"
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { HeartIcon } from 'react-native-heroicons/solid'
import googleBrand from "./SignUpImages/googleBrand.png"
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const SignUp = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  
  const handleGoBack = () => {
    navigation.goBack();
  }


  return (
    <SafeAreaView>
      <View style={styles.signUpPage}>
        <View style={styles.signUpPageTopBar}>
          <TouchableOpacity style={styles.signUpPageGoBackBtn} onPress={handleGoBack}>
              <ChevronLeftIcon  size={30} style={styles.signUpPageGoBackIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpPageContainer}>
          <View>
            <Text style={styles.signUpPageHeader}>Qeydiyyatdan Keç.</Text>
            <Text style={styles.signUpPageText}>If you want to listen short-form audiobook, you can sign in using Google.</Text>
          </View>
          <TouchableOpacity style={styles.signUpPageBtn}>
            <Image source={googleBrand} style={styles.signUpPageBtnImg}/>
            <Text style={styles.signUpPageBtnText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp