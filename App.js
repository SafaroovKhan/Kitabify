import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookPage from './screens/BookPage/BookPage';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import Subscription from './screens/Subscription/Subscription';
import SearchScreen from './screens/SearchScreen/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen name="SubPage" component={Subscription} /> */}
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BookPage" component={BookPage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
