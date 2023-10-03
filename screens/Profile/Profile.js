import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import {styles} from "../stylefolder/mainstyle.js"
import {ChartBarIcon} from "react-native-heroicons/solid"
import {Cog6ToothIcon} from "react-native-heroicons/solid"
import FullBar from '../../Components/FullBar/FullBar.js'
const Profile = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={styles.androidsafearea}> 
        <View style={styles.profileContainer}>
            <View style={styles.profileContent}>
              <Text style={styles.profileUserName}>Safarov Xan</Text>
              <View style={styles.profileUserFigureOne}></View>
              <View style={styles.profileUserFigureTwo}></View>
              <View style={styles.profileUserFigureThree}></View>
              <View style={styles.profileUserFigureFour}></View>
            </View>
            <View style={styles.profileMenu}>
              <TouchableOpacity style={styles.profileMenuBtn}>
                <ChartBarIcon size={40} style={styles.icon}/>
                <Text style={styles.profileMenuBtnText}>Statistik</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileMenuBtn}>
                <Cog6ToothIcon size={40} style={styles.icon}/>
                <Text style={styles.profileMenuBtnText}>Tənzimləmələr</Text>
              </TouchableOpacity>
            </View>
        </View>
   
        <FullBar/>
    </SafeAreaView>
  )
}

export default Profile