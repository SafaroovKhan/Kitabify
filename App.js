import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from "expo-font"
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookPage from './screens/BookPage/BookPage';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import Subscription from './screens/Subscription/Subscription';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import MyLibrary from './screens/MyLibrary/MyLibrary';
import Profile from './screens/Profile/Profile';
import BookPreviewPage from './screens/BookPreviewPage/BookPreviewPage';
import SignUp from './screens/SignUp/SignUp';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubScreen, setIsSubScreen] = useState(false);
  const [fontsLoaded] = useFonts({
    'Lora': require('./assets/fonts/Lora-VariableFont_wght.ttf'),
  });


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSubScreen(true)
  //   }, 10000);
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading && !fontsLoaded ? (
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        ): 
        (
          <React.Fragment>
            {isSubScreen ? (
              <Stack.Screen name='SubScreen' component={Subscription}/>
            ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Library" component={MyLibrary} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="BookPage" component={BookPage} />
                <Stack.Screen name="BookPreview" component={BookPreviewPage} />
                <Stack.Screen name="SignUp" component={SignUp}/>
              </>
            )}
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
