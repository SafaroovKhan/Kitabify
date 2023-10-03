import React, { useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../stylefolder/mainstyle.js';
import { XMarkIcon } from 'react-native-heroicons/solid';
import SubFigure from './SubImages/subfigure.png';

const Subscription = () => {
  

  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  
  const handleXPress = () => {
    navigation.goBack(); 
  };


  return (
    <View style={styles.subScreen}>
      <View style={styles.subScreenTop}>
        <TouchableOpacity style={styles.subXIcon} onPress={handleXPress}>
          <XMarkIcon size={50} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.subText}>How Subscription Service Works?</Text>
        <Image source={SubFigure} style={styles.subFigure} />
        <Text style={styles.subAbsoTextOne}>7 Days {'\n'}Free Trial</Text>
        <Text style={styles.subAbsoTextTwo}>Pay To Play</Text>
        <View style={styles.subButtonBox}>
          <Text style={styles.subAltTextOne}>7 days free trial then {'\n'}60azn per year (5azn/month) </Text>
          <TouchableOpacity>
            <Text style={styles.subButton}>Start Free Trial</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.subAltTextTwo}>continue for free</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Subscription;
