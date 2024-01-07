import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Animated, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from "../stylefolder/mainstyle.js";
import workingIllu from "./AboutUsIllustrations/Writer.png";
import cookingIllu from "./AboutUsIllustrations/Cook.png";
import walkingIllu from "./AboutUsIllustrations/Dog-Walker.png";
import gymIllu from "./AboutUsIllustrations/Gym.png";
import chillingIllu from "./AboutUsIllustrations/Old-Couple.png";

export default function AboutUs() {
    const navigation = useNavigation();
    const [currentText, setCurrentText] = useState("işləyərkən");
    const [currentImage, setCurrentImage] = useState(workingIllu);

    const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

    const texts = ["dincələrkən", "gəzərkən", "idman edərkən", "yemək bişirərkən", "işləyərkən",];
    const images = [chillingIllu, walkingIllu, gymIllu, cookingIllu, workingIllu,];

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        fadeIn();
        let index = 0;
        const interval = setInterval(() => {
            fadeOut();
            setTimeout(() => {
                setCurrentText(texts[index]);
                setCurrentImage(images[index]);
                fadeIn();
                index = (index + 1) % texts.length;
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <SafeAreaView>
                <View style={styles.aboutUsScreen}>
                    <View style={styles.aboutUsContainer}>
                        <View style={styles.aboutUsGif}>
                            <Animated.Image source={currentImage} style={[styles.aboutUsIllu, {opacity: fadeAnim}]} />
                        </View>
                        <View style={styles.aboutUsContent}>
                        <View style={styles.aboutUsTextBox}>
                            <Text style={styles.aboutUsHeader}>
                                Kitablarınızı
                            </Text>
                            <Animated.Text style={[styles.aboutUsHeaderVip, { opacity: fadeAnim }]}>
                                {currentText}
                            </Animated.Text>
                            <Text style={styles.aboutUsHeader}>
                                dinləyə bilərsiniz.
                            </Text>
                            <Text style={styles.aboutUsText}>Kitablarınız hər yerdə və hər zaman sizinlədir.</Text>
                        </View>
                            <View style={styles.aboutUsBtns}>
                                <TouchableOpacity style={styles.aboutUsBtn}>
                                    <Text style={styles.aboutUsBtnText}>Tell Your Interest</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.aboutUsBtn}>
                                    <Text style={styles.aboutUsBtnText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
