import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookPage from './screens/BookPage/BookPage';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import Subscription from './screens/Subscription/Subscription';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Loading" component={LoadingScreen}/> */} 
        <Stack.Screen name="SubPage" component={Subscription}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="BookPage" component={BookPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


