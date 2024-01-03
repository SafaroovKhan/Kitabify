import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import { styles } from "../stylefolder/mainstyle.js"
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { ChevronLeftIcon, EyeSlashIcon, EyeIcon } from 'react-native-heroicons/solid'

import googleBrand from "./SignUpImages/googleBrand.png"

const SignUp = () => {

  const navigation = useNavigation();

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  const togglePasswordVisitbility = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password);
  }

  return (
    <SafeAreaView>
      <View style={styles.signUpPage}>
        <View style={styles.signUpPageTopBar}>
          <TouchableOpacity style={styles.signUpPageGoBackBtn} onPress={handleGoBack}>
            <ChevronLeftIcon size={30} style={styles.signUpPageGoBackIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpPageContainer}>
          <View style={styles.signUpPageBox}>
            <View>
              <Text style={styles.signUpPageHeader}>Qeydiyyatdan Keç</Text>
            </View>
            <View style={styles.signUpPageForms}>
              <TextInput 
                style={styles.input} 
                onChangeText={setFirstName} 
                value={firstName} 
                placeholder="Ad"
                placeholderTextColor={"#fff"}
              />
              <TextInput 
                style={styles.input} 
                onChangeText={setLastName} 
                value={lastName} 
                placeholder="Soyad"
                placeholderTextColor={"#fff"}
              />
              <TextInput 
                style={styles.input} 
                onChangeText={setEmail} 
                value={email} 
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor={"#fff"}
              />
              <View>
                <TextInput 
                  style={styles.input} 
                  onChangeText={setPassword} 
                  value={password} 
                  placeholder="Şifrə"
                  secureTextEntry={!passwordVisibility}
                  placeholderTextColor={"#fff"}
                />
                <TouchableOpacity style={styles.passVisBtnBox} onPress={togglePasswordVisitbility}>
                  {passwordVisibility ? (
                      <EyeIcon size={30} style={styles.passVisBtn}/>
                    ) : (
                      <EyeSlashIcon size={30} style={styles.passVisBtn}/>
                    )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.signUpPageButtons}>
              <TouchableOpacity style={styles.signUpPageBtn} onPress={handleSubmit}>
                <Text style={styles.signUpPageBtnText}>Qeydiyyatdan Keç</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signUpPageBtn}>
                <Image source={googleBrand} style={styles.signUpPageBtnImg}/>
                <Text style={styles.signUpPageBtnText}>Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp
